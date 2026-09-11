const { Resend } = require('resend');

// Escape HTML utility to prevent HTML injection in emails
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = async function handler(req, res) {
  // 1. CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Please use POST.',
    });
  }

  try {
    // 2. Parse request body safely
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (parseErr) {
        return res.status(400).json({
          success: false,
          error: 'Invalid JSON payload.',
        });
      }
    }

    const { name, email, subject, message } = body || {};

    // 3. Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Your name is required.',
      });
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Your email address is required.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address.',
      });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Message content is required.',
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = (subject && typeof subject === 'string' && subject.trim())
      ? subject.trim()
      : `Portfolio Inquiry from ${cleanName}`;
    const cleanMessage = message.trim();

    // 4. Check RESEND_API_KEY
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error(
        '[API /api/send-email] ERROR: RESEND_API_KEY environment variable is not defined on Vercel.'
      );
      return res.status(500).json({
        success: false,
        error: 'Server email service is not configured (missing RESEND_API_KEY).',
      });
    }

    // 5. Configure sender and recipient
    // Note: If domain is unverified, Resend requires 'onboarding@resend.dev'
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      'Portfolio Contact Form <onboarding@resend.dev>';
    const toEmail = process.env.CONTACT_TO_EMAIL || 'srivj287@gmail.com';

    // 6. Initialize Resend SDK
    const resend = new Resend(apiKey);

    const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }
    .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
    .header { background: #2563eb; color: #ffffff; padding: 24px; text-align: left; }
    .header h2 { margin: 0; font-size: 20px; font-weight: 700; color: #ffffff; }
    .header p { margin: 4px 0 0 0; opacity: 0.9; font-size: 13px; color: #eff6ff; }
    .content { padding: 28px 24px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; color: #64748b; margin-bottom: 6px; }
    .value { font-size: 15px; color: #0f172a; line-height: 1.5; word-break: break-word; }
    .message-box { background: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; border-radius: 6px; font-size: 14px; color: #1e293b; white-space: pre-wrap; line-height: 1.6; }
    .footer { padding: 16px 24px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Portfolio Message</h2>
      <p>Submitted via srivijay-portfolio.vercel.app</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">From</div>
        <div class="value"><strong>${escapeHtml(cleanName)}</strong> &lt;<a href="mailto:${escapeHtml(cleanEmail)}">${escapeHtml(cleanEmail)}</a>&gt;</div>
      </div>
      <div class="field">
        <div class="label">Subject</div>
        <div class="value">${escapeHtml(cleanSubject)}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${escapeHtml(cleanMessage)}</div>
      </div>
    </div>
    <div class="footer">
      Reply to this email directly to respond to ${escapeHtml(cleanName)} (${escapeHtml(cleanEmail)}).
    </div>
  </div>
</body>
</html>`;

    const textContent = `New Contact Form Message from ${cleanName} (${cleanEmail})\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}\n\n---\nSent via portfolio contact form.`;

    console.log(
      `[API /api/send-email] Attempting to send email via Resend to ${toEmail} from ${fromEmail}...`
    );

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: `${cleanName} <${cleanEmail}>`,
      subject: `[Portfolio] ${cleanSubject}`,
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error('[API /api/send-email] Resend API Error:', JSON.stringify(error, null, 2));
      return res.status(500).json({
        success: false,
        error: error.message || 'Failed to send email via Resend.',
        details: error.name || undefined,
      });
    }

    console.log(`[API /api/send-email] Email sent successfully! ID: ${data ? data.id : 'unknown'}`);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully. I'll get back to you soon!",
      id: data ? data.id : undefined,
    });
  } catch (err) {
    console.error('[API /api/send-email] Unexpected error:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'An unexpected error occurred while sending your message.',
    });
  }
};
