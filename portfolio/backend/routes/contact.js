const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const DATA_FILE = path.join(__dirname, "../data/messages.json");

// Ensure data file exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
}

// GET all messages (optional admin use)
router.get("/", (req, res) => {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    const messages = JSON.parse(raw);
    res.json({ success: true, count: messages.length, messages });
  } catch (err) {
    res.status(500).json({ success: false, error: "Could not read messages" });
  }
});

// POST new contact message
router.post("/", (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and message are required.",
      });
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid email address." });
    }

    const newMessage = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject ? subject.trim() : "No Subject",
      message: message.trim(),
      receivedAt: new Date().toISOString(),
    };

    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    const messages = JSON.parse(raw);
    messages.push(newMessage);
    fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2));

    console.log(`[Contact] New message from ${newMessage.name} <${newMessage.email}>`);

    // Send email via Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = require("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
        const toEmail = process.env.CONTACT_TO_EMAIL || "srivj287@gmail.com";
        await resend.emails.send({
          from: fromEmail,
          to: [toEmail],
          replyTo: `${newMessage.name} <${newMessage.email}>`,
          subject: `[Portfolio] ${newMessage.subject}`,
          text: `New message from ${newMessage.name} (${newMessage.email}):\n\n${newMessage.message}`,
        });
        console.log(`[Contact] Resend email dispatched to ${toEmail}`);
      } catch (emailErr) {
        console.error("[Contact] Resend email error:", emailErr);
      }
    }

    res.status(201).json({
      success: true,
      message: "Your message has been received. I'll get back to you soon!",
    });
  } catch (err) {
    console.error("Contact POST error:", err);
    res.status(500).json({ success: false, error: "Failed to save message." });
  }
});

module.exports = router;
