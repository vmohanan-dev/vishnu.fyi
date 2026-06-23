#!/usr/bin/env bash
# Relink all skills into ~/.claude/skills.
#   - Vendored skills: cloned/pulled from upstream (sources.tsv), symlinked.
#   - Authored skills: everything under authored/, symlinked.
# Existing real directories at a target are moved to a timestamped backup,
# never deleted. Re-running is safe and idempotent.
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCES="$REPO_DIR/sources.tsv"
SRC_CACHE="$REPO_DIR/.sources"
DEST="$HOME/.claude/skills"
BACKUP="$HOME/.claude/skills-backup-$(date +%Y%m%d-%H%M%S)"

mkdir -p "$DEST" "$SRC_CACHE"

link() { # <target_path> <skill_name>
  target="$1"; name="$2"; dest="$DEST/$name"
  if [ ! -e "$target" ]; then
    echo "  SKIP  $name (missing source: $target)"; return
  fi
  if [ -L "$dest" ]; then
    rm "$dest"
  elif [ -e "$dest" ]; then
    mkdir -p "$BACKUP"; mv "$dest" "$BACKUP/"; echo "  backed up existing $name -> $BACKUP/$name"
  fi
  ln -s "$target" "$dest"
  echo "  link  $name -> ${target/#$HOME/~}"
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

echo "Done."
