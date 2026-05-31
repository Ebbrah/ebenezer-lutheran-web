import type {
  VipaumbeleCommitteeSection,
  VipaumbeleSubSection,
} from "@/data/vipaumbele-content";

function PriorityList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3" role="list">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-[15px] leading-relaxed text-[var(--muted-foreground)] sm:text-base sm:leading-[1.75]"
        >
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]"
            aria-hidden
          />
          <span className="text-[var(--foreground)]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SubSectionBlock({ subsection }: { subsection: VipaumbeleSubSection }) {
  return (
    <div className="rounded-lg border border-[var(--border)]/80 bg-[var(--muted)]/20 p-4 sm:p-5">
      <h3 className="border-l-4 border-[var(--primary)] pl-3 font-heading text-base font-semibold tracking-tight text-[var(--foreground)] sm:text-lg">
        {subsection.title}
      </h3>
      <div className="mt-4">
        <PriorityList items={subsection.items} />
      </div>
    </div>
  );
}

export function VipaumbeleCommitteeSections({
  sections,
}: {
  sections: readonly VipaumbeleCommitteeSection[];
}) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section
          key={section.id}
          aria-labelledby={`vipaumbele-kamati-${section.id}`}
          className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-sm sm:p-6"
        >
          <div className="mb-6 border-b border-[var(--border)] pb-4">
            <h2
              id={`vipaumbele-kamati-${section.id}`}
              className="font-heading text-lg font-semibold tracking-tight text-[var(--primary)] sm:text-xl"
            >
              {section.title}
            </h2>
            {section.subsections?.length ? (
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                Sehemu {section.subsections.length}
              </p>
            ) : null}
          </div>
          {section.items?.length ? (
            <PriorityList items={section.items} />
          ) : null}
          {section.subsections?.length ? (
            <div className="space-y-4">
              {section.subsections.map((subsection) => (
                <SubSectionBlock
                  key={`${section.id}-${subsection.title}`}
                  subsection={subsection}
                />
              ))}
            </div>
          ) : null}
        </section>
      ))}
    </div>
  );
}
