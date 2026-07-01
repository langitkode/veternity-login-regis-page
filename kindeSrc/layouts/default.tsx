"use server";

import React from "react";
import { Footer } from "../components/footer";

const styles: Record<string, React.CSSProperties> = {
  // 1. KUNCI PANGGUNG UTAMA SELAYAR PENUH
  section: {
    display: "flex",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",        /* Sembunyikan scroll global agar background mati total */
    justifyContent: "center",
    alignItems: "center",
  },
  // 2. ATURAN GAMBAR LATAR BELAKANG MINIMAL UKURAN TABLET
  backgroundFixed: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)", /* Memastikan gambar tetap berada di tengah layar */
    width: "100%",
    minWidth: "900px",          /* SOLUSI: Ukuran terkecil gambar adalah ukuran tablet */
    height: "100%",
    backgroundImage: "url('https://lh3.googleusercontent.com/d/11OS3x7vFSp1rFAoNpUZ7lPKcn9XFxyM0')",
    backgroundSize: "cover",    /* Otomatis membesar menyesuaikan jika layar lebih lebar */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: -1,                 /* Berada di balik form */
  },
  main: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    maxHeight: "100vh",
    justifyContent: "space-between",
    marginInline: "auto",
    color: "#E1E2EB",
    boxSizing: "border-box",
  },
  row: {
    display: "flex",     
    position: "relative",      
    flexDirection: "column",   
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    flex: 1,
    overflow: "hidden",         /* Kunci baris agar tidak bocor di HP */
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  content: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",  
    minWidth: "300px", 
    maxWidth: "500px",        
    height: "100%",    
    boxSizing: "border-box",
    overflowY: "auto",             
    scrollbarWidth: "none",   
    paddingLeft:"1rem",
    paddingRight:"1rem",
    paddingTop:"10rem",
  },
};

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout = ({
  children,
}: DefaultLayoutProps): React.JSX.Element => {
  return (
    <>
      <section style={styles.section}>
        {/* Elemen Latar Belakang Mandiri dengan Skala Minimal Tablet */}
        <div style={styles.backgroundFixed} />

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
              <Footer data-footer />
            </div>
          </div>
          
        </main>
      </section>
    </>
  );
};
