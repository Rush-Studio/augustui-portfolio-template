import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/sections/Footer";
import { allPodcasts } from "content-collections";
import { LetterDecoder } from "@/components/augustui/letter-decoder";
export default async function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <main className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-light mb-12 text-white/90">Podcasts</h1>
        <div className="space-y-12">
          {allPodcasts.map((podcast) => (
            <Link
              key={podcast.slug}
              href={`${podcast.slug}`}
              className="block group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-white/30 font-mono">
                  {podcast.category}
                </span>
                <span className="text-xs text-white/30">{podcast.date}</span>
              </div>
              <h2 className="text-lg text-white/80 font-light group-hover:text-white transition-colors flex items-center gap-2">
                <LetterDecoder text={podcast.title} triggerOnHover />
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h2>
              <p className="text-white/50 text-sm">{podcast.excerpt}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
