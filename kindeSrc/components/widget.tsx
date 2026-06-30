"use server";

import { getKindeWidget } from "@kinde/infrastructure";
import React from "react";

type WidgetProps = {
  heading: string;
  description: string;
};

export const Widget: React.FC<WidgetProps> = ({ heading, description }) => {
  return (
    <article className="widget-article">
      <main className="widget-main">
        <div className="widget-container">
          <h1 className="widget-heading">
            {heading}
          </h1>
          <p className="widget-description">
            {description}
          </p>
          {getKindeWidget()}
        </div>
      </main>
    </article>
  );
};
