import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Video } from "lucide-react";

export interface VideoEntry {
  id: string;
  youtubeId: string;
  title: string;
  category: "Product Architecture" | "Live Design Session" | "Systems & Strategy";
  description: string;
  thumbnailUrl: string;
}

const curatedVideos: VideoEntry[] = [
  {
    id: "ai-work-play",
    youtubeId: "UVCbF6Nlu3s",
    title: "AI is supposed to help you work & play!",
    category: "Product Architecture",
    description:
      "Flagship product storytelling & design walkthrough. How to bridge complex autonomous AI capabilities with intuitive, playful, high-velocity UX.",
    thumbnailUrl: "https://i.ytimg.com/vi/UVCbF6Nlu3s/hqdefault.jpg",
  },
  {
    id: "architecture-sovereignty",
    youtubeId: "ZPYNoNUzr68",
    title: "The Architecture of Sovereignty from :-]",
    category: "Systems & Strategy",
    description:
      "Deep dive into the architectural principles behind Colon Hyphen Bracket protocols: sovereign identity, zero-marginal cost infrastructure, and privacy by design.",
    thumbnailUrl: "https://i.ytimg.com/vi/ZPYNoNUzr68/hqdefault.jpg",
  },
  {
    id: "dont-answer-silicon-valley",
    youtubeId: "SMWOs4aJkFQ",
    title: "We Don't Answer to Silicon Valley, We Answer to You",
    category: "Systems & Strategy",
    description:
      "Strategic thesis on breaking free from centralized platform capture, building durable business models, and aligning technology directly with human autonomy.",
    thumbnailUrl: "https://i.ytimg.com/vi/SMWOs4aJkFQ/hqdefault.jpg",
  },
  {
    id: "design-components-flow",
    youtubeId: "_jiYwsdQDEc",
    title: "Live Design: Component & Page Architecture",
    category: "Live Design Session",
    description:
      "Over-the-shoulder live design session constructing foundational page layouts, tokenized component hierarchies, and responsive grids in real time.",
    thumbnailUrl: "https://i.ytimg.com/vi/_jiYwsdQDEc/hqdefault.jpg",
  },
  {
    id: "user-flows-personas",
    youtubeId: "6VtitmMV7Sc",
    title: "Live Design: User Flows & Persona Architecture",
    category: "Live Design Session",
    description:
      "Structuring multi-audience user pathways, state transition diagrams, and interaction flows for complex digital applications.",
    thumbnailUrl: "https://i.ytimg.com/vi/6VtitmMV7Sc/hqdefault.jpg",
  },
  {
    id: "corporate-ai",
    youtubeId: "XpFinCKxWx0",
    title: "Corporate AI Robs You Blind",
    category: "Systems & Strategy",
    description:
      "An unsparing architectural analysis of extractive corporate AI rent-seeking, token burn inefficiencies, and the necessity of local-first sovereign systems.",
    thumbnailUrl: "https://i.ytimg.com/vi/XpFinCKxWx0/hqdefault.jpg",
  },
];

export function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<VideoEntry | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Product Architecture", "Live Design Session", "Systems & Strategy"];

  const filteredVideos =
    selectedCategory === "All"
      ? curatedVideos
      : curatedVideos.filter((v) => v.category === selectedCategory);

  return (
    <section id="demos-livestreams" className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-16 w-full space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E5DDD0] pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs font-sans uppercase tracking-[0.18em] text-[#E05A36] border-[#E05A36]/40 rounded-full">
              Living Proofs &bull; Video Artifacts
            </Badge>
            <span className="text-xs text-[#78645C] font-sans uppercase tracking-wider">Demos &bull; Livestreams &bull; Architecture</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2B1E19] tracking-tight">
            Live Demos &amp; Design Sessions
          </h2>
          <p className="text-base text-[#78645C] max-w-2xl leading-relaxed font-sans">
            Real screen recordings, unedited design workflows, and architectural walkthroughs. See how I think through systems, explain complex concepts, and build software in the open.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 self-start md:self-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-xs font-sans uppercase tracking-[0.12em] rounded-full border transition-all ${
                selectedCategory === cat
                  ? "bg-[#E05A36] text-white border-[#E05A36] font-semibold shadow-sm"
                  : "bg-[#FAF6EE] text-[#78645C] border-[#E5DDD0] hover:text-[#2B1E19] hover:bg-[#F5EFE6]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="group rounded-2xl border border-[#E5DDD0] bg-[#FAF6EE] overflow-hidden flex flex-col justify-between hover:border-[#E05A36]/50 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            onClick={() => setActiveVideo(video)}
          >
            <div>
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/9] w-full bg-[#EDE5D8] overflow-hidden">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#E05A36] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>
                </div>
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[11px] font-sans uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF6EE]/90 text-[#2B1E19] border border-[#E5DDD0] backdrop-blur-sm font-medium">
                    {video.category}
                  </span>
                </div>
              </div>

              {/* Text Meta */}
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-bold font-serif text-[#2B1E19] leading-snug group-hover:text-[#E05A36] transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-[#78645C] leading-relaxed line-clamp-2 font-sans">
                  {video.description}
                </p>
              </div>
            </div>

            <div className="px-5 pb-4 pt-2 border-t border-[#E5DDD0] flex items-center justify-between text-xs font-sans text-[#78645C]">
              <span className="text-[#E05A36] font-semibold flex items-center gap-1 group-hover:underline">
                Watch Demo <Play className="w-3 h-3 fill-current ml-0.5" />
              </span>
              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:text-[#2B1E19] inline-flex items-center gap-1 text-xs uppercase tracking-wider"
              >
                YouTube <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Channel Link Footer */}
      <div className="text-center pt-4">
        <a
          href="https://www.youtube.com/@KyleCyree"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-[#FE299E] transition-colors"
        >
          <Video className="w-4 h-4" />
          <span>Explore All Livestreams &amp; Demos on YouTube (@KyleCyree)</span>
          <ExternalLink className="w-3 h-3 ml-0.5" />
        </a>
      </div>

      {/* Embedded Video Lightbox Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-card border border-border rounded-xl p-4 md:p-6 overflow-hidden space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border/40 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FE299E]">
                  {activeVideo.category}
                </span>
                <h4 className="font-editorial font-bold text-lg text-foreground">{activeVideo.title}</h4>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setActiveVideo(null)}>
                Close ✕
              </Button>
            </div>

            <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed pt-1">
              {activeVideo.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
