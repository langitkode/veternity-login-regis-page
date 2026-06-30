"use server";

import React from "react";
import { Footer } from "../components/footer";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const styles: {
  container: React.CSSProperties;
  content: React.CSSProperties;
  icon: React.CSSProperties;
  wrapper: React.CSSProperties;
} = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    minWidth: "100vw",
    background:
      "url(https://lh3.googleusercontent.com/d/1STD7Vb1F2bW-yRoxLtzwjoHWbqJmvx_h) cover no-repeat",
  },
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  content: {
    display: "flex",
    width: "100%",
    flex: 1,
    justifyContent: "end",
    alignItems: "center",
    padding: "2rem",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
};

export const DefaultLayout = ({
  children,
}: DefaultLayoutProps): React.JSX.Element => (
  <section style={styles.wrapper}>
    <main style={styles.container} id="main">
      <div>
        <div style={styles.icon}><img src="https://lh3.googleusercontent.com/d/1A17sCx42_kMubJ4_S0AxlPTEefSBTxgV" width={500} alt="Icon" /></div>
        <div style={styles.content}>{children}</div>
      </div>
      <Footer />
    </main>
  </section>
);
