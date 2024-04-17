// page.js

"use client"

import styles from "./page.module.css";
import { useState } from 'react';
import Image from 'next/image';
import VectorShiftChatBot from "./VectorShiftChatBot";


export default function Home() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 style={{ fontSize: "5em" }}>BeechTree.ai</h1>
        <Image src="/classroom1.jpg" alt="Classroom" width={750} height={450} />

        <h2 style={{ fontSize: "2em" }}>Transforming education using safe common sense AI</h2>
         {/* <img src="/beechtree-logo.jpg" alt="BeechTree Logo" />  */}
        </div>
        <br/>
        <br/>
        <br/>
       {!showContactInfo ? (
          <button onClick={() => setShowContactInfo(true)} className={styles.largeButton}>
            Contact!
          </button>
        ) : (
          <div className={styles.contactInfo}>
            <a href="mailto:admin@beechtree.ai">admin@beechtree.ai</a>
          </div>
        )} 
        {/* {!showContactInfo ? (
          <button onClick={() => setShowContactInfo(true)} className={styles.largeButton}>
            Ask questions!
          </button>
        ) : (
          <VectorShiftChatBot/>
        )} */}
 <br/>
 <br/>
 <br/>
      <footer className={styles.footer}>
      <Image src="/beechtree-logo.jpg" alt="BeechTree Logo" width={60} height={40} /> <br/>
        BeechTree LLC ©2024
      </footer>
    </main>
  );
}
