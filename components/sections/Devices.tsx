import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const supportedDevices = [
  "Smart TV",
  "Samsung TV",
  "LG TV",
  "Android TV",
  "Fire TV Stick",
  "Apple TV",
  "iPhone",
  "Android",
  "PC & Laptop",
];

export function Devices() {
  return (
    <section className="border-b border-border bg-background-elevated/40 py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <ScrollReveal className="flex flex-col items-start gap-6">
          <SectionHeading
            align="left"
            title="Ein Zugang, jedes Wohnzimmer"
            description="Ob Fernseher, Smartphone oder Laptop: Ihr IPTV TV Zugang funktioniert überall gleich — eine Oberfläche, sofortiger Zugriff, keine zusätzliche Hardware nötig."
          />

          <div className="flex flex-wrap gap-2.5">
            {supportedDevices.map((device) => (
              <span
                key={device}
                className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted"
              >
                {device}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={2} className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-aqua/15 blur-[80px] sm:-inset-8"
          />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl">
            <Image
              src="/images/smart7.jpg"
              alt="IPTV TV Streaming-App auf mehreren Geräten"
              width={640}
              height={720}
              sizes="(max-width: 1024px) 90vw, 480px"
              className="h-auto w-full object-cover"
            />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
