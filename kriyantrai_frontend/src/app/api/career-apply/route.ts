import { NextResponse } from "next/server";
import { getMailRecipient, sendMail } from "@/lib/mail";

export const runtime = "nodejs";

function readField(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const cvFile = formData.get("cvFile");
    const fullName = readField(formData.get("fullName"));
    const email = readField(formData.get("email"));
    const phone = readField(formData.get("phone"));
    const experience = readField(formData.get("experience"));
    const location = readField(formData.get("location"));
    const companiesWorked = readField(formData.get("companiesWorked"));
    const skills = readField(formData.get("skills"));

    if (!fullName || !email || !(cvFile instanceof File)) {
      return NextResponse.json(
        { error: "Name, email, and CV are required." },
        { status: 400 }
      );
    }

    const attachment = Buffer.from(await cvFile.arrayBuffer());

    await sendMail({
      to: getMailRecipient(),
      replyTo: email,
      subject: `New career application from ${fullName}`,
      text: [
        "A new career application was submitted.",
        "",
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Experience: ${experience || "Not provided"}`,
        `Location: ${location || "Not provided"}`,
        `Companies worked: ${companiesWorked || "Not provided"}`,
        `Skills: ${skills || "Not provided"}`,
      ].join("\n"),
      html: `
        <h2>New career application</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Experience:</strong> ${experience || "Not provided"}</p>
        <p><strong>Location:</strong> ${location || "Not provided"}</p>
        <p><strong>Companies worked:</strong> ${companiesWorked || "Not provided"}</p>
        <p><strong>Skills:</strong> ${skills || "Not provided"}</p>
      `,
      attachments: [
        {
          filename: cvFile.name,
          content: attachment,
          contentType: cvFile.type || "application/octet-stream",
        },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send career application", error);
    return NextResponse.json(
      { error: "Unable to submit application right now." },
      { status: 500 }
    );
  }
}
