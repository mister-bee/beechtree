// page.js

"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { Button } from "semantic-ui-react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import FlowiseBot from "./FlowiseBot.jsx";

export default function Home() {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 className={styles.heading}>BeechTree.ai</h1>

        <Image
          src="/classroom1.jpg"
          alt="Classroom"
          layout="responsive"
          width={750}
          height={450}
        />
        <h2>Transforming education with common sense AI</h2>

        {showContactInfo ? (
          <div className={styles.contactInfo}>
            <a href="mailto:admin@beechtree.ai">admin@beechtree.ai</a>
          </div>
        ) : (
          <Button
            size="huge"
            color="blue"
            onClick={() => setShowContactInfo(!showContactInfo)}
          >
            Contact
          </Button>
        )}

        {/* <Link href="/payment">$</Link> */}
        <FlowiseBot />
      </div>

      <footer className={styles.footer}>
        <Image
          src="/beechtree-logo.jpg"
          alt="BeechTree Logo"
          layout="fixed"
          width={60}
          height={40}
        />
        <br />
        BeechTree LLC ©2024
      </footer>
    </main>
  );
}
