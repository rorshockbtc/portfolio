import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Lock, Unlock, Eye, KeyRound, ExternalLink, Check, AlertCircle } from "lucide-react";

interface VaultImage {
  src: string;
  title: string;
  caption: string;
  tag: string;
}

interface ProtectedVaultProps {
  id: string;
  title: string;
  subtitle: string;
  disclaimer?: string;
  images: VaultImage[];
  defaultOpen?: boolean;
}

const CANONICAL_PASSCODE = "I Should Really Hire Kyle!";

export function ProtectedVault({
  id,
  title,
  subtitle,
  disclaimer = "Protected under commercial NDA & mutual confidentiality. For review by verified hiring managers, partners, and clients.",
  images,
}: ProtectedVaultProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("chb_vault_unlocked");
      if (stored === "true") {
        setIsUnlocked(true);
      }
    } catch {
      // sessionStorage unavailable
    }
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = inputCode.trim();
    if (cleanInput.toLowerCase() === CANONICAL_PASSCODE.toLowerCase()) {
      setIsUnlocked(true);
      setError(false);
      try {
        sessionStorage.setItem("chb_vault_unlocked", "true");
      } catch {
        // ignore
      }
    } else {
      setError(true);
    }
  };

  return (
    <div id={id} className="rounded-2xl border border-[#E5DDD0] bg-[#FAF6EE] p-6 md:p-8 space-y-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5DDD0] pb-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2.5">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-colors ${
                isUnlocked ? "bg-emerald-600/15 text-emerald-700" : "bg-[#E05A36]/15 text-[#E05A36]"
              }`}
            >
              {isUnlocked ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            </div>
            <h3 className="text-2xl font-bold font-serif text-[#2B1E19] tracking-tight">{title}</h3>
            <Badge
              variant="outline"
              className={`text-[11px] font-sans uppercase tracking-[0.15em] rounded-full ${
                isUnlocked
                  ? "border-emerald-600/40 text-emerald-700 bg-emerald-600/5"
                  : "border-[#E05A36]/40 text-[#E05A36] bg-[#E05A36]/5"
              }`}
            >
              {isUnlocked ? "Vault Unlocked" : "Confidential • Mutual NDA"}
            </Badge>
          </div>
          <p className="text-base text-[#78645C] font-sans">{subtitle}</p>
        </div>

        {isUnlocked && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#78645C] font-sans uppercase tracking-wider">Access Active</span>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs h-8 text-[#78645C] hover:text-[#2B1E19]"
              onClick={() => {
                sessionStorage.removeItem("chb_vault_unlocked");
                setIsUnlocked(false);
              }}
            >
              Lock Vault
            </Button>
          </div>
        )}
      </div>

      {/* Locked State Prompt */}
      {!isUnlocked ? (
        <div className="py-8 px-4 max-w-xl mx-auto text-center space-y-5">
          <div className="w-12 h-12 rounded-full bg-[#E05A36]/10 border border-[#E05A36]/25 text-[#E05A36] mx-auto flex items-center justify-center">
            <KeyRound className="w-5 h-5" />
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-serif font-bold text-[#2B1E19] tracking-tight">Enter Passcode to Inspect High-Resolution Plates</h4>
            <p className="text-sm text-[#78645C] leading-relaxed font-sans">{disclaimer}</p>
          </div>

          <form onSubmit={handleUnlock} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Enter passcode..."
              value={inputCode}
              onChange={(e) => {
                setInputCode(e.target.value);
                if (error) setError(false);
              }}
              className={`bg-[#FAF6EE] border-[#E5DDD0] font-sans text-sm rounded-full px-4 ${error ? "border-destructive focus-visible:ring-destructive" : ""}`}
            />
            <Button type="submit" className="bg-[#E05A36] hover:bg-[#C54320] text-white font-sans text-xs uppercase tracking-[0.15em] font-semibold rounded-full px-6 py-2 shrink-0">
              Unlock Vault
            </Button>
          </form>

          {error && (
            <p className="text-xs text-destructive flex items-center justify-center gap-1.5 font-medium">
              <AlertCircle className="w-3.5 h-3.5" /> Incorrect passcode. Hint: &quot;I Should Really Hire Kyle!&quot;
            </p>
          )}

          <div className="pt-2 text-xs text-[#78645C] font-sans">
            Recruiter or hiring manager without a code?{" "}
            <a
              href="mailto:rorshock@protonmail.com?subject=Portfolio%20Passcode%20Request"
              className="text-[#E05A36] hover:underline font-semibold inline-flex items-center gap-1"
            >
              Request Access Directly <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      ) : (
        /* Unlocked State Gallery */
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="group relative rounded-lg border border-border/60 bg-background/50 overflow-hidden cursor-pointer transition-all hover:border-[#FE299E]/50 hover:shadow-md"
                onClick={() => setActiveImageIndex(idx)}
              >
                <div className="aspect-[16/10] overflow-hidden bg-black/5 dark:bg-black/40 flex items-center justify-center">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5 space-y-1 border-t border-border/40">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold tracking-tight text-foreground truncate">{img.title}</span>
                    <Badge variant="secondary" className="text-[10px] font-mono px-1.5 py-0 h-4">
                      {img.tag}
                    </Badge>
                  </div>
                  <p className="text-[12px] text-muted-foreground line-clamp-2 leading-relaxed">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox / Modal for enlarged view */}
          {activeImageIndex !== null && (
            <div
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
              onClick={() => setActiveImageIndex(null)}
            >
              <div
                className="relative max-w-5xl w-full bg-background border border-border rounded-xl p-4 md:p-6 overflow-hidden space-y-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-border/40 pb-3">
                  <div>
                    <h4 className="font-semibold text-base">{images[activeImageIndex].title}</h4>
                    <p className="text-xs text-muted-foreground">{images[activeImageIndex].caption}</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setActiveImageIndex(null)}>
                    Close ✕
                  </Button>
                </div>
                <div className="max-h-[75vh] overflow-auto flex items-center justify-center bg-black/5 dark:bg-black/60 rounded-lg p-2">
                  <img
                    src={images[activeImageIndex].src}
                    alt={images[activeImageIndex].title}
                    className="max-h-[70vh] w-auto object-contain rounded"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
