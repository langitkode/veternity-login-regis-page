"use server";
import { getKindeCSRF, getKindeRequiredCSS, getKindeRequiredJS, getKindeWidget, getSVGFaviconUrl } from "@kinde/infrastructure";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { renderToString } from "react-dom/server.browser";
//#region kindeSrc/components/widget.tsx
var styles$2 = {
	article: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "90%",
		minWidth: 0,
		boxSizing: "border-box",
		padding: "1.5rem",
		backgroundColor: "rgba(255, 255, 255, 0.05)",
		backdropFilter: "blur(12px)",
		WebkitBackdropFilter: "blur(12px)",
		borderRadius: "0.5rem",
		border: "1px solid rgba(255, 255, 255, 0.1)"
	},
	main: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		width: "100%",
		boxSizing: "border-box",
		padding: "1.5rem"
	},
	container: {
		width: "100%",
		minWidth: "2rem",
		marginInline: "auto",
		maxWidth: "400px"
	},
	heading: {
		width: "100%",
		textAlign: "center",
		fontSize: "1.5rem",
		lineHeight: "2rem",
		fontWeight: 400,
		letterSpacing: "-0.02em",
		marginBottom: "1.5rem",
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
	}
};
var Widget = ({ heading, description }) => {
	return /* @__PURE__ */ jsx("article", {
		style: styles$2.article,
		children: /* @__PURE__ */ jsx("main", {
			style: styles$2.main,
			children: /* @__PURE__ */ jsxs("div", {
				style: styles$2.container,
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
	container: {
		textAlign: "center",
		marginTop: "1.5rem",
		fontSize: "0.8rem",
		padding: "2rem",
		color: "#E1E2EB"
	},
	links: {
		display: "flex",
		justifyContent: "center",
		marginTop: "0.5rem",
		gap: "0.5rem"
	},
	link: { fontWeight: 500 }
};
var Footer = () => {
	return /* @__PURE__ */ jsxs("div", {
		style: styles$1.container,
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
	section: {
		display: "flex",
		width: "100%",
		minHeight: "100vh",
		backgroundImage: "url('https://lh3.googleusercontent.com/d/1STD7Vb1F2bW-yRoxLtzwjoHWbqJmvx_h')",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		overflowX: "hidden"
	},
	main: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		minHeight: "100%",
		justifyContent: "space-between",
		marginInline: "auto",
		color: "#E1E2EB"
	},
	row: {
		display: "grid",
		gridTemplateColumns: "3fr 2fr",
		justifyContent: "center",
		alignItems: "center"
	},
	imageWrapper: {
		justifyContent: "center",
		alignItems: "center"
	},
	image: {
		width: "100%",
		height: "auto"
	},
	content: {
		display: "flex",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: "0 1.5rem"
	}
};
var DefaultLayout = ({ children }) => /* @__PURE__ */ jsx("section", {
	style: styles.section,
	children: /* @__PURE__ */ jsxs("main", {
		"data-layout-main": true,
		style: styles.main,
		id: "main",
		children: [/* @__PURE__ */ jsxs("div", {
			"data-layout-row": true,
			style: styles.row,
			children: [/* @__PURE__ */ jsx("div", {
				"data-layout-image-wrapper": true,
				style: styles.imageWrapper,
				children: /* @__PURE__ */ jsx("img", {
					src: "https://lh3.googleusercontent.com/d/1A17sCx42_kMubJ4_S0AxlPTEefSBTxgV",
					style: styles.image,
					alt: "Icon"
				})
			}), /* @__PURE__ */ jsx("div", {
				"data-layout-content": true,
				style: styles.content,
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
      [data-layout-main] { max-width: 1024px; }
      [data-layout-row] { flex-direction: row; gap: 4rem; }
      [data-layout-image-wrapper] { padding-top: 12.5rem; }
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
