import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT ?? "465");
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

function assertMailConfig() {
  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error("SMTP configuration is incomplete.");
  }
}

export function getMailRecipient() {
  return process.env.CONTACT_RECEIVER_EMAIL || smtpUser || "info@kriyantrai.com";
}

export async function sendMail(options: nodemailer.SendMailOptions) {
  assertMailConfig();

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  return transporter.sendMail({
    from: process.env.MAIL_FROM || smtpUser,
    ...options,
  });
}
