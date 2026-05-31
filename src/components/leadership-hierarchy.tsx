import Link from "next/link";
import type { LeadershipTreeNode } from "@/data/leadership-structure";
import { leadershipStructure } from "@/data/leadership-structure";

/** Rangi za chati — sawa na mandhari ya tovuti */
const LINE = "bg-[var(--primary)]";
const BOX =
  "rounded border-2 border-[var(--primary)] bg-[color-mix(in_srgb,var(--muted)_45%,var(--background))] shadow-sm";
const LABEL_TOP =
  "font-heading text-sm font-bold uppercase leading-snug tracking-wide text-[var(--accent)] sm:text-base";
const LABEL_BRANCH =
  "font-heading text-[10px] font-bold uppercase leading-tight text-[var(--accent)] sm:text-[11px] xl:text-xs";
const LABEL_SUB =
  "text-xs font-semibold text-[var(--secondary-foreground)] sm:text-sm";

export function LeadershipHierarchy() {
  const [mkutano, baraza, kamati] = leadershipStructure;
  const branches = kamati.children ?? [];

  return (
    <div
      className="mx-auto w-full"
      role="figure"
      aria-label="Muundo wa uongozi wa usharika"
    >
      {/* Mkutano → Baraza → Kamati */}
      <div className="flex flex-col items-center">
        <OrgBox node={mkutano} variant="top" />
        <ConnectorStem className="h-8" />
        <OrgBox node={baraza} variant="top" />
        <ConnectorStem className="h-8" />
        <OrgBox node={kamati} variant="top" />
      </div>

      {/* Kamati → T-junction → matawi sita (sawa kwenye desktop; simu: telezesha mlalo) */}
      <div className="flex w-full flex-col items-center">
        <div className="-mx-4 w-[calc(100%+2rem)] overflow-x-auto overscroll-x-contain px-4 pb-2 [-webkit-overflow-scrolling:touch] sm:-mx-6 sm:w-[calc(100%+3rem)] sm:px-6 xl:mx-0 xl:w-full xl:overflow-visible xl:px-0 xl:pb-0">
          <p className="mb-2 text-center text-[11px] text-[var(--muted-foreground)] xl:hidden">
            Telezesha kushoto/kulia kuona matawi yote
          </p>
          <div className="mx-auto w-full min-w-[40rem] max-w-6xl xl:min-w-0">
            <KamatiBranchBus />
            <div className="grid grid-cols-6">
              {branches.map((branch) => (
                <KamatiColumn key={branch.label} branch={branch} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KamatiColumn({ branch }: { branch: LeadershipTreeNode }) {
  const hasChildren = branch.children && branch.children.length > 0;
  const directReports =
    branch.label === "MALEZI" ||
    branch.label.startsWith("UINJILISTI MISIONI NA UWAKILI");

  return (
    <div className="flex flex-col items-center px-0.5">
      <OrgBox node={branch} variant="branch" />
      {hasChildren ? (
        directReports ? (
          <DirectReportStack items={branch.children!} />
        ) : (
          <SubBranchStack items={branch.children!} />
        )
      ) : null}
    </div>
  );
}

function SubBranchStack({
  items,
}: {
  items: readonly LeadershipTreeNode[];
}) {
  return (
    <div className="mt-0 flex w-full flex-col items-center">
      <ConnectorStem className="h-4" />
      <div className="flex w-full max-w-[10.5rem] flex-col items-center gap-0 sm:max-w-[11.5rem]">
        {items.map((item, index) => (
          <div key={item.label} className="flex w-full flex-col items-center">
            <OrgBox node={item} variant="sub" />
            {index < items.length - 1 ? (
              <ConnectorStem className="h-3" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function DirectReportStack({ items }: { items: readonly LeadershipTreeNode[] }) {
  return (
    <div className="mt-0 flex w-full flex-col items-center">
      <ConnectorStem className="h-5" />
      <div className="relative w-full max-w-[10.5rem] sm:max-w-[11.5rem]">
        <div
          className={`pointer-events-none absolute left-[5px] right-1/2 top-0 h-0.5 ${LINE}`}
          aria-hidden
        />
        <div
          className={`pointer-events-none absolute inset-y-0 left-[5px] w-0.5 -translate-x-1/2 ${LINE}`}
          aria-hidden
        />
        <div className="grid w-full grid-cols-[10px_1fr] gap-y-2 pt-2">
          {items.map((item) => (
            <div key={item.label} className="contents">
              <div
                className="relative flex items-center justify-center"
                aria-hidden
              >
                <div
                  className={`absolute left-1/2 right-0 h-0.5 ${LINE}`}
                />
              </div>
              <div className="flex min-w-0 flex-col items-center">
                <OrgBox node={item} variant="sub" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OrgBox({
  node,
  variant,
}: {
  node: LeadershipTreeNode;
  variant: "top" | "branch" | "sub";
}) {
  const boxClass =
    variant === "top"
      ? `${BOX} min-w-[12rem] max-w-md px-5 py-3 text-center`
      : variant === "branch"
        ? `${BOX} flex min-h-[4.75rem] w-full items-center justify-center px-2 py-3 text-center xl:min-h-[5.25rem]`
        : `${BOX} w-full px-3 py-2.5 text-center`;

  const labelClass =
    variant === "top"
      ? LABEL_TOP
      : variant === "branch"
        ? LABEL_BRANCH
        : LABEL_SUB;

  const inner = <span className={labelClass}>{node.label}</span>;

  if (node.href) {
    return (
      <Link
        href={node.href}
        className={`${boxClass} block transition hover:border-[var(--accent)] hover:bg-[var(--muted)]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]`}
      >
        {inner}
      </Link>
    );
  }

  return <div className={boxClass}>{inner}</div>;
}

function ConnectorStem({ className = "h-6" }: { className?: string }) {
  return (
    <div
      className={`w-0.5 shrink-0 ${LINE} ${className}`}
      aria-hidden
    />
  );
}

/** Mstari kutoka Kamati → mlalo → kila tawi (safu 6) */
function KamatiBranchBus() {
  const dropX = [50, 150, 250, 350, 450, 550];

  return (
    <svg
      viewBox="0 0 600 24"
      className="mx-auto h-6 w-full text-[var(--primary)]"
      preserveAspectRatio="none"
      aria-hidden
    >
      <line
        x1="300"
        y1="0"
        x2="300"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1="50"
        y1="12"
        x2="550"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      {dropX.map((x) => (
        <line
          key={x}
          x1={x}
          y1="12"
          x2={x}
          y2="24"
          stroke="currentColor"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
