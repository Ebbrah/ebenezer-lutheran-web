import type { WajibuListEntry, WajibuSection } from "@/data/wajibu-content";
import { cn } from "@/lib/utils";

function WajibuListItem({ entry }: { entry: WajibuListEntry }) {
  if (typeof entry === "string") {
    return (
      <li className="pl-1 text-[15px] leading-relaxed text-[var(--muted-foreground)] sm:text-base sm:leading-[1.75]">
        <span className="text-[var(--foreground)]">{entry}</span>
      </li>
    );
  }

  const subListClass =
    entry.subListStyle === "decimal"
      ? "list-decimal"
      : "list-[lower-roman]";

  return (
    <li className="pl-1 text-[15px] leading-relaxed text-[var(--muted-foreground)] sm:text-base sm:leading-[1.75]">
      <span className="text-[var(--foreground)]">{entry.lead}</span>
      <ol
        className={cn(
          "mt-3 space-y-2 pl-6 marker:font-medium marker:text-[var(--primary)]",
          subListClass,
        )}
      >
        {entry.subItems.map((sub) => (
          <li key={sub}>{sub}</li>
        ))}
      </ol>
    </li>
  );
}

export function WajibuSections({
  sections,
}: {
  sections: readonly WajibuSection[];
}) {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section
          key={section.id}
          aria-labelledby={`wajibu-${section.id}`}
          className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-sm sm:p-6"
        >
          <div className="mb-6 border-b border-[var(--border)] pb-4">
            <h2
              id={`wajibu-${section.id}`}
              className="font-heading text-lg font-semibold tracking-tight text-[var(--primary)] sm:text-xl"
            >
              {section.title}
            </h2>
            <p className="mt-1 text-sm text-[var(--muted-foreground)]">
              Wajibu {section.entries.length}
            </p>
          </div>
          <ol className="list-decimal space-y-4 pl-5 marker:font-semibold marker:text-[var(--primary)]">
            {section.entries.map((entry, index) => (
              <WajibuListItem key={`${section.id}-${index}`} entry={entry} />
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
