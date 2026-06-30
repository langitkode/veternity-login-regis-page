"use server";

import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <p>By continuing, you agree to our policies</p>
      <div className="footer-links">
        <a className="footer-link" href="#">
          Privacy Policy
        </a>
        ·
        <a className="footer-link" href="#">
          Terms of Service
        </a>
      </div>
    </div>
  );
};
