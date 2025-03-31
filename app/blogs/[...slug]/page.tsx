import { notFound } from "next/navigation";
import Footer from "@/components/sections/Footer";
import { allBlogs } from "content-collections";
import { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";
interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getPageFromParams({ params }: PageProps) {
  const slug = (await params).slug?.join("/") || "index";
  const page = allBlogs.find((page) => page.slugAsParams === slug);

  if (!page) {
    return null;
  }

  return page;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams({ params });

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | AugustUI`,
    description: page.excerpt,
    openGraph: {
      title: page.title,
      description: page.excerpt,
      type: "article",
      url: absoluteUrl(page.slug),
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.excerpt,
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const page = await getPageFromParams({ params });

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <article className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-white/30 font-mono">
              {page.category}
            </span>
            <time className="text-sm text-white/30">{page.date}</time>
          </div>
          <h1 className="text-2xl font-light mb-4 text-white/90">
            {page.title}
          </h1>
        </div>

        <div
          className="prose prose-invert prose-sm max-w-none [&>p]:mb-4 whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </article>
      <Footer />
    </div>
  );
}
