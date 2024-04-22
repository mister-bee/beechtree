// page.js

"use client"

import styles from "./page.module.css";
import { useState } from 'react';
import Image from 'next/image';
import FlowiseBot from "./FlowiseBot";
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>BeechTree.ai</h1>
        <Image 
          src="/classroom1.jpg" 
          alt="Classroom" 
          layout='responsive'
          width={750} // Width of the image as per your design requirement
          height={450} // Height of the image keeping the same aspect ratio
        />
        <h2>Transforming education using safe common sense AI</h2>
        <button onClick={() => setShowContactInfo(!showContactInfo)}>
          {isMobile ? 'Info' : 'Contact!'}
        </button>
        {showContactInfo && (
          <div className={styles.contactInfo}>
            <a href="mailto:admin@beechtree.ai">admin@beechtree.ai</a>
          </div>
        )}
        <FlowiseBot />
      </div>
      <footer className={styles.footer}>
        <Image src="/beechtree-logo.jpg" alt="BeechTree Logo" layout='fixed' width={60} height={40} />
        BeechTree LLC ©2024
      </footer>
    </main>
  );
}
