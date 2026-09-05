import Link from "next/link";

type Crumb = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://oscam-icam.de${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-background-elevated/40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-2 px-5 py-4 text-xs text-muted sm:px-8 lg:px-10">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden>/</span> : null}
            {index === items.length - 1 ? (
              <span className="text-foreground">{item.label}</span>
            ) : (
              <Link href={item.href} className="transition-colors hover:text-aqua">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
