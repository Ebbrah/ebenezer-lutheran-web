import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Landmark, Smartphone } from "lucide-react";
import { PageIntro } from "@/components/page-intro";

const bankAccounts = [
  {
    id: "ebenezer",
    bankName: "CRDB",
    accountName: "KKKT EBENEZER",
    accountNumber: "0152357841100",
    qrSrc: "/images/give/ebenezer-qr.png",
    qrAlt: "Msimbo wa QR wa akaunti ya KKKT EBENEZER — CRDB",
  },
  {
    id: "projects",
    bankName: "CRDB",
    accountName: "EBENEZER PROJECT ACCOUNT",
    accountNumber: "0152360794100",
    qrSrc: "/images/give/projects-qr.png",
    qrAlt: "Msimbo wa QR wa akaunti ya EBENEZER PROJECT ACCOUNT — CRDB",
  },
] as const;

export const metadata: Metadata = {
  title: "Sadaka",
  description: "Shiriki katika huduma ya Kanisa la Kilutheri Tanzania Usharika wa Ebenezer.",
};

export default function GivePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-4xl">
      <PageIntro
        title="Sadaka"
        description="“Mheshimu BWANA kwa mali yako, Na kwa malimbuko ya mazao yako yote.” Mithali 3:9. Karibu Umtolee Mungu wetu kwa furaha"
      />

      <div className="mt-8 space-y-8">
        <section className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex items-center gap-2 border-b border-[var(--border)] pb-3">
            <Landmark
              className="h-5 w-5 text-[var(--primary)]"
              aria-hidden
            />
            <h2 className="font-heading text-xl font-semibold text-[var(--primary)]">
              Uhamisho wa benki / Bank Transfer
            </h2>
          </div>
          <p className="text-[var(--muted-foreground)]">
            Tumia maelezo hapa chini au skani msimbo wa QR kupitia programu ya
            benki yako (CRDB SimBanking au nyingine).
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {bankAccounts.map((account) => (
              <article
                key={account.id}
                className="flex flex-col rounded-lg border border-[var(--border)] bg-[var(--muted)]/25 p-4 sm:p-5"
              >
                <dl className="space-y-2 text-sm">
                  <div>
                    <dt className="font-medium text-[var(--muted-foreground)]">
                      Benki
                    </dt>
                    <dd className="font-semibold text-[var(--foreground)]">
                      {account.bankName}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-[var(--muted-foreground)]">
                      Jina la akaunti
                    </dt>
                    <dd className="font-semibold text-[var(--foreground)]">
                      {account.accountName}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-[var(--muted-foreground)]">
                      Nambari ya akaunti
                    </dt>
                    <dd className="font-mono text-base font-semibold tracking-wide text-[var(--primary)]">
                      {account.accountNumber}
                    </dd>
                  </div>
                </dl>
                <div className="relative mx-auto mt-5 aspect-square w-full max-w-[220px] overflow-hidden rounded-lg border border-[var(--border)] bg-white p-2 shadow-sm">
                  <Image
                    src={account.qrSrc}
                    alt={account.qrAlt}
                    fill
                    className="object-contain p-1"
                    sizes="(max-width: 640px) 80vw, 220px"
                  />
                </div>
                <p className="mt-3 text-center text-xs text-[var(--muted-foreground)]">
                  Skani QR-LIPA kutuma sadaka
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex items-center gap-2 border-b border-[var(--border)] pb-3">
            <Smartphone
              className="h-5 w-5 text-[var(--primary)]"
              aria-hidden
            />
            <h2 className="font-heading text-xl font-semibold text-[var(--primary)]">
              Tuma kwa njia ya Simu
            </h2>
          </div>
          <p className="text-[var(--muted-foreground)]">
            Chagua huduma unayotumia: M-Pesa, Mix by Yas, au Airtel Money.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/30 p-3">
              <span className="inline-flex rounded-full bg-red-600/10 px-2 py-0.5 text-xs font-semibold text-red-700">
                M-Pesa
              </span>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                Huduma ya M-Pesa ya kanisa itapatikana hivi karibuni.
              </p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/30 p-3">
              <span className="inline-flex rounded-full bg-blue-600/10 px-2 py-0.5 text-xs font-semibold text-blue-700">
                Mix by Yas
              </span>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Huduma ya Mix by Yas ya kanisa itapatikana hivi karibuni.
              </p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/30 p-3">
              <span className="inline-flex rounded-full bg-sky-600/10 px-2 py-0.5 text-xs font-semibold text-sky-700">
                Airtel Money
              </span>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Huduma ya Airtel Money ya kanisa itapatikana hivi karibuni.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex items-center gap-2 border-b border-[var(--border)] pb-3">
            <Building2
              className="h-5 w-5 text-[var(--primary)]"
              aria-hidden
            />
            <h2 className="font-heading text-xl font-semibold text-[var(--primary)]">
              Fika katika ofisi ya Mtunza hazina
            </h2>
          </div>
          <p className="whitespace-pre-line text-[var(--muted-foreground)]">
            Kama una sadaka yako na ungependa kuileta moja kwa moja kanisani unaweza fika muda wowote wa kazi kuanzia jumatatu - jumamosi, na jumapili mara baada ya ibada.
            {"\n"}
            Kwa maelezo zaidi piga +255 XXX XXXX XX
          </p>
        </section>
      </div>
    </div>
  );
}
