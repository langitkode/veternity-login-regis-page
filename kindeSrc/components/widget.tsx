"use server";

import { getKindeWidget } from "@kinde/infrastructure";
import React from "react";

const styles: Record<string, React.CSSProperties> = {
  article: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    minWidth: 0,
    boxSizing: "border-box",
    padding: "1.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderRadius: "0.5rem",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    width: "100%",
    minWidth: "2rem",
    marginInline: "auto",
    maxWidth: "400px",
  },
  heading: {
    width: "100%",
    textAlign: "center",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: 400,
    letterSpacing: "-0.02em",
    marginBottom: "1.5rem",
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
};

type WidgetProps = {
  heading: string;
  description: string;
};

export const Widget: React.FC<WidgetProps> = ({ heading, description }) => {
  return (
    <article style={styles.article}>
      <main style={styles.main}>
        <div style={styles.container}>
          <h1 style={styles.heading}>{heading}</h1>
          <p style={styles.description}>{description}</p>
          {getKindeWidget()}
        </div>
      </main>
    </article>
  );
};
