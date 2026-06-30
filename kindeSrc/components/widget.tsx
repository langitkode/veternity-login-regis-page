"use server";

import { getKindeWidget } from "@kinde/infrastructure";
import React from "react";

type WidgetProps = {
  heading: string;
  description: string;
};

export const Widget: React.FC<WidgetProps> = ({ heading, description }) => {
  return (
    <article className="flex flex-1 justify-center items-center">
      <main className="flex flex-col justify-center flex-1 p-6 md:p-8">
        <div className="w-full min-w-[2rem] mx-auto max-w-[400px]">
          <h1 className="text-2xl md:text-[32px] font-normal tracking-[-0.02em] mb-6 font-[Sora] w-full text-center">
            {heading}
          </h1>
          <p className="text-base font-light leading-relaxed mb-12 font-[PlusJakartaSans] w-full text-center">
            {description}
          </p>
          {getKindeWidget()}
        </div>
      </main>
    </article>
  );
};
