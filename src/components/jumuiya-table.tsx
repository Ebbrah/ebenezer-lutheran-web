import type { jumuiyaRows } from "@/data/uongozi-content";

type JumuiyaRow = (typeof jumuiyaRows)[number];

type JumuiyaTableProps = {
  rows: readonly JumuiyaRow[];
};

export function JumuiyaTable({ rows }: JumuiyaTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[var(--border)] shadow-sm">
      <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-[var(--border)] bg-[var(--primary)] text-[var(--primary-foreground)]">
            <th className="px-4 py-3 font-heading font-semibold">Na.</th>
            <th className="px-4 py-3 font-heading font-semibold">
              Jina la Jumuiya
            </th>
            <th className="px-4 py-3 font-heading font-semibold">Mwenyekiti</th>
            <th className="px-4 py-3 font-heading font-semibold">
              Wazee wa Kanisa
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.no}
              className={
                i % 2 === 0
                  ? "bg-[var(--background)]"
                  : "bg-[var(--muted)]/20"
              }
            >
              <td className="px-4 py-3 font-medium tabular-nums text-[var(--foreground)]">
                {row.no}
              </td>
              <td className="px-4 py-3 font-medium text-[var(--foreground)]">
                {row.name}
              </td>
              <td className="px-4 py-3 text-[var(--muted-foreground)]">
                {row.chair}
              </td>
              <td className="px-4 py-3 text-[var(--muted-foreground)]">
                {row.wazee}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
