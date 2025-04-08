"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFileInvoiceDollar } from "react-icons/fa";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container">
        <header className="header">
          <h1>BeechTree</h1>
          <p>Empowering Educators with Safe, Reliable AI Tools</p>
        </header>

        <div className="relative w-full max-w-4xl mx-auto">
          <Image
            src="/classroom1.jpg"
            alt="Students in classroom"
            width={800}
            height={500}
            className="hero-image"
            priority
          />
        </div>

        <div className="text-center">
          <Link href="/software" className="cta-button">
            Explore Our Software
          </Link>
        </div>

        <div className="features">
          <div className="feature">
            <h3 className="feature-title" style={{ marginBottom: "0" }}>
              Safe & Private AI
            </h3>
            <p style={{ marginTop: "0" }}>
              BeechTree prioritizes student privacy and data security to ensure
              safe classroom experiences.
            </p>
          </div>

          <div className="feature">
            <h3 className="feature-title" style={{ marginBottom: "0" }}>
              Teacher-Friendly Interface
            </h3>
            <p style={{ marginTop: "0" }}>
              Our intuitive design allows educators to easily customize learning
              paths for diverse classroom needs.
            </p>
          </div>
        </div>

        <div className="testimonial">
          <h3 className="feature-title" style={{ marginBottom: "0" }}>
            What Educators Say
          </h3>
          <p
            className="testimonial-quote"
            style={{ marginTop: "0", paddingTop: "0" }}
          >
            &ldquo;BeechTree has revolutionized the way our teachers interact
            with students, enhancing engagement and safety in the
            classroom.&rdquo;
          </p>
          <p className="testimonial-author">— School Principal</p>
        </div>

        <footer className="footer">
          <Link
            href="/contact"
            className="contact-icon"
            aria-label="Contact Us"
          >
            <FaEnvelope />
          </Link>
          <Link href="/payment" className="contact-icon" aria-label="Payment">
            <FaFileInvoiceDollar />
          </Link>
          <p className="text-sm text-gray-600">
            &copy; {currentYear} BeechTree LLC
          </p>
        </footer>
      </div>
    </div>
  );
}
