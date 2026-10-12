export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, email, subject, message, sprintType } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    const timestamp = new Date().toISOString();
    console.log(`[CONTACT INTAKE] New submission at ${timestamp}: ${name} (${email}) - ${subject}`);

    // Forward to Web3Forms if key configured
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY || process.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (web3Key) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3Key,
            name,
            email,
            subject: subject || "1-Week Turnaround Sprint ($7,500)",
            message,
            sprint_type: sprintType || "1-Week Sprint ($7,500)",
            to: "cubby@colonhyphenbracket.pink",
            bcc: "rorshock@protonmail.com",
            from_name: "CHB Portfolio",
          }),
        });
      } catch (dispatchErr) {
        console.warn("[CONTACT] Web3Forms dispatch warning:", dispatchErr);
      }
    }

    return res.status(200).json({
      success: true,
      message: "Inquiry received! Kyle will review your requirements and respond within 24 hours.",
    });
  } catch (error) {
    console.error("[CONTACT ERROR]", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send message. Please contact directly via email.",
    });
  }
}
