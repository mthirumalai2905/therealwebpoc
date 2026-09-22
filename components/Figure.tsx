import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  caption?: string;
};

export function Figure({ src, alt, caption }: Props) {
  return (
    <figure className="diagram-block my-8 overflow-hidden border border-[var(--line)]">
      <div className="relative aspect-[16/9] bg-black">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 768px) 736px, 100vw" />
      </div>
      {caption ? (
        <figcaption className="border-t border-[var(--line)] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
