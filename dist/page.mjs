"use server";
import { getKindeCSRF, getKindeRequiredCSS, getKindeRequiredJS, getKindeWidget, getSVGFaviconUrl } from "@kinde/infrastructure";
import "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { renderToString } from "react-dom/server.browser";
//#region kindeSrc/components/footer.tsx
var styles$2 = {
	container: {
		textAlign: "center",
		fontSize: "0.8rem",
		color: "#E1E2EB",
		fontFamily: "\"Plus Jakarta Sans\", sans-serif",
		marginTop: "1rem",
		marginBottom: "3rem"
	},
	links: {
		display: "flex",
		justifyContent: "center",
		marginTop: "0.5rem",
		gap: "0.5rem"
	},
	link: {
		fontWeight: 500,
		color: "inherit"
	}
};
var Footer = () => {
	return /* @__PURE__ */ jsxs("div", {
		style: styles$2.container,
		children: [/* @__PURE__ */ jsx("p", { children: "By continuing, you agree to our policies" }), /* @__PURE__ */ jsxs("div", {
			style: styles$2.links,
			children: [
				/* @__PURE__ */ jsx("a", {
					style: styles$2.link,
					href: "https://docs.kinde.com/trust-center/privacy-and-compliance/privacy-policy/",
					children: "Privacy Policy"
				}),
				"·",
				/* @__PURE__ */ jsx("a", {
					style: styles$2.link,
					href: "#https://docs.kinde.com/trust-center/agreements/terms-of-service/",
					children: "Terms of Service"
				})
			]
		})]
	});
};
//#endregion
//#region kindeSrc/components/widget.tsx
var styles$1 = {
	article: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		minWidth: "300px",
		boxSizing: "border-box",
		padding: "1.5rem",
		backgroundColor: "rgba(255, 255, 255, 0.05)",
		backdropFilter: "blur(12px)",
		WebkitBackdropFilter: "blur(12px)",
		borderRadius: "0.5rem"
	},
	main: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		width: "100%"
	},
	container: {
		width: "100%",
		minWidth: "calc(100% - 1rem)",
		marginInline: "auto",
		maxWidth: "400px",
		color: "E1E2EB"
	},
	heading: {
		width: "100%",
		textAlign: "center",
		fontSize: "1.5rem",
		lineHeight: "2rem",
		fontWeight: 400,
		letterSpacing: "-0.02em",
		marginBottom: "1.5rem",
		marginTop: "1.5rem",
		fontFamily: "Sora, sans-serif",
		overflowWrap: "break-word",
		wordBreak: "break-word"
	},
	description: {
		width: "auto",
		textAlign: "center",
		fontSize: "1rem",
		fontWeight: 300,
		lineHeight: 1.625,
		marginBottom: "3rem",
		fontFamily: "\"Plus Jakarta Sans\", sans-serif",
		overflowWrap: "break-word",
		wordBreak: "break-word"
	},
	section: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%"
	}
};
var Widget = ({ heading, description }) => {
	return /* @__PURE__ */ jsxs("section", {
		style: styles$1.section,
		children: [/* @__PURE__ */ jsx("article", {
			style: styles$1.article,
			children: /* @__PURE__ */ jsx("main", {
				style: styles$1.main,
				children: /* @__PURE__ */ jsxs("div", {
					style: styles$1.container,
					children: [
						/* @__PURE__ */ jsx("h1", {
							style: styles$1.heading,
							children: heading
						}),
						/* @__PURE__ */ jsx("p", {
							style: styles$1.description,
							children: description
						}),
						/* @__PURE__ */ jsx("div", {
							"theme-content": true,
							children: getKindeWidget()
						})
					]
				})
			})
		}), /* @__PURE__ */ jsx(Footer, { "data-footer": true })]
	});
};
//#endregion
//#region kindeSrc/layouts/default.tsx
var styles = {
	section: {
		display: "flex",
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		width: "100vw",
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: "0.5rem",
		paddingRight: "0.5rem"
	},
	backgroundFixed: {
		position: "absolute",
		top: 0,
		left: "50%",
		transform: "translateX(-50%)",
		width: "100%",
		minWidth: "900px",
		height: "100%",
		backgroundImage: "url('https://lh3.googleusercontent.com/d/11OS3x7vFSp1rFAoNpUZ7lPKcn9XFxyM0')",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		zIndex: -1
	},
	main: {
		display: "flex",
		position: "relative",
		flexDirection: "column",
		width: "100%",
		height: "100%",
		justifyContent: "space-between",
		marginInline: "auto",
		color: "#E1E2EB",
		boxSizing: "border-box"
	},
	row: {
		display: "flex",
		position: "relative",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%"
	},
	imageWrapper: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%"
	},
	image: {
		width: "100%",
		height: "auto"
	},
	content: {
		display: "flex",
		justifyContent: "start",
		alignItems: "start",
		width: "100%",
		minWidth: "300px",
		maxWidth: "500px",
		height: "100%",
		boxSizing: "border-box",
		overflowY: "auto",
		scrollbarWidth: "none",
		paddingTop: "5rem"
	}
};
var DefaultLayout = ({ children }) => {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("section", {
		style: styles.section,
		children: [/* @__PURE__ */ jsx("div", { style: styles.backgroundFixed }), /* @__PURE__ */ jsx("main", {
			"data-layout-main": true,
			style: styles.main,
			id: "main",
			children: /* @__PURE__ */ jsxs("div", {
				"data-layout-row": true,
				style: styles.row,
				children: [/* @__PURE__ */ jsx("div", {
					"data-layout-image-wrapper": true,
					style: styles.imageWrapper,
					children: /* @__PURE__ */ jsx("img", {
						src: "https://lh3.googleusercontent.com/d/19vhpFaGMNIDJnLrWxM56lHaHmpjJu-bu",
						style: styles.image,
						alt: "Icon"
					})
				}), /* @__PURE__ */ jsx("div", {
					"data-layout-content": true,
					style: styles.content,
					children
				})]
			})
		})]
	}) });
};
//#endregion
//#region kindeSrc/styles/styles.ts
var getStyles = () => `@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@400;600;700;800&display=swap');
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
    [data-kinde-control-input] { font-family: var(--kinde-base-font-family) !important; color: var(--kinde-base-color) !important; font-size: 14px; line-height: 1.5; }
    [data-kinde-choice-separator] { font-family: var(--kinde-base-font-family) !important; color: var(--kinde-choice-separator) !important; font-size: 14px; line-height: 1.5; }
    [data-kinde-layout-widget-branding] { font-family: var(--kinde-base-font-family) !important; color: color: var(--kinde-choice-separator) !important; font-size: 14px; line-height: 1.5; }
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

    p {
      color: var(--kinde-base-color) !important;
    }
    `;
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
//#region kindeSrc/environment/pages/(kinde)/(login)/page.tsx
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
