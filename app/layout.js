// layout.js
import 'semantic-ui-css/semantic.min.css';
import "./globals.css";
import Head from 'next/head';




export const metadata = {
  title: "BeechTree",
  description: "Education + AI",
};


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        {/* Responsive viewport meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        {/* Import Quicksand font from Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
