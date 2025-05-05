import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      fullName,
      dateOfBirth,
      gender,
      maritalStatus,
      phoneNumber,
      email,
      lga,
      state,
      contactAddress,
      nextOfKinFullName,
      nextOfKinContactAddress,
      relationship,
      bvn,
      nin,
    } = await req.json();

    // Validate required fields
    const requiredFields = {
      fullName,
      dateOfBirth,
      gender,
      maritalStatus,
      phoneNumber,
      email,
      lga,
      state,
      contactAddress,
      nextOfKinFullName,
      nextOfKinContactAddress,
      relationship,
      bvn,
      nin,
    };

    const missingFields = Object.entries(requiredFields)
      .filter(([_, value]) => !value)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          error: "Missing required fields",
          missingFields,
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
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
      Personal Information Form Submission:
      
      Personal Details:
      Full Name: ${fullName}
      Date of Birth: ${dateOfBirth}
      Gender: ${gender}
      Marital Status: ${maritalStatus}
      Phone Number: ${phoneNumber}
      Email: ${email}
      LGA: ${lga}
      State: ${state}
      
      Contact Address:
      ${contactAddress}
      
      Next of Kin Details:
      Full Name: ${nextOfKinFullName}
      Contact Address: ${nextOfKinContactAddress}
      Relationship: ${relationship}
      
      Identification Numbers:
      BVN: ${bvn}
      NIN: ${nin}
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER, // Use your email as sender
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Personal Information Submission from ${fullName}`,
      text: emailText,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Personal information submitted successfully" },
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
