"use server";

import React from "react";

const styles: Record<string, React.CSSProperties> = {
  section: {
    display: "flex",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100vw", 
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  backgroundFixed: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)", 
    width: "100%",
    minWidth: "900px",          
    height: "100%",
    backgroundImage: "url('https://lh3.googleusercontent.com/d/11OS3x7vFSp1rFAoNpUZ7lPKcn9XFxyM0')",
    backgroundSize: "cover",   
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: -1,               
  },
  main: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    width: "100%",
    height: "100%",
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
    height: "100%",
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
    alignItems: "start",  
    minWidth: "300px", 
    maxWidth: "500px",        
    height: "100%",    
    boxSizing: "border-box",
    overflowY: "auto",             
    scrollbarWidth: "none",   
    paddingTop:"5rem",
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
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
