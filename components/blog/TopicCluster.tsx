import Link from "next/link";
import { BLOG_CLUSTERS, getClusterPosts, type BlogPost } from "@/lib/blog-posts";

type TopicClusterProps = {
  post: BlogPost;
  allPosts: BlogPost[];
};

/**
 * Renders the pillar/spoke topic-cluster navigation for a post:
 * - On a pillar page: a grid linking to every spoke article in the cluster.
 * - On a spoke page: a compact callout pointing back to the cluster's pillar.
 */
export function TopicCluster({ post, allPosts }: TopicClusterProps) {
  if (!post.clusterId) return null;

  const members = getClusterPosts(post.clusterId, allPosts);
  const siblings = members.filter((member) => member.slug !== post.slug);
  if (siblings.length === 0) return null;

  const clusterLabel = BLOG_CLUSTERS[post.clusterId];

  if (post.isPillar) {
    return (
      <section
        aria-labelledby="topic-cluster-heading"
        className="flex flex-col gap-4 rounded-3xl border border-aqua/30 bg-aqua/5 p-7"
      >
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-wide text-aqua">Themenreihe</span>
          <h2 id="topic-cluster-heading" className="text-lg font-semibold text-foreground">
            {clusterLabel}: Alle Artikel dieser Reihe
          </h2>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {siblings.map((sibling) => (
            <li key={sibling.slug}>
              <Link
                href={`/blog/${sibling.slug}`}
                className="block rounded-xl border border-border bg-background-elevated p-4 text-sm font-medium text-foreground transition-colors hover:border-aqua/50 hover:text-aqua"
              >
                {sibling.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  const pillar = members.find((member) => member.isPillar);
  if (!pillar) return null;

  return (
    <section
      aria-labelledby="topic-cluster-heading"
      className="flex flex-col gap-2 rounded-3xl border border-border bg-background-elevated/60 p-6"
    >
      <span id="topic-cluster-heading" className="text-xs font-semibold uppercase tracking-wide text-aqua">
        Themenreihe: {clusterLabel}
      </span>
      <p className="text-sm leading-relaxed text-muted">
        Dieser Artikel ist Teil unserer Reihe {clusterLabel}. Die vollständige Übersicht finden
        Sie in unserem Hauptleitfaden{" "}
        <Link href={`/blog/${pillar.slug}`} className="text-aqua underline underline-offset-4 hover:text-aqua-dim">
          {pillar.title}
        </Link>
        .
      </p>
    </section>
  );
}
