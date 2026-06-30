"use server";

import React from "react";

export const Footer = () => {
  return (
    <div className="text-center mt-6 text-[0.8rem] p-8">
      <p>By continuing, you agree to our policies</p>
      <div className="flex justify-center mt-2 gap-2">
        <a className="text-[#184027] font-medium" href="#">
          Privacy Policy
        </a>
        ·
        <a className="text-[#184027] font-medium" href="#">
          Terms of Service
        </a>
      </div>
    </div>
  );
};
