"use server";

import { getKindeWidget, getLogoUrl } from "@kinde/infrastructure";
import React from "react";

type WidgetProps = {
  heading: string;
  description: string;
};

const styles: {
  widgetWrapper: React.CSSProperties;
  heading: React.CSSProperties;
  description: React.CSSProperties;
  loginForm: React.CSSProperties;
  loginFormWrapper: React.CSSProperties;
} = {
  widgetWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginForm: {
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto",
    minInlineSize: "2rem",
  },
  loginFormWrapper: {
    display: "flex",
    padding: "2rem",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },
  heading: {
    fontSize: "32px",
    fontWeight: 400,
    letterSpacing: "-0.02em",
    marginBottom: "1.5rem",
  },
  description: {
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "1.5",
    marginBottom: "2rem",
  },
};

export const Widget: React.FC<WidgetProps> = ({ heading, description }) => {
  return (
    <article style={styles.widgetWrapper}>
      <main style={styles.loginFormWrapper}>
        <div style={styles.loginForm}>
          <h1 style={styles.heading}>{heading}</h1>
          <p style={styles.description}>{description}</p>
          {getKindeWidget()}
        </div>
      </main>
    </article>
  );
};
