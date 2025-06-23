// payment/page.js

"use client";
import { useState } from "react";
import Link from "next/link";

export default function Payment() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Payment error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container">
        <header className="header">
          <h1>BeechTree Premium</h1>
          <p>Unlock the full power of AI-driven education</p>
        </header>

        <div className="features">
          <div className="feature">
            <h3 className="feature-title">Premium Plan Features</h3>
            <div className="modal-features-list">
              <ul>
                <li>Access to all 8 premium AI-powered educational tools</li>
                <li>Priority customer support and training resources</li>
                <li>Advanced analytics and progress tracking</li>
                <li>Custom lesson plan generation</li>
                <li>Integration with popular learning management systems</li>
                <li>Monthly webinars and best practice sessions</li>
                <li>Early access to new features and tools</li>
              </ul>
            </div>
            <div style={{ textAlign: "center", margin: "2rem 0" }}>
              <h2
                style={{
                  fontSize: "2.5rem",
                  color: "#2563eb",
                  fontWeight: "bold",
                }}
              >
                $99/month
              </h2>
              <p style={{ color: "#666", fontSize: "1.1rem" }}>
                Complete your payment securely with Stripe
              </p>
            </div>

            {error && (
              <div
                style={{
                  backgroundColor: "#fee2e2",
                  color: "#991b1b",
                  padding: "1rem",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                {error}
              </div>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <Link href="/" className="back-arrow-link">
                ← Back to Home
              </Link>
              <button
                onClick={handlePayment}
                disabled={loading}
                className="cta-button"
                style={{
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                  margin: 0,
                }}
              >
                {loading ? "Processing..." : "Proceed to Payment"}
              </button>
            </div>
          </div>
        </div>

        <footer className="footer">
          <p>&copy; 2024 BeechTree LLC</p>
        </footer>
      </div>
    </div>
  );
}
