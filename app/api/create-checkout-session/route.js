import { NextResponse } from "next/server";
import Stripe from "stripe";

// Add dynamic config to ensure proper caching behavior
export const dynamic = "force-dynamic";

// Initialize Stripe with your secret key
// You'll need to add your Stripe secret key to your environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { amount, description, invoiceId } = body;

    let sessionConfig = {
      payment_method_types: ["card"],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment`,
    };

    if (amount && description) {
      // One-time payment for invoice
      sessionConfig.line_items = [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: description,
              description: invoiceId ? `Invoice #${invoiceId}` : "BeechTree Services",
            },
            unit_amount: Math.round(amount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ];
      sessionConfig.mode = "payment";
      sessionConfig.success_url = `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}&invoice_id=${invoiceId}`;
    } else {
      // Default subscription mode
      sessionConfig.line_items = [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "BeechTree Premium Plan",
              description: "Monthly subscription to BeechTree Premium",
            },
            unit_amount: 9900, // $99.00
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ];
      sessionConfig.mode = "subscription";
      sessionConfig.success_url = `${process.env.NEXT_PUBLIC_BASE_URL}/subscription/success?session_id={CHECKOUT_SESSION_ID}`;
      sessionConfig.cancel_url = `${process.env.NEXT_PUBLIC_BASE_URL}/subscription`;
    }

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create(sessionConfig);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
