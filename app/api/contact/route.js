import { NextResponse } from "next/server";
import { Resend } from "resend";

// Add dynamic config to ensure proper caching behavior
export const dynamic = "force-dynamic";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    // Validate required environment variable
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      // Fallback to console logging if API key is not configured
      console.log("Contact Form Submission:", {
        to: "admin@beechtree.ai",
        from: email,
        subject: `Contact Form: ${firstName} ${lastName}`,
        text: message,
      });
      
      return NextResponse.json(
        {
          message: "Message received (email service not configured)",
        },
        {
          status: 200,
        }
      );
    }

    // Send email using Resend
    await resend.emails.send({
      from: "contact@beechtree.ai", // Must be a verified domain with Resend
      to: "admin@beechtree.ai",
      subject: `Contact Form: ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent from BeechTree Contact Form</em></p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        
        Message:
        ${message}
        
        ---
        Sent from BeechTree Contact Form
      `,
      reply_to: email,
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
    
    // Fallback to console logging if email sending fails
    console.log("Contact Form Submission (email failed):", {
      to: "admin@beechtree.ai",
      from: req.body?.email,
      subject: `Contact Form: ${req.body?.firstName} ${req.body?.lastName}`,
      text: req.body?.message,
    });
    
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
