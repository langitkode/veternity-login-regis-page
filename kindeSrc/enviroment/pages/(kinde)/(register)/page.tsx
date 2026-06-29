"use server";

import { getKindeWidget } from "@kinde/infrastructure";
import React from "react";
import '../../../../styles/globals.css';

type WidgetProps = {
  heading: string;
};

export const Widget: React.FC<WidgetProps> = ({ heading }) => {
  return (
    <main className="w-full max-w-[440px] bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
      <div className="w-full">
        
        {/* Judul dinamis Pendaftaran dari Kinde */}
        <h1 className="text-3xl font-bold tracking-tight text-center mb-2 text-white">
          {heading || "Daftar Akun"}
        </h1>
        
        <p className="text-sm text-slate-400 text-center mb-8">
          Bergabunglah dengan ekosistem kami yang aman dan modern.
        </p>

        {/* Form Registrasi Utama Kinde */}
        <div className="kinde-custom-form-wrapper">
          {getKindeWidget()}
        </div>
        
      </div>
    </main>
  );
};