import { ArrowUpRight } from "lucide-react";
import { LetterDecoder } from "./augustui/letter-decoder";
import Link from "next/link";
import { InfoSectionBlocks } from "@/types";
export interface InfoSectionProps {
  title: string;
  information: InfoSectionBlocks[];
}

export default function InfoSection({ title, information }: InfoSectionProps) {
  return (
    <section className="mb-32">
      <div className="inline-block px-3 py-1 mb-8 text-xs font-mono text-white/40 bg-white/5 rounded-sm">
        {title}
      </div>
      <div className="space-y-12">
        {information.map((post) => (
          <div key={post.title} className="block group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-white/30 font-mono">
                {post.category}
              </span>
              <span className="text-xs text-white/30">{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={`${post.slug}`}
                className="text-lg text-white/80 font-light group-hover:text-white transition-colors"
              >
                <LetterDecoder
                  text={post.title}
                  triggerOnHover={true}
                  decodeTime={750}
                />
              </Link>
              <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-white/50 text-sm mt-2">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
