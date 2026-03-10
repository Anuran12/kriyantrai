import { NextResponse } from "next/server";
import { getMailRecipient, sendMail } from "@/lib/mail";

type SalesPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  useCase?: string;
  message?: string;
};

function formatUseCase(value: string) {
  const labels: Record<string, string> = {
    ai: "Artificial Intelligence",
    data: "Data Solutions",
    automation: "Process Automation",
    generative: "Generative AI Services",
    bi: "Business Intelligence",
    appdev: "Application Development",
  };

  return labels[value] ?? value;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SalesPayload;
    const firstName = body.firstName?.trim() || "";
    const lastName = body.lastName?.trim() || "";
    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "";
    const useCase = body.useCase?.trim() || "";
    const message = body.message?.trim() || "";

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "First name, last name, email, and message are required." },
        { status: 400 }
      );
    }

    const recipient = getMailRecipient();

    await sendMail({
      to: recipient,
      replyTo: email,
      subject: `New sales inquiry from ${firstName} ${lastName}`,
      text: [
        "A new sales inquiry was submitted.",
        "",
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Use case: ${useCase ? formatUseCase(useCase) : "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New sales inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Use case:</strong> ${useCase ? formatUseCase(useCase) : "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send sales inquiry", error);
    return NextResponse.json(
      { error: "Unable to send inquiry right now." },
      { status: 500 }
    );
  }
}
