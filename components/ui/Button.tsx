import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "whatsapp"
  | "whatsapp-white"
  | "telegram"
  | "outline-dark";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  // Solid brand-red fill: white text keeps the strongest contrast against the
  // deep #E30613 red (black text would be nearly unreadable on a color this dark).
  primary:
    "bg-aqua text-white hover:bg-aqua-soft shadow-[0_0_0_1px_rgba(227,6,19,0.4)] hover:shadow-[0_0_30px_rgba(227,6,19,0.35)]",
  secondary:
    "bg-background-elevated text-foreground border border-border hover:border-aqua/60 hover:text-aqua",
  // Transparent secondary CTA: a neutral gray border by default, brand red only
  // appears on hover (border + subtle glow) so it reads as secondary, not competing
  // with the primary red button.
  outline:
    "bg-transparent text-foreground border border-border hover:bg-aqua/10 hover:border-aqua hover:shadow-[0_0_20px_rgba(227,6,19,0.25)]",
  whatsapp: "bg-[#25D366] text-black hover:brightness-110",
  "whatsapp-white":
    "bg-white text-black hover:bg-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.35)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]",
  telegram: "bg-white text-gray-900 hover:bg-gray-100",
  // Outline treatment for use ON WHITE CARDS: the sitewide "outline" variant defaults to
  // white text (text-foreground), which disappears against a white surface — this variant
  // uses dark text instead. It also borrows the deep "aqua-dim" red shade rather than the
  // vivid primary red, which is too intense for a border/text treatment on white.
  "outline-dark":
    "bg-transparent text-[#111111] border border-aqua-dim/60 hover:bg-aqua-dim/10 hover:border-aqua-dim hover:text-aqua-dim",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 ease-out";

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
};

export function Button({ href, external, variant = "primary", className, children }: ButtonAsLink) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className ?? ""}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
