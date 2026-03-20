import { hasMailConfig, sendContactEmail, validateContactPayload } from "../lib/contact-mailer.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const validation = validateContactPayload(req.body);
  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }

  if (!hasMailConfig()) {
    return res.status(500).json({ error: "Mail service is not configured" });
  }

  try {
    await sendContactEmail(validation.data);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
