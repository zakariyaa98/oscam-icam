import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { faqCategories } from "@/lib/faq-data";

const previewItems = faqCategories.flatMap((category) => category.items).slice(0, 5);

export function FAQPreview() {
  return (
    <section className="border-b border-border bg-background-elevated/40 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Gut zu wissen"
          title="Die Fragen, die uns am häufigsten erreichen"
        />

        <div className="flex w-full max-w-3xl flex-col gap-4">
          {previewItems.map((item, index) => (
            <ScrollReveal key={item.question} delay={((index % 5) + 1) as 1 | 2 | 3 | 4 | 5}>
              <details className="group rounded-2xl border border-border bg-background p-6 open:border-aqua/50">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground marker:content-none">
                  {item.question}
                  <span className="shrink-0 text-aqua transition-transform duration-300 group-open:rotate-45">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>

        <Button href="/faq" variant="secondary">
          Alle Fragen ansehen
        </Button>
      </Container>
    </section>
  );
}
