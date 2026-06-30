
export const getStyles = (): string =>
  `@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@400;600;700;800&display=swap');
    :root {
      --kinde-heading-font-family: "Sora", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --kinde-base-font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --kinde-base-color: #ffffff;
      --kinde-button-primary-background-color: #a855f7; 
      --kinde-button-primary-color: #ffffff;
      --kinde-button-primary-border-radius: 14px;
      --kinde-button-primary-font-weight: 600;
      --kinde-button-secondary-background-color: #ffffff;
      --kinde-button-secondary-color: #0f172a;
      --kinde-button-secondary-border-radius: 14px;
    }
    [data-layout-row] { margin-top: 10rem; }
    [data-layout-image-wrapper] { display: none; padding-top: 0; }
    @media (min-width: 768px) {
      [data-layout-main] { max-width: 500px; }
      [data-layout-image-wrapper] { display: flex; flex: 2; padding-top: 5rem; }
      [data-layout-row] { margin-top: 0; }
      [data-layout-content] { width: 300px; box-sizing: border-box; }
    }
    @media (min-width: 1024px) {
      [data-layout-main] { max-width: 900px; }
      [data-layout-content] { width: auto; }
      [data-layout-row] { gap: 4rem; }
      [data-layout-image-wrapper] { padding-top: 12.5rem; }
    }
      
    `;

