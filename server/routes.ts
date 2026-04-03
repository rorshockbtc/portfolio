import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { textToSpeech } from "./replit_integrations/audio/client";
import * as fs from "fs";
import * as path from "path";

const CACHE_PATH = path.join(process.cwd(), "client", "public", "emerald-narration.mp3");

const whitepaperChunks = [
  `Private and Anonymous Support for High-Stakes Brands and Products.

The Thesis: The Human Layer is the Single Point of Failure.

Bitcoin has no CEO, no marketing department, and no HR. This is its greatest security feature and market differentiator, but it creates a massive communication debt. When protocol updates happen, like the recent Bitcoin Core 28.0 release, the friction doesn't occur in the code; it occurs between humans. To put it perfectly: it is peer-to-peer.

The recent harassment and subsequent exit of maintainers like Gloria Zhao is a systemic design failure, not because she was perfect or impeccably right, but because peers should treat each other better. We expect developers to act as the primary interface for complex protocol changes. When the interface breaks, the ecosystem bleeds talent. Emerald was engineered as a high-fidelity, sovereign "Protocol Interpreter" designed to protect human capital by automating the friction of technical support without sacrificing user privacy.`,

  `Brief Context: I was not asked to develop this for Blockstream. I chose to develop it on my own time and dime, and since they encountered some friction with hiring me, I am open-sourcing this concept. It represents synergies of AI-specific R&D I've performed over the last 18 months plus 20-plus years of experience designing outcomes for users that reinforce brands rather than disrupting customer confidence.

Escaping the Zendesk Trap: Most companies, including Bitcoin giants, rely on legacy CX tools like Zendesk, Intercom, and Salesforce that are fundamentally incompatible with a "Don't Trust, Verify" ethos. They cost time and money, are difficult to implement, and ultimately so generic that once a customer acquisition cost has been paid, they chip away at brand trust.

The Business Impact: For an enterprise team of 50 agents, Zendesk costs exceed thirteen thousand dollars per month before solving a single ticket. Emerald maximizes retention by providing deterministic, high-fidelity support at one one-thousandth of the operational cost of any SaaS support system.`,

  `Self-Sovereign Architecture: Emerald isn't a wrapper; it's a redesign of the identity-support loop.

Persistent Anonymity through Cryptographic Handshakes: Emerald can maintain a persistent Learning Journey without ever knowing who the user is. We decouple Identity from Data using a public-key signature handshake. A user can interact with Emerald anonymously, but by signing a session hash with a NOSTR or PGP key, they can persist their session across devices. The Session ID equals SHA-256 of the user's public key plus a session salt. The user owns the key; the platform only sees the hash.

Orchestration via dspy.ts with Deterministic Logic: Most AI support fails because it relies on Probabilistic RAG. Emerald uses Programmatic Prompt Optimization. Instead of the LLM guessing an answer from a PDF, Emerald maps user intent to cryptographically verified documentation stored on a company's server, managed however the company chooses.`,

  `Local-First and Browser-Cached Memory: Emerald treats the user's browser as a secure vault with boolean privacy based on session logs and user-controllable session cache. The Privacy Gateway scrubs all queries for personally identifiable information locally before being sent to the inference engine. The Flush feature is a one-click event that clears the browser cache and session hash, effectively erasing the user from the system's history.

Designing for Safety: In Bitcoin, ease of use can be a vulnerability. I designed Emerald with strategic friction. When Emerald detects high-risk intent, such as an account freeze or a time-locked transaction, the UI breaks the chat paradigm. It moves the user into a multi-step protocol safety flow that requires manual acknowledgment of irreversible actions. Design as a System means knowing when to stop the user from moving fast. Emerald is a guardrail, not just a guide.`,

  `Blockstream and The Open Source Pivot: I built Emerald for Blockstream as a targeted solution to their specific customer experience friction points. When leadership didn't move on the hire, I didn't hide the intellectual property. I open-sourced it. I spent 250-plus hours inside of one month preparing for four rounds of interviews, running through months of GitHub commits, hours of videos, and entire decompositions of their product line as well as the overall Bitcoin ecosystem.

This work represents some portion of that effort, and it is far more important that Bitcoin remain hope for its users than me working for any specific company. The code is available on GitHub. I am available to outperform your expectations immediately. Get in touch!`,
];

let generating = false;

async function generateNarration(): Promise<Buffer> {
  if (fs.existsSync(CACHE_PATH)) {
    return fs.readFileSync(CACHE_PATH);
  }

  if (generating) {
    throw new Error("Audio generation is already in progress. Please try again in a minute.");
  }

  generating = true;
  try {
    console.log(`[TTS] Generating narration with ${whitepaperChunks.length} chunks using Nova voice...`);
    const audioBuffers: Buffer[] = [];

    for (let i = 0; i < whitepaperChunks.length; i++) {
      console.log(`[TTS] Generating chunk ${i + 1}/${whitepaperChunks.length}...`);
      const audio = await textToSpeech(whitepaperChunks[i], "nova", "mp3");
      audioBuffers.push(audio);
      console.log(`[TTS] Chunk ${i + 1} complete (${audio.length} bytes)`);
    }

    const combined = Buffer.concat(audioBuffers);
    console.log(`[TTS] All chunks complete. Total size: ${combined.length} bytes. Caching...`);

    fs.writeFileSync(CACHE_PATH, combined);
    return combined;
  } finally {
    generating = false;
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/tts/emerald", async (req, res) => {
    try {
      const audio = await generateNarration();
      res.set({
        "Content-Type": "audio/mpeg",
        "Content-Length": String(audio.length),
        "Content-Disposition": 'inline; filename="emerald-whitepaper-narration.mp3"',
        "Cache-Control": "public, max-age=86400",
      });
      res.send(audio);
    } catch (error: any) {
      console.error("[TTS] Error:", error);
      if (error.message?.includes("already in progress")) {
        res.status(202).json({ status: "generating", message: error.message });
      } else {
        res.status(500).json({ error: "Failed to generate audio narration" });
      }
    }
  });

  app.get("/api/tts/emerald/status", (_req, res) => {
    const cached = fs.existsSync(CACHE_PATH);
    res.json({ ready: cached, generating });
  });

  return httpServer;
}
