"use client";
import {
  Card,
  Icon,
  Container,
  Header,
  Modal,
  Button,
} from "semantic-ui-react";
import styles from "../page.module.css";
import { useState } from "react";

export default function SoftwarePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const softwareProducts = [
    {
      title: "Kansha",
      tagline: "Gratitude based classroom management",
      icon: "hand paper outline",
      description:
        "Kansha revolutionizes classroom management by focusing on positive reinforcement and gratitude. This innovative platform helps teachers track and reward good behavior, fostering a supportive learning environment. Features include digital reward systems, behavior tracking analytics, and parent communication tools.",
    },
    {
      title: "Picture Books",
      tagline: "Amazing AI stories for kids",
      icon: "book",
      description:
        "Create personalized picture books using advanced AI technology. Teachers and students can generate unique stories tailored to specific learning objectives, reading levels, and interests. Includes a vast library of AI-generated illustrations and customizable narrative templates.",
    },
    {
      title: "Writing Universe",
      tagline: "Using AI to curate creative writing",
      icon: "pencil",
      description:
        "An interactive platform that guides students through the creative writing process. Features AI-powered writing prompts, story structure assistance, and real-time feedback on grammar and style. Includes collaborative writing tools and portfolio management.",
    },
    {
      title: "Reading Adventures",
      tagline:
        "Using AI to build up phonics and fluency and students according to level",
      icon: "book",
      description:
        "Adaptive reading platform that automatically adjusts to each student's reading level. Incorporates interactive phonics exercises, comprehension activities, and progress tracking. Features voice recognition for reading practice and immediate feedback.",
    },
    {
      title: "Peace Out",
      tagline: "Using an AI facilitator to arrive at conflict resolutions",
      icon: "handshake",
      description:
        "An AI-powered conflict resolution tool that helps students and teachers navigate disagreements constructively. Provides guided meditation exercises, conflict resolution strategies, and documentation of agreements reached.",
    },
    {
      title: "Classroom Democracy",
      tagline: "Classroom management based on the US government",
      icon: "university",
      description:
        "Transform your classroom into a mini democracy with this comprehensive platform. Students learn about government processes while participating in classroom decision-making. Includes voting systems, role assignments, and civic education materials.",
    },
    {
      title: "Testing Champ",
      tagline: "Using AI to hone in on test skills",
      icon: "file alternate outline",
      description:
        "Comprehensive test preparation platform that adapts to individual student needs. Features practice tests, performance analytics, personalized study plans, and stress management techniques. Covers standardized tests and customizable assessments.",
    },
    {
      title: "BeSO",
      tagline:
        "Breathing, stretching, observing: Using yoga and meditation in the classroom",
      icon: "heart",
      description:
        "Mindfulness and movement program designed specifically for classroom use. Includes guided breathing exercises, age-appropriate yoga poses, and mindfulness activities. Features timer tools, activity tracking, and classroom management integration.",
    },
  ];

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <main className={styles.main} style={{ paddingTop: "1rem" }}>
      <Container style={{ padding: "0 2rem" }}>
        <Header
          as="h1"
          textAlign="center"
          style={{
            marginBottom: "2rem",
            fontSize: "3.5rem",
            fontWeight: "700",
          }}
        >
          Our Software Solutions
        </Header>
        <Card.Group centered stackable>
          {softwareProducts.map((product, index) => (
            <Card key={index} onClick={() => handleCardClick(product)}>
              <Card.Content>
                <Icon
                  name={product.icon}
                  size="huge"
                  style={{
                    display: "block",
                    margin: "0.5em auto",
                    color: "#4183c4",
                    cursor: "pointer",
                  }}
                />
                <Card.Header textAlign="center">{product.title}</Card.Header>
                <Card.Description textAlign="center">
                  {product.tagline}
                </Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>

        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          size="small"
        >
          {selectedProduct && (
            <>
              <Modal.Header>{selectedProduct.title}</Modal.Header>
              <Modal.Content>
                <Icon
                  name={selectedProduct.icon}
                  size="huge"
                  style={{
                    display: "block",
                    margin: "0.5em auto",
                    color: "#4183c4",
                  }}
                />
                <p>
                  <strong>{selectedProduct.tagline}</strong>
                </p>
                <p>{selectedProduct.description}</p>
              </Modal.Content>
              <Modal.Actions>
                <Button color="blue" onClick={() => setModalOpen(false)}>
                  Close
                </Button>
              </Modal.Actions>
            </>
          )}
        </Modal>

        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            marginBottom: "2rem",
          }}
        >
          <Button
            color="blue"
            size="large"
            onClick={() => (window.location.href = "/")}
          >
            Return to Home
          </Button>
        </div>
      </Container>
    </main>
  );
}
