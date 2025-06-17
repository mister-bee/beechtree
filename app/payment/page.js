// payment/page.js

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Payment() {
  const currentYear = new Date().getFullYear();
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [invoice, setInvoice] = useState(null);

  const handleCreateInvoice = async (e) => {
    e.preventDefault();

    if (!amount || !customerName || !customerEmail) {
      setError("Please fill in all required fields");
      return;
    }

    if (isNaN(amount) || parseFloat(amount) <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    try {
      setLoading(true);
      setError("");

      // Generate invoice
      const invoiceData = {
        id: `INV-${Date.now()}`,
        amount: parseFloat(amount),
        description: description || "BeechTree Services",
        customerName,
        customerEmail,
        createdAt: new Date().toLocaleDateString(),
        dueDate: new Date(
          Date.now() + 30 * 24 * 60 * 60 * 1000
        ).toLocaleDateString(), // 30 days from now
        status: "Pending",
      };

      setInvoice(invoiceData);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Invoice creation error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePayInvoice = async () => {
    if (!invoice) return;

    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: invoice.amount,
          description: invoice.description,
          invoiceId: invoice.id,
        }),
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
          <h1>BeechTree</h1>
          <div className="tree-logo-container">
            <Image
              src="/treelogo2.png"
              alt="BeechTree Logo"
              width={120}
              height={120}
              className="tree-logo"
            />
          </div>
          <p>Create and pay invoices for BeechTree services</p>
        </header>

        <div className="features">
          <div className="feature">
            {!invoice ? (
              <>
                <h3 className="feature-title">Create Invoice</h3>
                <form
                  onSubmit={handleCreateInvoice}
                  style={{ maxWidth: "500px", margin: "0 auto" }}
                >
                  <div style={{ marginBottom: "1.5rem" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      Amount Due ($) *
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "8px",
                        fontSize: "1rem",
                      }}
                      required
                    />
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Description of services (optional)"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "8px",
                        fontSize: "1rem",
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      Customer Name *
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Enter customer name"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "8px",
                        fontSize: "1rem",
                      }}
                      required
                    />
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      Customer Email *
                    </label>
                    <input
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="Enter customer email"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "8px",
                        fontSize: "1rem",
                      }}
                      required
                    />
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

                  <button
                    type="submit"
                    disabled={loading}
                    className="cta-button"
                    style={{
                      width: "100%",
                      opacity: loading ? 0.7 : 1,
                      cursor: loading ? "not-allowed" : "pointer",
                    }}
                  >
                    {loading ? "Creating Invoice..." : "Create Invoice"}
                  </button>
                </form>
              </>
            ) : (
              <>
                <h3 className="feature-title">Invoice Created</h3>
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "2rem",
                    borderRadius: "12px",
                    border: "1px solid #e5e7eb",
                    maxWidth: "500px",
                    margin: "0 auto",
                  }}
                >
                  <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                    <h4
                      style={{
                        fontSize: "1.5rem",
                        color: "#2563eb",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Invoice #{invoice.id}
                    </h4>
                    <p style={{ color: "#666" }}>Status: {invoice.status}</p>
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <strong>Customer:</strong> {invoice.customerName}
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <strong>Email:</strong> {invoice.customerEmail}
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <strong>Description:</strong> {invoice.description}
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <strong>Created:</strong> {invoice.createdAt}
                  </div>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <strong>Due Date:</strong> {invoice.dueDate}
                  </div>

                  <div
                    style={{
                      backgroundColor: "#f3f4f6",
                      padding: "1rem",
                      borderRadius: "8px",
                      textAlign: "center",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <h3
                      style={{ fontSize: "2rem", color: "#2563eb", margin: 0 }}
                    >
                      ${invoice.amount.toFixed(2)}
                    </h3>
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

                  <div style={{ display: "flex", gap: "1rem" }}>
                    <button
                      onClick={() => setInvoice(null)}
                      style={{
                        flex: 1,
                        padding: "0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "8px",
                        backgroundColor: "white",
                        cursor: "pointer",
                      }}
                    >
                      Create New Invoice
                    </button>
                    <button
                      onClick={handlePayInvoice}
                      disabled={loading}
                      className="cta-button"
                      style={{
                        flex: 1,
                        opacity: loading ? 0.7 : 1,
                        cursor: loading ? "not-allowed" : "pointer",
                        margin: 0,
                      }}
                    >
                      {loading ? "Processing..." : "Pay Now"}
                    </button>
                  </div>
                </div>
              </>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <Link href="/" className="back-arrow-link">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <p className="footer-copyright">
              &copy; {currentYear} BeechTree LLC
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
