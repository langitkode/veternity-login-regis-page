import { createServer as createViteDevServer } from "vite";
import http from "http";

async function start() {
  const vite = await createViteDevServer({
    server: { middlewareMode: true, hmr: false },
    appType: "custom",
  });

  const server = http.createServer(async (req, res) => {
    const url = req.url || "/";

    if (url.startsWith("/@")) {
      vite.middlewares(req, res, () => {
        res.statusCode = 404;
        res.end();
      });
      return;
    }

    try {
      const isRegister = url.includes("register");
      const pagePath = isRegister
        ? "./kindeSrc/environment/pages/(kinde)/(register)/page.tsx"
        : "./kindeSrc/environment/pages/(kinde)/(login)/page.tsx";

      const mod = await vite.ssrLoadModule(pagePath);

      const mockEvent = {
        context: {
          widget: {
            content: {
              page_title: isRegister ? "Sign Up" : "Sign In",
              heading: isRegister ? "Create Account" : "Welcome Back",
              description: isRegister
                ? "Fill in your details below to get started"
                : "Sign in to your account to continue",
              logo_alt: "Logo",
            },
          },
        },
        request: {
          authUrlParams: {
            orgCode: "org_example",
            state: "abc123",
            clientId: "client_abc",
            redirectUri: "http://localhost:5173/callback",
          },
          locale: { isRtl: false, lang: "en" },
          route: {
            context: isRegister ? "register" : "login",
            flow: isRegister ? "register" : "login",
            path: "auth",
          },
        },
      };

      const html = await mod.default(mockEvent);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<!DOCTYPE html>\n" + html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(e instanceof Error ? e.message + "\n" + (e.stack || "") : String(e));
    }
  });

  const port = process.env.PORT || 5173;
  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(`Port ${port} is already in use. Kill the existing process or use a different port.`);
    } else {
      console.error("Server error:", err);
    }
    process.exit(1);
  });
  server.listen(port, () => {
    console.log(`Veternity SSR running at http://localhost:${port}`);
  });
}

start();
