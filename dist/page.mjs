"use server";
import { getKindeCSRF, getKindeRequiredCSS, getKindeRequiredJS, getKindeWidget, getSVGFaviconUrl } from "@kinde/infrastructure";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { renderToString } from "react-dom/server.browser";
//#region kindeSrc/components/widget.tsx
var styles$2 = {
	widgetWrapper: {
		display: "flex",
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	loginForm: {
		maxWidth: "400px",
		width: "100%",
		margin: "0 auto",
		minInlineSize: "2rem"
	},
	loginFormWrapper: {
		display: "flex",
		padding: "2rem",
		flexDirection: "column",
		justifyContent: "center",
		flex: 1
	},
	heading: {
		fontSize: "32px",
		fontWeight: 400,
		letterSpacing: "-0.02em",
		marginBottom: "1.5rem"
	},
	description: {
		fontSize: "16px",
		fontWeight: 300,
		lineHeight: "1.5",
		marginBottom: "2rem"
	}
};
var Widget = ({ heading, description }) => {
	return /* @__PURE__ */ jsx("article", {
		style: styles$2.widgetWrapper,
		children: /* @__PURE__ */ jsx("main", {
			style: styles$2.loginFormWrapper,
			children: /* @__PURE__ */ jsxs("div", {
				style: styles$2.loginForm,
				children: [
					/* @__PURE__ */ jsx("h1", {
						style: styles$2.heading,
						children: heading
					}),
					/* @__PURE__ */ jsx("p", {
						style: styles$2.description,
						children: description
					}),
					getKindeWidget()
				]
			})
		})
	});
};
//#endregion
//#region kindeSrc/components/footer.tsx
var styles$1 = {
	policies: {
		textAlign: "center",
		marginTop: "1.5rem",
		fontSize: "0.8rem",
		padding: "2rem"
	},
	links: {
		display: "flex",
		justifyContent: "center",
		marginTop: "0.5rem",
		gap: "0.5rem"
	},
	link: {
		color: "#184027",
		fontWeight: 500
	}
};
var Footer = () => {
	return /* @__PURE__ */ jsxs("div", {
		style: styles$1.policies,
		children: [/* @__PURE__ */ jsx("p", { children: "By continuing, you agree to our policies" }), /* @__PURE__ */ jsxs("div", {
			style: styles$1.links,
			children: [
				/* @__PURE__ */ jsx("a", {
					style: styles$1.link,
					href: "#",
					children: "Privacy Policy"
				}),
				"·",
				/* @__PURE__ */ jsx("a", {
					style: styles$1.link,
					href: "#",
					children: "Terms of Service"
				})
			]
		})]
	});
};
//#endregion
//#region kindeSrc/layouts/default.tsx
var styles = {
	wrapper: {
		display: "flex",
		minHeight: "100vh",
		width: "100%",
		background: "url(https://lh3.googleusercontent.com/d/1STD7Vb1F2bW-yRoxLtzwjoHWbqJmvx_h) center / cover no-repeat"
	},
	container: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		maxWidth: "1024px",
		minHeight: "100vh"
	},
	bodyRow: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		flex: 1,
		alignItems: "space-between",
		padding: "2rem",
		gap: "2rem"
	},
	iconColumn: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flex: 2
	},
	contentColumn: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flex: 1
	}
};
var DefaultLayout = ({ children }) => /* @__PURE__ */ jsx("section", {
	style: styles.wrapper,
	children: /* @__PURE__ */ jsxs("main", {
		style: styles.container,
		id: "main",
		children: [/* @__PURE__ */ jsxs("div", {
			style: styles.bodyRow,
			children: [/* @__PURE__ */ jsx("div", {
				style: styles.iconColumn,
				children: /* @__PURE__ */ jsx("img", {
					src: "https://lh3.googleusercontent.com/d/1A17sCx42_kMubJ4_S0AxlPTEefSBTxgV",
					style: {
						maxWidth: "100%",
						height: "auto"
					},
					alt: "Icon"
				})
			}), /* @__PURE__ */ jsx("div", {
				style: styles.contentColumn,
				children
			})]
		}), /* @__PURE__ */ jsx(Footer, {})]
	})
});
//#endregion
//#region kindeSrc/styles/styles.ts
var getStyles = () => `@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@400;600;700;800&display=swap');
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
    }

    .kinde-input {
      background-color: rgba(15, 23, 42, 0.6) !important; /* Slate-900 dengan opacity 60% */
      border: 1px solid rgba(255, 255, 255, 0.15) !important; /* Border tipis transparan */
      color: #ffffff !important;
      border-radius: 12px !important;
      padding: 0.85rem 1rem !important;
      font-family: inherit;
      transition: all 0.2s ease-in-out;
    }

    .kinde-input:focus {
      border-color: #c084fc !important; /* Ungu terang (Tailwind purple-400) */
      box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.3) !important; /* Efek glowing ungu halus */
      outline: none !important;
    }

    .kinde-label {
      color: #cbd5e1 !important; /* Slate-300 */
      font-size: 0.875rem !important;
      margin-bottom: 0.5rem !important;
      display: block;
    }

    .kinde-separator {
      color: #94a3b8 !important; /* Slate-400 */
      font-size: 0.85rem !important;
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }

    .kinde-control-link {
      color: #A04992 !important; /* Pink/Ungu muda agar kontras di background gelap */
      text-decoration: none !important;
      font-weight: 600;
      transition: color 0.2s ease;
    }

    .kinde-control-link:hover {
      color: #A1C9FF !important;
      text-decoration: underline !important;
    }

    .kinde-form-row {
      margin-bottom: 1.25rem !important;
    }`;
//#endregion
//#region kindeSrc/root.tsx
var Root = ({ children, context, request }) => {
	return /* @__PURE__ */ jsxs("html", {
		dir: request.locale.isRtl ? "rtl" : "ltr",
		lang: request.locale.lang,
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				content: "width=device-width, initial-scale=1.0",
				name: "viewport"
			}),
			/* @__PURE__ */ jsx("meta", {
				content: "noindex",
				name: "robots"
			}),
			/* @__PURE__ */ jsx("meta", {
				content: getKindeCSRF(),
				name: "csrf-token"
			}),
			/* @__PURE__ */ jsx("meta", {
				content: "light",
				name: "color-scheme"
			}),
			/* @__PURE__ */ jsx("meta", {
				content: "nopagereadaloud",
				name: "google"
			}),
			/* @__PURE__ */ jsx("title", { children: context.widget.content.page_title }),
			/* @__PURE__ */ jsx("link", {
				href: getSVGFaviconUrl(),
				rel: "icon",
				type: "image/svg+xml"
			}),
			getKindeRequiredCSS(),
			getKindeRequiredJS(),
			/* @__PURE__ */ jsx("style", { children: getStyles() })
		] }), /* @__PURE__ */ jsx("body", {
			className: "kinde-root",
			style: {
				margin: 0,
				padding: 0
			},
			children: /* @__PURE__ */ jsx("div", {
				"data-kinde-root": "true",
				children
			})
		})]
	});
};
//#endregion
//#region kindeSrc/enviroment/pages/(kinde)/(login)/page.tsx
var DefaultPage = ({ context, request }) => {
	return /* @__PURE__ */ jsx(Root, {
		context,
		request,
		children: /* @__PURE__ */ jsx(DefaultLayout, { children: /* @__PURE__ */ jsx(Widget, {
			heading: context.widget.content.heading,
			description: context.widget.content.description
		}) })
	});
};
async function Page(event) {
	return renderToString(await DefaultPage(event));
}
//#endregion
export { Page as default };
