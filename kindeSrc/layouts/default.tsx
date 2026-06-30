"use server";

import React from "react";
import { Footer } from "../components/footer";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout = ({
  children,
}: DefaultLayoutProps): React.JSX.Element => (
  <section className="layout-section">
    <main className="layout-main" id="main">
      <div className="layout-row">
        <div className="layout-image-wrapper">
          <img 
            src="https://lh3.googleusercontent.com/d/1A17sCx42_kMubJ4_S0AxlPTEefSBTxgV" 
            className="layout-image"
            alt="Icon" 
          />
        </div>
        <div className="layout-content">
          {children}
        </div>
      </div>
      <Footer />
    </main>
  </section>
);