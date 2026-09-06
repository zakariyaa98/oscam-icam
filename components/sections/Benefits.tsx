import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type Benefit = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

// Topic illustrations shipped in /public — gold line art on the project's dark
// charcoal, so they already match the theme (no overlay needed).
const benefits: Benefit[] = [
  {
    title: "Enigma2",
    description: "Die Linux-Oberfläche moderner Sat-Receiver und Basis für OSCam und iCam.",
    href: "/oscam-installieren",
    image: "/images/home page/OSCam-iCam-Icon-Enigma2-Linux-Sat-Receiver.png",
    imageAlt: "Illustration eines Enigma2-Sat-Receivers mit Parabolantenne",
  },
  {
    title: "OSCam",
    description: "Quelloffene Softcam-Software für lokal angeschlossene Kartenleser und CI+-Module.",
    href: "/oscam",
    image: "/images/home page/OSCam-iCam-Icon-OSCam-Softcam-Kartenleser.png",
    imageAlt: "Illustration eines Kartenlesers mit Smartcards für OSCam",
  },
  {
    title: "iCam",
    description: "Softcam-Client mit ähnlichem Prinzip, aber eigener Konfigurationssyntax.",
    href: "/icam",
    image: "/images/home page/OSCam-iCam-Icon-iCam-Softcam-Client.png",
    imageAlt: "Illustration gestapelter Ebenen als Sinnbild für den iCam-Softcam-Client",
  },
  {
    title: "Technische Anleitungen",
    description: "Schritt für Schritt erklärt — ohne unnötigen Fachjargon, mit Support auf Deutsch.",
    href: "/blog",
    image: "/images/home page/OSCam-iCam-Icon-Technische-Anleitungen.png",
    imageAlt: "Illustration einer Checkliste als Sinnbild für technische Anleitungen",
  },
];

export function Benefits() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <ScrollReveal key={benefit.title} delay={((index % 4) + 1) as 1 | 2 | 3 | 4}>
            <Link
              href={benefit.href}
              className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6 transition-colors duration-300 hover:border-gold/40"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-300 group-hover:border-gold/40">
                <Image
                  src={benefit.image}
                  alt={benefit.imageAlt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 44vw, 260px"
                  className="object-cover object-[center_24%]"
                />
              </div>
              <h3 className="text-base font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{benefit.description}</p>
            </Link>
          </ScrollReveal>
        ))}
      </Container>
    </section>
  );
}
