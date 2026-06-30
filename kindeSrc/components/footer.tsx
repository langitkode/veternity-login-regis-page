"use server";

import React from "react";

const styles: Record<string, React.CSSProperties> = {
  container: {
    textAlign: "center",
    marginTop: "1.5rem",
    fontSize: "0.8rem",
    padding: "2rem",
    color: "#E1E2EB",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    marginTop: "0.5rem",
    gap: "0.5rem",
  },
  link: {
    fontWeight: 500,
  },
};

export const Footer = () => {
  return (
    <div style={styles.container}>
      <p>By continuing, you agree to our policies</p>
      <div style={styles.links}>
        <a style={styles.link} href="#">
          Privacy Policy
        </a>
        ·
        <a style={styles.link} href="#">
          Terms of Service
        </a>
      </div>
    </div>
  );
};
