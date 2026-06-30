"use server";

import React from "react";
import { Footer } from "../components/footer";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout = ({
  children,
}: DefaultLayoutProps): React.JSX.Element => (
  <section className="flex w-full min-h-screen bg-[url('https://lh3.googleusercontent.com/d/1STD7Vb1F2bW-yRoxLtzwjoHWbqJmvx_h')] bg-cover bg-center bg-no-repeat">
    <main className="flex flex-col w-full md:max-w-[500px] lg:max-w-[1024px] min-h-screen mx-auto text-[#E1E2EB]" id="main">
      <div className="flex flex-1 flex-col lg:flex-row lg:gap-16 justify-center items-center">
        <div className="hidden md:flex md:flex-[2] justify-center items-center pt-0 md:pt-20 lg:pt-50">
          <img 
            src="https://lh3.googleusercontent.com/d/1A17sCx42_kMubJ4_S0AxlPTEefSBTxgV" 
            className="w-full h-auto"
            alt="Icon" 
          />
        </div>
        <div className="flex flex-1 justify-center items-center bg-white/5 backdrop-blur-md rounded-lg p-6 border-1 border-white/10 justify-center items-center">
          {children}
        </div>
      </div>
      <Footer />
    </main>
  </section>
);