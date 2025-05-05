import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      companyName,
      rcNumber,
      companyEmail,
      companyPhone,
      representativeName,
      representativePhone,
      sectorType,
      collaborationArea,
      potentialInvestment,
      experience,
      companyProfile,
    } = await req.json();

    // Validate required fields
    if (!companyName || !companyEmail || !companyPhone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter only if email credentials exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email credentials not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format email content
    const emailText = `
      Partnership Application Details:
      
      Company Name: ${companyName}
      RC Number: ${rcNumber}
      Company Email: ${companyEmail}
      Company Phone: ${companyPhone}
      Representative Name: ${representativeName}
      Representative Phone: ${representativePhone}
      Sector Type: ${sectorType}
      Collaboration Area: ${collaborationArea}
      Potential Investment: ${potentialInvestment}
      
      Company Profile:
      ${companyProfile}
      
      Agribusiness Experience:
      ${experience}
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER, // Use your email as sender
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Partnership Application from ${companyName}`,
      text: emailText,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Full error:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
