"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/actions/contact";
import { siteConfig } from "@/lib/site-config";

const initial: ContactState = { ok: false, error: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initial);

  if (state.ok) {
    return (
      <div
        className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/30 p-6"
        role="status"
      >
        <p className="font-medium text-[var(--foreground)]">
          Thank you — we have received your message.
        </p>
        {state.mode === "fallback" ? (
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            Supabase is not configured yet; please also email{" "}
            <a
              className="underline"
              href={`mailto:${siteConfig.contactEmail}`}
            >
              {siteConfig.contactEmail}
            </a>{" "}
            so we can respond.
          </p>
        ) : (
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            Someone from the church office will get back to you soon.
          </p>
        )}
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name <span className="text-[var(--destructive)]">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="mt-1 w-full min-h-11 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
          aria-invalid={Boolean(state.fieldErrors?.name)}
          aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
        />
        {state.fieldErrors?.name ? (
          <p id="name-error" className="mt-1 text-sm text-[var(--destructive)]">
            {state.fieldErrors.name[0]}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email <span className="text-[var(--destructive)]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-1 w-full min-h-11 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
          aria-invalid={Boolean(state.fieldErrors?.email)}
          aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
        />
        {state.fieldErrors?.email ? (
          <p id="email-error" className="mt-1 text-sm text-[var(--destructive)]">
            {state.fieldErrors.email[0]}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone <span className="text-[var(--muted-foreground)]">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-1 w-full min-h-11 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message <span className="text-[var(--destructive)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
          aria-invalid={Boolean(state.fieldErrors?.message)}
          aria-describedby={
            state.fieldErrors?.message ? "message-error" : undefined
          }
        />
        {state.fieldErrors?.message ? (
          <p id="message-error" className="mt-1 text-sm text-[var(--destructive)]">
            {state.fieldErrors.message[0]}
          </p>
        ) : null}
      </div>

      {state.error && !state.fieldErrors ? (
        <p className="text-sm text-[var(--destructive)]" role="alert">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="min-h-11 w-full rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] shadow-sm transition hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
