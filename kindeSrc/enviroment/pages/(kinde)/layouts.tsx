"use server";

import React from "react";
import { backgroundUrl, logoUrl } from "../../../../assetUrl";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const background = `https://lh3.googleusercontent.com/d/${backgroundUrl}`;
  const logo = `https://lh3.googleusercontent.com/d/${logoUrl}`;
  return (
    <html lang="id">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <article 
          className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-950 bg-cover bg-center bg-no-repeat px-6 py-12 md:flex-row md:justify-around text-white"
          style={{ backgroundImage: `url('${background}')` }}
        >
          <div className="flex flex-1 max-w-xl items-center justify-center p-4 mb-8 md:mb-0">
            <img 
              src={logo} 
              alt="Veternity Beraksi Logo" 
              className="w-full max-w-md h-auto object-contain drop-shadow-[0_0_35px_rgba(168,85,247,0.6)]" 
            />
          </div>

          {/* SISI KANAN: Slot dinamis tempat form login atau register dirender */}
          {children}

        </article>
      </body>
    </html>
  );
}