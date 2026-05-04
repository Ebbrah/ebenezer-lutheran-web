type PageIntroProps = {
  title: string;
  description?: string;
};

export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <header className="mb-10">
      <h1 className="font-heading text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-3 max-w-2xl text-lg text-[var(--muted-foreground)]">
          {description}
        </p>
      ) : null}
    </header>
  );
}
