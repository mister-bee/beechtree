import { NextResponse } from "next/server";

// Add dynamic config to ensure proper caching behavior
export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    // Here you would typically integrate with your email service
    // For example, using nodemailer, SendGrid, or other email service
    // For now, we'll just console.log the data
    console.log("Contact Form Submission:", {
      to: "admin@beechtree.ai",
      from: email,
      subject: `Contact Form: ${firstName} ${lastName}`,
      text: message,
    });

    // Return success response
    return NextResponse.json(
      {
        message: "Message sent successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error: "Failed to send message",
      },
      {
        status: 500,
      }
    );
  }
}
