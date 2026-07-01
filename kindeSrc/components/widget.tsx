"use server";

import { getKindeWidget } from "@kinde/infrastructure";
import React from "react";
import { Footer } from "./footer";

const styles: Record<string, React.CSSProperties> = {
  article: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "315px",
    minWidth: "100%",
    boxSizing: "border-box",
    padding: "1.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderRadius: "0.5rem",
    maxWidth: "500px",      
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    width: "100%",
    marginInline: "auto",
    color: "E1E2EB",
  },
  heading: {
    width: "100%",
    textAlign: "center",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: 400,
    letterSpacing: "-0.02em",
    marginBottom: "1.5rem",
    marginTop: "1.5rem",
    fontFamily: "Sora, sans-serif",
    overflowWrap: "break-word",
    wordBreak: "break-word",
  },
  description: {
    width: "auto",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: 300,
    lineHeight: 1.625,
    marginBottom: "3rem",
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    overflowWrap: "break-word",
    wordBreak: "break-word",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }
};

type WidgetProps = {
  heading: string;
  description: string;
};

export const Widget: React.FC<WidgetProps> = ({ heading, description }) => {
  return (
    <section style={styles.section}>
      <article style={styles.article}>
        <main style={styles.main}>
          <div style={styles.container}>
            <h1 style={styles.heading}>{heading}</h1>
            <p style={styles.description}>{description}</p>
            <div theme-content>{getKindeWidget()}</div>
          </div>
        </main>
      </article>
      <Footer data-footer />
    </section>
  );
};
