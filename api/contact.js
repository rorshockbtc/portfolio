// Vercel serverless contact intake.
// Delivery requires WEB3FORMS_ACCESS_KEY (free at https://web3forms.com, keyed to the inbox
// that should receive leads). If it is missing or delivery fails, we return 503 so the
// client shows a pre-filled mailto fallback instead of a fake "success".
const CONTACT_EMAIL = "rorshock@protonmail.com";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, email, subject, message, botcheck } = req.body || {};

  // Honeypot: bots fill hidden fields. Pretend success, deliver nothing.
  if (botcheck) return res.status(200).json({ success: true });

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Name, email, and message are required." });
  }

  const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
  if (!web3Key) {
    console.error("[CONTACT] WEB3FORMS_ACCESS_KEY is not set; refusing to drop the lead silently.");
    return res.status(503).json({
      success: false,
      message: `The form isn't connected right now. Please email ${CONTACT_EMAIL} directly.`,
    });
  }

  try {
    const r = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: web3Key,
        subject: `[Portfolio] ${subject || "New inquiry"} from ${name}`,
        from_name: "Kyle Cyree Portfolio",
        replyto: email,
        name,
        email,
        message,
      }),
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok || data.success === false) {
      throw new Error(data.message || `Web3Forms responded ${r.status}`);
    }
    return res.status(200).json({ success: true, message: "Thanks, your message reached Kyle. Expect a reply within one business day." });
  } catch (err) {
    console.error("[CONTACT] Delivery failed:", err);
    return res.status(503).json({
      success: false,
      message: `Your message didn't go through. Please email ${CONTACT_EMAIL} directly.`,
    });
  }
}
