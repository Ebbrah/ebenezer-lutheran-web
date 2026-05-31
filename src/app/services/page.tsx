import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { siteConfig } from "@/lib/site-config";
import { getChmsAppUrl } from "@/lib/env";

export const metadata: Metadata = {
  title: "Ibada na Ratiba",
  description:
    "Saa za ibada, lugha, na kinachoweza kutarajika unapotembelea.",
};

type RatibaItem = {
  label: string;
  time: string;
};

type RatibaSection = {
  id: string;
  title: string;
  items: readonly RatibaItem[];
};

export default function ServicesPage() {
  const chmsAppUrl = getChmsAppUrl();
  const ratibaSections: readonly RatibaSection[] = [
    {
      id: "jumapili",
      title: "Ratiba ya Jumapili",
      items: [
        { label: "Ibada ya kwanza", time: "Saa 01:00 - 03:30 Asubuhi" },
        { label: "Ibada ya pili", time: "Saa 04:00 Asubuhi - 06:00 Mchana" },
      ],
    },
    {
      id: "mwisho-wa-mwezi",
      title: "Ratiba ya mwisho wa mwezi",
      items: [{ label: "Ibada Moja", time: "Saa 01:00 - 04:00 Asubuhi" }],
    },
    {
      id: "katikati-ya-wiki",
      title: "Ratiba ya katikati ya Wiki",
      items: [
        {
          label: "Morning Glory (Masifu ya Asubuhi)",
          time: "Saa 12:00 - 12:45 Asubuhi",
        },
        {
          label: "Evening Glory (Masifu ya jioni)",
          time: "Saa 12:00 - 01:30 Jioni",
        },
      ],
    },
    {
      id: "fellowship",
      title: "Ratiba ya Fellowship (Ushirika na Bwana)",
      items: [{ label: "Kila Jumapili", time: "10:00 - 11:00 Jioni" }],
    },
  ] as const;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Ibada na Ratiba"
        description="Karibu tumwabudu Mungu wetu pamoja nasi, ufuatao ni utaratibu wa Ibada:-"
      />

      <section id="times" className="scroll-mt-24" aria-label="Ratiba za ibada">
        <div className="space-y-10">
          {ratibaSections.map((section) => (
            <div
              key={section.id}
              className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-sm sm:p-6"
            >
              <div className="mb-6 border-b border-[var(--border)] pb-4">
                <h2 className="font-heading text-lg font-semibold tracking-tight text-[var(--primary)] sm:text-xl">
                  {section.title}
                </h2>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                  Ibada {section.items.length}
                </p>
              </div>
              <ol className="space-y-3">
                {section.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex flex-col gap-1 rounded-lg border border-[var(--border)] bg-[var(--muted)]/20 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <p className="font-heading text-sm font-semibold text-[var(--foreground)] sm:text-base">
                      {item.label}
                    </p>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {item.time}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12" aria-labelledby="visit-heading">
        <h2
          id="visit-heading"
          className="font-heading text-2xl font-semibold text-[var(--foreground)]"
        >
          Ukifika KKKT Ebenezer utapata;
        </h2>
        <p className="mt-4 text-[var(--muted-foreground)]">
          Maegesho ya kutosha na salama kwa chombo chako cha moto, mazingira
          mazuri ya kumwabudu Mungu kwa uhuru, furaha na ibada maalumu za
          watoto zilizopangiliwa kwa kufuata umri wa mtoto.
        </p>
        <p className="mt-4 text-[var(--muted-foreground)]">
          Bonyeza link (Fungua ramani) hapo chini kupata ramani itakayokufikisha K.K.K.T
          Ebenezer
        </p>
        <a
          href={siteConfig.mapUrl}
          className="mt-4 inline-flex min-h-11 items-center font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          rel="noopener noreferrer"
        >
          Fungua ramani
        </a>
      </section>

      <section className="mt-12 rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 p-6">
        <h2 className="font-heading text-lg font-semibold text-[var(--foreground)]">
          Washiriki
        </h2>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          Orodha, sadaka, na maombi ya utunzaji wa kiroho yanaweza kuwa kwenye
          programu ya ChMS.
        </p>
        <a
          href={chmsAppUrl}
          className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          rel="noopener noreferrer"
        >
          Fungua ChMS / Member&apos;s Portal
        </a>
      </section>
    </div>
  );
}
