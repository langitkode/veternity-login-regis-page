const kindeVariables = {
  baseFontFamily:
    "Instrument Sans, -apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, Segoe UI, Roboto, sans-serif",
  controlSelectTextBorderRadius: "1rem",
  buttonPrimaryBackgroundColor: "#C1AFEF",
  buttonPrimaryColor: "#f5f5f5",
  buttonBorderRadius: "1rem",
  buttonSecondaryBackgroundColor: "#2B2B2B",
  buttonSecondaryBorderWidth: "1px",
  buttonSecondaryBorderColor: "#2B2B2B",
  buttonSecondaryBorderStyle: "solid",
  buttonSecondaryBorderRadius: "1rem",
} as const;

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
      --kinde-button-secondary-color: #0f172a; /* Slate-900 */
      --kinde-button-secondary-border-radius: 14px;
    }`;
