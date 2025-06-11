"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaHandPaper,
  FaBook,
  FaPencilAlt,
  FaHandshake,
  FaUniversity,
  FaFileAlt,
  FaHeart,
  FaPalette,
} from "react-icons/fa";
import { GiBee } from "react-icons/gi";

export default function SoftwarePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const softwareProducts = [
    {
      title: "Kansha",
      tagline: "Gratitude based classroom management",
      icon: <FaHandPaper />,
      description:
        "Kansha revolutionizes classroom management by focusing on positive reinforcement and gratitude. This innovative platform helps teachers track and reward good behavior, fostering a supportive learning environment. Features include digital reward systems, behavior tracking analytics, and parent communication tools.",
    },
    {
      title: "Picture Books",
      tagline: "Amazing AI stories for kids",
      icon: <FaBook />,
      description:
        "Create personalized picture books using advanced AI technology. Teachers and students can generate unique stories tailored to specific learning objectives, reading levels, and interests. Includes a vast library of AI-generated illustrations and customizable narrative templates.",
    },
    {
      title: "Writing Universe",
      tagline: "Using AI to curate creative writing",
      icon: <FaPencilAlt />,
      description:
        "An interactive platform that guides students through the creative writing process. Features AI-powered writing prompts, story structure assistance, and real-time feedback on grammar and style. Includes collaborative writing tools and portfolio management.",
    },
    {
      title: "Reading Adventures",
      tagline:
        "Using AI to build up phonics and fluency and students according to level",
      icon: <FaBook />,
      description:
        "Adaptive reading platform that automatically adjusts to each student's reading level. Incorporates interactive phonics exercises, comprehension activities, and progress tracking. Features voice recognition for reading practice and immediate feedback.",
    },
    {
      title: "Peace Out",
      tagline: "Using an AI facilitator to arrive at conflict resolutions",
      icon: <FaHandshake />,
      description:
        "An AI-powered conflict resolution tool that helps students and teachers navigate disagreements constructively. Provides guided meditation exercises, conflict resolution strategies, and documentation of agreements reached.",
    },
    {
      title: "Classroom Democracy",
      tagline: "Classroom management based on the US government",
      icon: <FaUniversity />,
      description:
        "Transform your classroom into a mini democracy with this comprehensive platform. Students learn about government processes while participating in classroom decision-making. Includes voting systems, role assignments, and civic education materials.",
    },
    {
      title: "Testing Champ",
      tagline: "Using AI to hone in on test skills",
      icon: <FaFileAlt />,
      description:
        "Comprehensive test preparation platform that adapts to individual student needs. Features practice tests, performance analytics, personalized study plans, and stress management techniques. Covers standardized tests and customizable assessments.",
    },
    {
      title: "BeSO",
      tagline:
        "Breathing, stretching, observing: Using yoga and meditation in the classroom",
      icon: <FaHeart />,
      description:
        "Mindfulness and movement program designed specifically for classroom use. Includes guided breathing exercises, age-appropriate yoga poses, and mindfulness activities. Features timer tools, activity tracking, and classroom management integration.",
    },
    {
      title: "Art Bee",
      tagline: "AI-powered creative arts and visual learning platform",
      icon: <FaPalette />,
      description:
        "Art Bee buzzes with creativity, offering students and teachers an innovative platform for digital art creation and visual learning. Features AI-assisted drawing tools, collaborative art projects, and curriculum-integrated visual arts lessons. Includes virtual art galleries, step-by-step tutorials, and assessment tools for creative projects. Perfect for developing artistic skills while enhancing visual communication and creative thinking across all subjects.",
    },
  ];

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <main className="software-page">
      <div className="software-container">
        <h1 className="software-title">Our Software Solutions</h1>

        <div className="software-grid">
          {softwareProducts.map((product, index) => (
            <div
              key={index}
              className="software-card"
              onClick={() => handleCardClick(product)}
            >
              <div className="software-icon">{product.icon}</div>
              <h3 className="software-card-title">{product.title}</h3>
              <p className="software-card-description">{product.tagline}</p>
            </div>
          ))}
        </div>

        {modalOpen && selectedProduct && (
          <div className="modal-overlay" onClick={() => setModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{selectedProduct.title}</h2>
                <button
                  className="modal-close"
                  onClick={() => setModalOpen(false)}
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-icon">{selectedProduct.icon}</div>
                <p>
                  <strong>{selectedProduct.tagline}</strong>
                </p>
                <p>{selectedProduct.description}</p>
              </div>
              <div className="modal-footer">
                <button
                  className="modal-button"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="software-footer">
          <Link href="/" className="return-button">
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
