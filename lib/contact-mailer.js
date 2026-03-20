import nodemailer from "nodemailer";

const { MAIL_USER, MAIL_APP_PASSWORD, MAIL_TO } = process.env;

export function validateContactPayload(payload) {
  const { name, email, message } = payload ?? {};

  if (!name || !email || !message) {
    return { valid: false, error: "Name, email, and message are required" };
  }

  return {
    valid: true,
    data: {
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim(),
    },
  };
}

export function hasMailConfig() {
  return Boolean(MAIL_USER && MAIL_APP_PASSWORD && MAIL_TO);
}

export async function sendContactEmail({ name, email, message }) {
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: MAIL_USER,
      pass: MAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact Form" <${MAIL_USER}>`,
    to: MAIL_TO,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: [
      "New portfolio contact form submission",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Submitted: ${submittedAt}`,
      "",
      "Message",
      "-------",
      message,
    ].join("\n"),
    html: createEmailTemplate({ name, email, message, submittedAt }),
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function createEmailTemplate({ name, email, message, submittedAt }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const safeSubmittedAt = escapeHtml(submittedAt);

  return `
    <div style="margin:0;padding:32px 16px;background-color:#f4f1ea;font-family:Georgia,'Times New Roman',serif;color:#1f2937;">
      <div style="max-width:680px;margin:0 auto;background-color:#fffdf8;border:1px solid #e7dfd1;border-radius:20px;overflow:hidden;box-shadow:0 10px 30px rgba(15,23,42,0.08);">
        <div style="padding:28px 32px;background:linear-gradient(135deg,#1f2937 0%,#374151 100%);color:#f9fafb;">
          <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;opacity:0.72;">Portfolio Contact Form</p>
          <h1 style="margin:0;font-size:28px;line-height:1.2;font-weight:700;">New message from ${safeName}</h1>
          <p style="margin:12px 0 0;font-size:14px;line-height:1.6;color:#e5e7eb;">Someone reached out through your website and is waiting to hear back.</p>
        </div>

        <div style="padding:32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:24px;">
            <tr>
              <td style="width:50%;padding:0 12px 12px 0;vertical-align:top;">
                <div style="padding:16px;background-color:#f8f5ee;border:1px solid #ece4d8;border-radius:14px;">
                  <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#8b7355;margin-bottom:6px;">Sender</div>
                  <div style="font-size:18px;font-weight:700;color:#111827;">${safeName}</div>
                </div>
              </td>
              <td style="width:50%;padding:0 0 12px 12px;vertical-align:top;">
                <div style="padding:16px;background-color:#f8f5ee;border:1px solid #ece4d8;border-radius:14px;">
                  <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#8b7355;margin-bottom:6px;">Submitted</div>
                  <div style="font-size:16px;font-weight:600;color:#111827;">${safeSubmittedAt}</div>
                </div>
              </td>
            </tr>
          </table>

          <div style="margin-bottom:24px;padding:18px 20px;background-color:#fcfaf5;border:1px solid #ece4d8;border-radius:16px;">
            <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#8b7355;margin-bottom:8px;">Reply To</div>
            <a href="mailto:${safeEmail}" style="font-size:16px;font-weight:600;color:#9a3412;text-decoration:none;">${safeEmail}</a>
          </div>

          <div style="padding:24px;background-color:#fff;border:1px solid #ece4d8;border-radius:16px;">
            <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#8b7355;margin-bottom:12px;">Message</div>
            <div style="font-size:16px;line-height:1.8;color:#1f2937;">${safeMessage}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}
