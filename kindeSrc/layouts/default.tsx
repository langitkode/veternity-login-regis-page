"use server";

import React from "react";
import { Footer } from "../components/footer";

const styles: Record<string, React.CSSProperties> = {
  section: {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    backgroundImage:
      "url('https://lh3.googleusercontent.com/d/11OS3x7vFSp1rFAoNpUZ7lPKcn9XFxyM0')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflowX: "hidden",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "100%",
    justifyContent: "space-between",
    marginInline: "auto",
    color: "#E1E2EB",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "3fr 2fr",
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 4rem)",
  },
};

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout = ({
  children,
}: DefaultLayoutProps): React.JSX.Element => (
  <section style={styles.section}>
    <main data-layout-main style={styles.main} id="main">
      <div data-layout-row style={styles.row}>
        <div data-layout-image-wrapper style={styles.imageWrapper}>
          <img
            src="https://lh3.googleusercontent.com/d/19vhpFaGMNIDJnLrWxM56lHaHmpjJu-bu"
            style={styles.image}
            alt="Icon"
          />
        </div>
        <div data-layout-content style={styles.content}>
          {children}
        </div>
      </div>
      <Footer />
    </main>
  </section>
);
function calc(arg0: number, arg1: number, rem: any): import("csstype").Property.Height<string | number> | undefined {
  throw new Error("Function not implemented.");
}

