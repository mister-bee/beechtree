"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

const App = () => {
  const [showChat, setShowChat] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (showChat) {
      const script = document.createElement("script");
      script.src = "https://elevenlabs.io/convai-widget/index.js";
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, [showChat]);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setShowChat(true);
    }, 5000); // 5 seconds
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>BeechTree</h1>
          <p>Empowering Educators with Safe, Reliable AI Tools</p>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <Image
            src="/classroom1.jpg"
            alt="Classroom"
            width={600}
            height={400}
            objectFit="cover"
            priority
            className="responsive-image"
          />
        </div>

        {/* CTA Button */}
        <Link href="/software" className="cta-button">
          Explore Our Software
        </Link>

        {/* Features */}
        <div className="features">
          <div className="feature">
            <h3 className="feature-title">Safe & Private AI</h3>
            <p>
              BeechTree.ai prioritizes student privacy and data security to
              ensure safe classroom experiences.
            </p>
          </div>
          <div className="feature">
            <h3 className="feature-title">Teacher-Friendly Interface</h3>
            <p>
              Our intuitive design allows educators to easily customize learning
              paths for diverse classroom needs.
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="testimonial">
          <h3 className="feature-title">What Educators Say</h3>
          <p className="testimonial-quote">
            &ldquo;BeechTree.ai has revolutionized the way our teachers interact
            with students, enhancing engagement and safety in the
            classroom.&rdquo;
          </p>
          <p className="testimonial-author">— School Principal</p>
        </div>

        {/* Footer */}
        <div className="footer">
          <a href="mailto:info@beechtree.ai" className="contact-icon">
            <FaEnvelope />
          </a>
          <p
            className="chat-trigger"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            &copy; 2024 BeechTree LLC
          </p>
        </div>
      </div>

      {/* Chat Widget */}
      <div className={`chat-widget ${showChat ? "visible" : ""}`}>
        <elevenlabs-convai agent-id="Qy6YOCa88ibsoc81nE6S"></elevenlabs-convai>
      </div>
    </div>
  );
};

export default App;
