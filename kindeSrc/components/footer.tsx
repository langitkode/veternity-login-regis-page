"use server";

import React from "react";

const styles: Record<string, React.CSSProperties> = {
  container: {
    textAlign: "center",
    fontSize: "0.8rem",
    color: "#E1E2EB",
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    marginTop: "1rem"
  },
  links: {
    display: "flex",
    justifyContent: "center",
    marginTop: "0.5rem",
    gap: "0.5rem",
  },
  link: {
    fontWeight: 500,
    color: "inherit"
  },
};

export const Footer = () => {
  return (
    <div style={styles.container}>
      <p>By continuing, you agree to our policies</p>
      <div style={styles.links}>
        <a style={styles.link} href="https://docs.kinde.com/trust-center/privacy-and-compliance/privacy-policy/">
          Privacy Policy
        </a>
        ·
        <a style={styles.link} href="#https://docs.kinde.com/trust-center/agreements/terms-of-service/">
          Terms of Service
        </a>
      </div>
    </div>
  );
};
