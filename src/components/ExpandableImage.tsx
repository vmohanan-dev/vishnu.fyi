"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ExpandableImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export function ExpandableImage({
  src,
  alt,
  width = 1200,
  height = 800,
  className,
}: ExpandableImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Expand image: ${alt}`}
        className="block w-full cursor-zoom-in"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/80 p-4 cursor-zoom-out"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="h-auto w-auto max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
