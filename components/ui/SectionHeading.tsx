type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h2" | "h1";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;
  const alignClasses = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClasses}`}>
      {eyebrow ? (
        <span className="inline-flex w-fit items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          {eyebrow}
        </span>
      ) : null}
      <Heading className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </Heading>
      {description ? (
        <p className="text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
