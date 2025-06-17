"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFileInvoiceDollar,
  FaShieldAlt,
  FaChalkboardTeacher,
  FaQuoteLeft,
  FaUserTie,
  FaTimes,
} from "react-icons/fa";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);

  const modalContent = {
    privacy: {
      title: "Safe & Private AI",
      content: (
        <div>
          <p>
            At BeechTree, we understand that student privacy is paramount in
            educational environments. Our AI platform is built with
            privacy-by-design principles, ensuring that all student data remains
            secure and protected.
          </p>
          <div className="modal-content-section">
            <h4>Key Privacy Features:</h4>
            <div className="modal-features-list">
              <ul>
                <li>End-to-end encryption for all communications</li>
                <li>No data sharing with third parties</li>
                <li>FERPA and COPPA compliant</li>
                <li>Local data processing when possible</li>
                <li>Regular security audits and compliance checks</li>
              </ul>
            </div>
          </div>
          <p>
            Teachers can confidently integrate AI into their classrooms knowing
            that student information remains private and secure at all times.
          </p>
        </div>
      ),
    },
    interface: {
      title: "Teacher-Friendly Interface",
      content: (
        <div>
          <p>
            Our platform is designed specifically for educators, with an
            intuitive interface that requires no technical expertise. Teachers
            can focus on what they do best - teaching - while our AI handles the
            technical complexity.
          </p>
          <div className="modal-content-section">
            <h4>Interface Highlights:</h4>
            <div className="modal-features-list">
              <ul>
                <li>Drag-and-drop lesson planning tools</li>
                <li>One-click content generation and customization</li>
                <li>Visual progress tracking for students</li>
                <li>Integration with existing classroom management systems</li>
                <li>Mobile-responsive design for on-the-go access</li>
              </ul>
            </div>
          </div>
          <p>
            Whether you&apos;re creating personalized learning paths, generating
            assessment materials, or tracking student progress, our interface
            makes complex tasks simple and efficient.
          </p>
        </div>
      ),
    },
    testimonials: {
      title: "What Educators Say!",
      content: (
        <div>
          <p>
            Here&apos;s what educators across the country are saying about
            BeechTree&apos;s impact on their classrooms and teaching experience.
          </p>
          <div className="modal-content-section">
            <h4>Real Testimonials from Real Educators:</h4>
            <div className="modal-features-list">
              <ul>
                <li>
                  &ldquo;BeechTree hasss revolutionized the way our teachers
                  interact with students, enhancing engagement and safety in the
                  classroom.&rdquo; — School Principal, Lincoln Elementary
                </li>
                <li>
                  &ldquo;The AI tools have saved me hours of preparation time
                  while providing more personalized learning experiences for my
                  students.&rdquo; — Sarah Martinez, 5th Grade Teacher
                </li>
                <li>
                  &ldquo;Finally, an AI platform that understands the unique
                  needs of educators. The privacy features give us complete
                  peace of mind.&rdquo; — Dr. James Chen, Technology Director
                </li>
                <li>
                  &ldquo;My students are more engaged than ever, and I can track
                  their progress in real-time. BeechTree has transformed our
                  classroom.&rdquo; — Maria Rodriguez, High School Math Teacher
                </li>
              </ul>
            </div>
          </div>
          <p>
            Join thousands of educators who are already transforming their
            classrooms with BeechTree&apos;s innovative AI-powered tools.
          </p>
        </div>
      ),
    },
  };

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

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
          <div className="feature" onClick={() => openModal("privacy")}>
            <div className="flex justify-center items-center w-full mb-6">
              <FaShieldAlt size={72} className="text-blue-600" />
            </div>
            <h3 className="feature-title text-xl font-semibold mb-4 text-[#4361ee]">
              Safe & Private AI
            </h3>
            <p className="text-gray-600 leading-relaxed">
              BeechTree prioritizes student privacy and data security to ensure
              safe classroom experiences.
            </p>
          </div>
          <div className="feature" onClick={() => openModal("interface")}>
            <div className="flex justify-center items-center w-full mb-6">
              <FaChalkboardTeacher size={72} className="text-green-600" />
            </div>
            <h3 className="feature-title text-xl font-semibold mb-4 text-[#4361ee]">
              Teacher-Friendly Interface
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our intuitive design allows educators to easily customize learning
              paths for diverse classroom needs.
            </p>
          </div>

          <div className="feature" onClick={() => openModal("testimonials")}>
            <div className="flex justify-center items-center w-full mb-4">
              <FaUserTie size={72} className="text-purple-600" />
            </div>
            <h3 className="feature-title text-xl font-semibold mb-4 text-[#4361ee]">
              What Educators Say
            </h3>
            <p
              className="testimonial-quote text-gray-600 leading-relaxed mb-0"
              style={{ marginBottom: 0 }}
            >
              &ldquo;BeechTree has revolutionized the way our teachers interact
              with students, enhancing engagement and safety in the
              classroom.&rdquo;
            </p>
            <p
              className="testimonial-author"
              style={{ marginTop: "0.75rem", marginBottom: 0 }}
            >
              — School Principal
            </p>
          </div>
        </div>

        <footer className="footer">
          <Link
            href="/contact"
            className="contact-icon"
            aria-label="Contact Us"
          >
            <FaEnvelope />
          </Link>
          <Link
            href="/subscription"
            className="contact-icon"
            aria-label="Subscription"
          >
            <FaFileInvoiceDollar />
          </Link>
          <p className="text-sm text-gray-600">
            &copy; {currentYear} BeechTree LLC
          </p>
        </footer>
      </div>

      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>
                {modalContent[activeModal] && modalContent[activeModal].title}
              </h2>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-icon">
                {activeModal === "privacy" && (
                  <FaShieldAlt size={48} className="text-blue-600" />
                )}
                {activeModal === "interface" && (
                  <FaChalkboardTeacher size={48} className="text-green-600" />
                )}
                {activeModal === "testimonials" && (
                  <FaUserTie size={48} className="text-purple-600" />
                )}
              </div>
              {modalContent[activeModal] && modalContent[activeModal].content}
            </div>
            <div className="modal-footer">
              <button className="modal-button" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
