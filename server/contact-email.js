import nodemailer from "nodemailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function handleContactSubmission(payload, env = process.env) {
  const { name, email, subject, message, website } = payload ?? {};

  if (typeof website === "string" && website.trim()) {
    return { status: 200, body: { ok: true } };
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string"
  ) {
    return {
      status: 400,
      body: { error: "Please complete all fields." },
    };
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedSubject = subject.trim();
  const trimmedMessage = message.trim();

  if (
    !trimmedName ||
    trimmedName.length > 100 ||
    !emailPattern.test(trimmedEmail) ||
    trimmedEmail.length > 254 ||
    !trimmedSubject ||
    trimmedSubject.length > 150 ||
    !trimmedMessage ||
    trimmedMessage.length > 5000
  ) {
    return {
      status: 400,
      body: { error: "Please check your details and try again." },
    };
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO,
    CONTACT_FROM,
  } = env;

  if (
    !SMTP_HOST ||
    !SMTP_PORT ||
    !SMTP_USER ||
    !SMTP_PASS ||
    !CONTACT_TO ||
    !CONTACT_FROM
  ) {
    console.error("Contact email is not configured. Check the server environment.");
    return {
      status: 503,
      body: { error: "Email service is not configured yet. Please try again later." },
    };
  }

  const smtpPort = Number(SMTP_PORT);
  if (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
    console.error("Contact email is not configured: SMTP_PORT is invalid.");
    return {
      status: 503,
      body: { error: "Email service is not configured yet. Please try again later." },
    };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: smtpPort,
    secure: env.SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: trimmedEmail,
      subject: `[Portfolio] ${trimmedSubject}`,
      text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`,
    });

    return { status: 200, body: { ok: true } };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      status: 502,
      body: { error: "Your message could not be sent. Please try again later." },
    };
  }
}
