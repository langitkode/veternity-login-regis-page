export const getStyles = (): string =>
  `@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@400;600;700;800&display=swap');
    :root {
      --kinde-heading-font-family: "Sora", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --kinde-base-font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --kinde-base-color: #E1E2EB;
      --kinde-button-primary-background-color: #a855f7; 
      --kinde-button-primary-color: #E1E2EB;
      --kinde-button-primary-border-radius: 14px;
      --kinde-button-primary-font-weight: 600;
      --kinde-button-secondary-background-color: #E1E2EB;
      --kinde-button-secondary-color: #0f172a;
      --kinde-button-secondary-border-radius: 14px;
      --kinde-shared-color-text-label: #E1E2EB;
      --kinde-choice-separator: #E1E2EB;
    }
    [data-kinde-choice-separator]: { font-family: var(--kinde-base-font-family); color: var(--kinde-choice-separator); font-size: 14px; line-height: 1.5; }
    [data-kinde-layout-widget-branding]: { font-family: var(--kinde-base-font-family); color: color: var(--kinde-choice-separator); font-size: 14px; line-height: 1.5; }
    [data-kinde-root ] { margin: 0; padding: 0;}
    [data-layout-image-wrapper] { display: none; padding-top: 0; display: none !important; }
    [data-layout-content] { flex-shrink: 0; padding-top:10rem; overflow-y: auto; scrollbar-width: none; box-sizing: border-box; }
    [theme-content] { font-family: var(--kinde-base-font-family); color: var(--kinde-base-color); font-size: 14px; line-height: 1.5; }
    [data-footer] { font-family: var(--kinde-base-font-family); color: var(--kinde-shared-color-text-label); font-size: 14px; line-height: 1.5; }
    [data-layout-content]::-webkit-scrollbar { display: none;}
    @media (min-width: 768px) {
      [data-layout-main] { max-width: 500px; }
      [data-layout-image-wrapper] { display: flex; flex: 2; display: flex !important;}
      [data-layout-row] { margin-top: 0; }
      [data-layout-content] { width: 300px; box-sizing: border-box; height: 100% !important; height: 100vh; flex-shrink: 0; padding-top:0rem; overflow-y: auto; scrollbar-width: none; }
      [data-layout-row] { display: grid !important; grid-template-columns: 3fr 2fr !important; height: 100vh !important; }
    }
    @media (min-width: 1024px) {
      [data-layout-main] { max-width: 900px; }
      [data-layout-content] { width: auto;}
    }
    `;
