"use server";

import React from "react";
import { Footer } from "../components/footer";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const styles: {
  wrapper: React.CSSProperties;
  container: React.CSSProperties;
  bodyRow: React.CSSProperties;
  iconColumn: React.CSSProperties;
  contentColumn: React.CSSProperties;
} = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    width: "100vw",
    background: "url(https://lh3.googleusercontent.com/d/1STD7Vb1F2bW-yRoxLtzwjoHWbqJmvx_h) center / cover no-repeat",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: "1024px",
    minHeight: "100vh",
  },
  bodyRow: {
    display: "flex",
    flexDirection: "row",      
    flex: 1,                  
    alignItems: "space-between",
    padding: "2rem",
    gap: "2rem",
  },
  iconColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 2,                   
  },
  contentColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,                  
  },
};

export const DefaultLayout = ({
  children,
}: DefaultLayoutProps): React.JSX.Element => (
  <section style={styles.wrapper}>
    <main style={styles.container} id="main">
      <div style={styles.bodyRow}>
        <div style={styles.iconColumn}>
          <img 
            src="https://lh3.googleusercontent.com/d/1A17sCx42_kMubJ4_S0AxlPTEefSBTxgV" 
            style={{ maxWidth: "100%", height: "auto" }} /* Biar gambar responsif tidak pecah */
            alt="Icon" 
          />
        </div>
        <div style={styles.contentColumn}>
          {children}
        </div>
      </div>
      <Footer />
    </main>
  </section>
);