#!/usr/bin/env bash
# Relink all skills into local agent skill directories.
#   - Vendored skills: cloned/pulled from upstream (sources.tsv), symlinked.
#   - Authored skills: everything under authored/, symlinked.
# Existing real directories at a target are moved to a timestamped backup,
# never deleted. Re-running is safe and idempotent.
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCES="$REPO_DIR/sources.tsv"
SRC_CACHE="$REPO_DIR/.sources"
DESTS=("$HOME/.claude/skills" "$HOME/.codex/skills")

mkdir -p "$SRC_CACHE"

link() { # <target_path> <skill_name>
  target="$1"; name="$2"
  if [ ! -e "$target" ]; then
    echo "  SKIP  $name (missing source: $target)"; return
  fi

  for dest_root in "${DESTS[@]}"; do
    mkdir -p "$dest_root"
    dest="$dest_root/$name"
    backup="$(dirname "$dest_root")/skills-backup-$(date +%Y%m%d-%H%M%S)"

    if [ -L "$dest" ]; then
      rm "$dest"
    elif [ -e "$dest" ]; then
      mkdir -p "$backup"; mv "$dest" "$backup/"; echo "  backed up existing $name -> ${backup/#$HOME/~}/$name"
    fi

    ln -s "$target" "$dest"
    echo "  link  ${dest/#$HOME/~} -> ${target/#$HOME/~}"
  done
}

clone_key() { # <repo_url> -> owner-repo
  echo "$1" | sed -E 's#.*github\.com[:/]([^/]+)/([^/.]+)(\.git)?$#\1-\2#'
}

echo "Vendored skills:"
PULLED=""
while IFS=$'\t' read -r name repo subpath; do
  case "$name" in ""|\#*) continue;; esac
  key="$(clone_key "$repo")"
  clone="$SRC_CACHE/$key"
  case " $PULLED " in
    *" $key "*) ;;
    *)
      if [ -d "$clone/.git" ]; then git -C "$clone" pull -q; else git clone -q "$repo" "$clone"; fi
      PULLED="$PULLED $key" ;;
  esac
  link "$clone/$subpath" "$name"
done < "$SOURCES"

echo "Authored skills:"
for d in "$REPO_DIR"/authored/*/; do
  [ -d "$d" ] || continue
  link "${d%/}" "$(basename "$d")"
done

echo "Claude-only skills:"
mkdir -p "$HOME/.codex/skills"
for src in "$HOME"/.claude/skills/*; do
  [ -e "$src" ] || continue
  name="$(basename "$src")"
  dest="$HOME/.codex/skills/$name"

  if [ -e "$dest" ] || [ -L "$dest" ]; then
    echo "  keep  ${dest/#$HOME/~}"
    continue
  fi

  ln -s "$src" "$dest"
  echo "  link  ${dest/#$HOME/~} -> ${src/#$HOME/~}"
done

echo "Done."
