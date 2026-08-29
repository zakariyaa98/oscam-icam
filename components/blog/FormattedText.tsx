import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Renders a plain string, converting any `[label](/path-or-url)` markdown-style
 * links into real anchors — internal paths use next/link, external URLs open in
 * a new tab with rel="noopener noreferrer". Text without brackets renders
 * exactly as before, so existing content is fully backward compatible.
 */
export function FormattedText({ text }: { text: string }) {
  // A fresh RegExp instance per call — a shared module-level `g`-flag regex
  // carries mutable `lastIndex` state across renders/calls, which is unsafe.
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const [, label, href] = match;
    const isExternal = /^https?:\/\//.test(href);

    nodes.push(
      isExternal ? (
        <a
          key={`link-${key++}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-aqua underline underline-offset-4 hover:text-aqua-soft"
        >
          {label}
        </a>
      ) : (
        <Link
          key={`link-${key++}`}
          href={href}
          className="text-aqua underline underline-offset-4 hover:text-aqua-soft"
        >
          {label}
        </Link>
      )
    );

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
}
