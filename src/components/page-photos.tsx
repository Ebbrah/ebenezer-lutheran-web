import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { MatukioAlbumItem, PagePhoto } from "@/data/page-photos";
import { cn } from "@/lib/utils";

type PagePhotoFrameProps = {
  photo: PagePhoto;
  /** Picha ya muda ikiwa faili halisi haijawekwa bado */
  fallbackSrc?: string;
  aspect?: "video" | "square" | "portrait";
  priority?: boolean;
  sizes?: string;
  showCaption?: boolean;
  className?: string;
};

function resolveSrc(photo: PagePhoto, fallbackSrc?: string) {
  return fallbackSrc ?? photo.src;
}

export function PagePhotoFrame({
  photo,
  fallbackSrc,
  aspect = "video",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  showCaption = false,
  className,
}: PagePhotoFrameProps) {
  const src = resolveSrc(photo, fallbackSrc);
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "portrait"
        ? "aspect-[3/4]"
        : "aspect-video";

  return (
    <figure className={cn("group overflow-hidden", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 shadow-sm",
          aspectClass,
        )}
      >
        <Image
          src={src}
          alt={photo.alt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes={sizes}
          priority={priority}
        />
        {showCaption && photo.caption ? (
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-3 py-2 text-[10px] font-medium text-white/90">
            {photo.caption}
          </figcaption>
        ) : null}
      </div>
    </figure>
  );
}

export function PagePhotoPlaceholder({
  label,
  aspect = "video",
  className,
}: {
  label: string;
  aspect?: "video" | "square" | "portrait";
  className?: string;
}) {
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "portrait"
        ? "aspect-[3/4]"
        : "aspect-video";

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[var(--primary)]/40 bg-[var(--muted)]/25 px-4 text-center",
        aspectClass,
        className,
      )}
    >
      <ImageIcon className="h-8 w-8 text-[var(--primary)]/70" aria-hidden />
      <p className="text-xs font-medium text-[var(--muted-foreground)]">{label}</p>
    </div>
  );
}

/** Picha kubwa juu ya maandishi */
export function PagePhotoHero({
  photo,
  fallbackSrc,
  className,
}: {
  photo: PagePhoto;
  fallbackSrc?: string;
  className?: string;
}) {
  return (
    <PagePhotoFrame
      photo={photo}
      fallbackSrc={fallbackSrc}
      aspect="video"
      priority
      sizes="(max-width: 768px) 100vw, 896px"
      className={cn("mb-8", className)}
    />
  );
}

/** Safu ya picha 4 (thumbnails) */
export function PagePhotoRow({
  photos,
  className,
}: {
  photos: readonly PagePhoto[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4",
        className,
      )}
    >
      {photos.map((photo) => (
        <PagePhotoFrame
          key={photo.src + photo.alt}
          photo={photo}
          aspect="square"
          sizes="(max-width: 640px) 50vw, 25vw"
        />
      ))}
    </div>
  );
}

/** Kikundi kimoja — kichwa + picha */
/** Albamu ya matukio — grid ya picha za shughuli */
export function MatukioPhotoAlbum({
  items,
}: {
  items: readonly MatukioAlbumItem[];
}) {
  return (
    <div className="space-y-6">
      
      <ul className="grid grid-cols-2 auto-rows-[minmax(9rem,1fr)] gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => {
          const featured = index === 0 || index === 5;
          return (
            <li
              key={`${item.title}-${index}`}
              className={cn(
                featured && "col-span-2 row-span-2",
              )}
            >
              <a
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full min-h-[9rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] sm:min-h-[10rem]"
              >
                <figure className="relative h-full min-h-[inherit] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 shadow-sm">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes={
                      featured
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 50vw, 25vw"
                    }
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-3 pb-2.5 pt-8">
                    {item.category ? (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--secondary-foreground)]">
                        {item.category}
                      </span>
                    ) : null}
                    <p className="font-heading text-sm font-semibold text-white sm:text-base">
                      {item.title}
                    </p>
                  </figcaption>
                </figure>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
