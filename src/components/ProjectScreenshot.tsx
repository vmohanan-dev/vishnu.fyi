import type { ReactNode } from "react";
import Image from "next/image";
import { ExpandableImage } from "./ExpandableImage";

type ScreenshotProps = {
  src: string;
  alt: string;
  url?: string;
  caption?: string;
  width?: number;
  height?: number;
  mediaClassName?: string;
};

type ComparisonProps = {
  before: ScreenshotProps;
  after: ScreenshotProps;
  url?: string;
};

type MobileScreenshotsProps = {
  screens: { src: string; alt: string; caption?: string }[];
};

function ChromeBar({ url }: { url?: string }) {
  return (
    <div className="bg-zinc-100 border-b border-zinc-200 px-4 py-2.5 flex items-center gap-2">
      <div className="flex gap-1.5 flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-zinc-300" />
        <div className="w-3 h-3 rounded-full bg-zinc-300" />
        <div className="w-3 h-3 rounded-full bg-zinc-300" />
      </div>
      {url && (
        <div className="flex-1 bg-white rounded border border-zinc-200 px-3 py-1 ml-2 min-w-0">
          <span className="text-xs font-mono text-zinc-400 truncate block">
            {url}
          </span>
        </div>
      )}
    </div>
  );
}

export function Screenshot({
  src,
  alt,
  url,
  caption,
  width = 1200,
  height = 800,
  mediaClassName,
}: ScreenshotProps) {
  return (
    <figure className="rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
      <ChromeBar url={url} />
      <ExpandableImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={mediaClassName ?? "w-full"}
      />
      {caption && (
        <figcaption className="text-xs font-mono text-zinc-400 px-4 py-2.5 bg-zinc-50 border-t border-zinc-100">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function ComparisonPane({
  label,
  shot,
  url,
}: {
  label: string;
  shot: ScreenshotProps;
  url?: string;
}) {
  return (
    <div>
      <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
        {label}
      </p>
      <figure className="rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
        <ChromeBar url={url ?? shot.url} />
        <ExpandableImage
          src={shot.src}
          alt={shot.alt}
          width={shot.width ?? 1200}
          height={shot.height ?? 800}
          className={shot.mediaClassName ?? "w-full"}
        />
        {shot.caption && (
          <figcaption className="text-xs font-mono text-zinc-400 px-4 py-2.5 bg-zinc-50 border-t border-zinc-100">
            {shot.caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}

export function BeforeAfter({ before, after, url }: ComparisonProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
      <ComparisonPane label="Before" shot={before} url={url} />
      <ComparisonPane label="After" shot={after} url={url} />
    </div>
  );
}

type VideoProps = {
  src: string;
  poster?: string;
  caption?: string;
  mediaClassName?: string;
};

export function Video({ src, poster, caption, mediaClassName }: VideoProps) {
  return (
    <figure className="rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        className={mediaClassName ?? "w-full block bg-zinc-900"}
      />
      {caption && (
        <figcaption className="text-xs font-mono text-zinc-400 px-4 py-2.5 bg-zinc-50 border-t border-zinc-100">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function MediaPair({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
      {children}
    </div>
  );
}

export function MobileScreenshots({ screens }: MobileScreenshotsProps) {
  return (
    <div className={`grid gap-4 ${screens.length === 1 ? "grid-cols-1 max-w-xs mx-auto" : screens.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
      {screens.map((screen) => (
        <figure
          key={screen.src}
          className="rounded-xl overflow-hidden border border-zinc-200 shadow-sm"
        >
          <Image
            src={screen.src}
            alt={screen.alt}
            width={400}
            height={700}
            className="w-full"
          />
          {screen.caption && (
            <figcaption className="text-xs font-mono text-zinc-400 px-3 py-2 bg-zinc-50 border-t border-zinc-100">
              {screen.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
