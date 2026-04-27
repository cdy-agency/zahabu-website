import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const requiredEnvVars = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
] as const;

function getMissingEnvVars() {
  return requiredEnvVars.filter((key) => !process.env[key]);
}

export function buildHtml({ name, email, phone, message}: ContactPayload) {
  const timestamp = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
 
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
 
  const safeMessage = message.replace(/\n/g, "<br />");
 
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:'Segoe UI',Arial,sans-serif;">
 
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
 
          <!-- ─── Header / Brand ─────────────────────────────────── -->
          <tr>
            <td style="background:#005f75;border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <!-- Logo mark -->
                    <div style="display:inline-block;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.25);border-radius:12px;padding:10px 18px;margin-bottom:16px;">
                      <span style="color:#ffffff;font-size:15px;font-weight:800;letter-spacing:0.1em;">ZAG RWANDA</span>
                    </div>
                    <p style="margin:0;color:rgba(255,255,255,0.55);font-size:11px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;">
                      Zebra Artworks Group
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
 
          <!-- ─── Alert Banner ───────────────────────────────────── -->
          <tr>
            <td style="background:#004d60;padding:18px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:8px;background:#4ecdc4;border-radius:4px;margin-right:12px;">&nbsp;</td>
                        <td style="padding-left:12px;">
                          <p style="margin:0;color:#ffffff;font-size:16px;font-weight:700;letter-spacing:0.01em;">
                            📬 New Contact Form Submission
                          </p>
                          <p style="margin:4px 0 0;color:rgba(255,255,255,0.45);font-size:11px;">
                            ${timestamp}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
 
          <!-- ─── Body ───────────────────────────────────────────── -->
          <tr>
            <td style="background:#ffffff;padding:36px 40px;">
 
              <!-- Sender avatar + name -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <div style="width:52px;height:52px;border-radius:14px;background:#e8f4f7;border:1.5px solid #b3d9e4;display:inline-flex;align-items:center;justify-content:center;text-align:center;line-height:52px;font-size:17px;font-weight:800;color:#005f75;vertical-align:middle;">
                            ${initials}
                          </div>
                        </td>
                        <td style="padding-left:14px;vertical-align:middle;">
                          <p style="margin:0;font-size:17px;font-weight:700;color:#111827;">${name}</p>
                          <p style="margin:3px 0 0;font-size:12px;color:#6b7280;">
                            Submitted a new enquiry
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
 
              <!-- Divider -->
              <div style="height:1px;background:#f0f2f5;margin-bottom:28px;"></div>
 
              <!-- Contact details grid -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding-bottom:12px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e5e9ef;border-radius:12px;overflow:hidden;">
 
                      <!-- Email row -->
                      <tr>
                        <td style="padding:14px 18px;border-bottom:1px solid #e5e9ef;width:36px;vertical-align:top;">
                          <div style="width:32px;height:32px;background:#e8f4f7;border-radius:8px;text-align:center;line-height:32px;font-size:15px;">
                            ✉️
                          </div>
                        </td>
                        <td style="padding:14px 18px 14px 0;border-bottom:1px solid #e5e9ef;vertical-align:top;">
                          <p style="margin:0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#9ca3af;">Email Address</p>
                          <a href="mailto:${email}" style="color:#005f75;font-size:14px;font-weight:600;text-decoration:none;">${email}</a>
                        </td>
                      </tr>
 
                      <!-- Phone row -->
                      <tr>
                        <td style="padding:14px 18px;vertical-align:top;">
                          <div style="width:32px;height:32px;background:#f0fdf4;border-radius:8px;text-align:center;line-height:32px;font-size:15px;">
                            📞
                          </div>
                        </td>
                        <td style="padding:14px 18px 14px 0;vertical-align:top;">
                          <p style="margin:0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#9ca3af;">Phone Number</p>
                          <p style="margin:2px 0 0;font-size:14px;font-weight:600;color:#111827;">
                            ${phone || '<span style="color:#9ca3af;font-style:italic;font-weight:400;">Not provided</span>'}
                          </p>
                        </td>
                      </tr>
 
                    </table>
                  </td>
                </tr>
              </table>
 
              <!-- Message block -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 10px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#9ca3af;">
                      Message
                    </p>
                    <div style="background:#f8fafc;border:1px solid #e5e9ef;border-left:3px solid #005f75;border-radius:0 12px 12px 0;padding:18px 20px;">
                      <p style="margin:0;font-size:14px;color:#374151;line-height:1.75;">
                        ${safeMessage}
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
 
              <!-- Divider -->
              <div style="height:1px;background:#f0f2f5;margin:28px 0;"></div>
 
              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <a
                      href="mailto:${email}?subject=Re:%20Your%20Enquiry%20to%20ZAG%20Rwanda"
                      style="display:inline-block;background:#005f75;color:#ffffff;font-size:13px;font-weight:700;text-decoration:none;padding:13px 28px;border-radius:100px;letter-spacing:0.02em;"
                    >
                      ↩&nbsp; Reply to ${name.split(" ")[0]}
                    </a>
                  </td>
                </tr>
              </table>
 
            </td>
          </tr>
 
          <!-- ─── Footer ──────────────────────────────────────────── -->
          <tr>
            <td style="background:#f8fafc;border:1px solid #e5e9ef;border-top:none;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 6px;font-size:12px;font-weight:600;color:#005f75;letter-spacing:0.05em;">
                ZEBRA ARTWORKS GROUP
              </p>
              <p style="margin:0 0 12px;font-size:11px;color:#9ca3af;">
                Kigali, Rwanda &nbsp;·&nbsp; Architecture &nbsp;·&nbsp; Interior Design &nbsp;·&nbsp; Construction
              </p>
              <div style="width:32px;height:2px;background:#005f75;border-radius:2px;margin:0 auto 12px;"></div>
              <p style="margin:0;font-size:10px;color:#d1d5db;">
                This email was automatically generated from the contact form on your website.
                Do not reply to this automated message — use the button above to respond directly.
              </p>
            </td>
          </tr>
 
        </table>
      </td>
    </tr>
  </table>
 
</body>
</html>
  `.trim();
}

export async function POST(request: Request) {
  const missingEnvVars = getMissingEnvVars();

  if (missingEnvVars.length > 0) {
    return Response.json(
      {
        error: `Missing email configuration: ${missingEnvVars.join(", ")}`,
      },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const phone = payload.phone?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const smtpPort = Number(process.env.SMTP_PORT);

  if (Number.isNaN(smtpPort)) {
    return Response.json(
      { error: "SMTP_PORT must be a valid number." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const recipient = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;
  const from = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;

  try {
    await transporter.sendMail({
      to: recipient,
      from,
      replyTo: email,
      subject: `Website Enquiry from ${name}`,
      text: [
        "Hello ZAHABU Solutions,",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: buildHtml({ name, email, phone, message }),
    });
  } catch (error) {
    console.error("Failed to send contact email:", error);

    return Response.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
