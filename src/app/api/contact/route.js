
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";


const receiverEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL_RECEIVER;
const senderEmail = process.env.NODEMAILER_USER;
const senderPassword = process.env.NODEMAILER_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: senderEmail,
    pass: senderPassword,
  },
});

export async function POST(req) {
    console.log("ENV CHECK:", {
  NODEMAILER_USER: process.env.NODEMAILER_USER,
  NODEMAILER_PASS_EXISTS: !!process.env.NODEMAILER_PASS,
  CONTACT_EMAIL_RECEIVER: process.env.CONTACT_EMAIL_RECEIVER,
});

  try {
    const { fullName, email, company, message } = await req.json();

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"Kriyantrai Contact" <${senderEmail}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New message from ${fullName} (${company || "N/A"})`,
      html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
