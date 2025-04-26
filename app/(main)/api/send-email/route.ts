import { NextResponse } from "next/server";
import { sendEmail } from "@/app/utils/email";

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Validate required fields
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.businessName
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email
    await sendEmail(formData);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
