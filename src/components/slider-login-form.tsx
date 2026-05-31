"use client";

import { useActionState } from "react";

import { loginSliderAdmin, type SliderAdminState } from "@/actions/slider-admin";

const initial: SliderAdminState = { ok: false };

export function SliderLoginForm() {
  const [state, formAction, pending] = useActionState(loginSliderAdmin, initial);

  return (
    <form action={formAction} className="mt-8 space-y-4">
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Nenosiri
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="mt-1 w-full min-h-11 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
        />
      </div>
      {state.error ? (
        <p className="text-sm text-[var(--destructive)]" role="alert">
          {state.error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="min-h-11 w-full rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] shadow-sm transition hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "Inaingia…" : "Ingia"}
      </button>
    </form>
  );
}
