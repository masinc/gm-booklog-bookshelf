import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import monkey, { cdn } from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		monkey({
			entry: "src/main.tsx",
			userscript: {
				icon: "https://www.google.com/s2/favicons?sz=64&domain=booklog.jp",
				namespace: "https://masinc.dev",
				match: ["https://booklog.jp/users/*"],
				grant: "none",
			},
			build: {
				externalGlobals: {
					react: cdn.jsdelivr("React", "umd/react.production.min.js"),
					"react-dom": cdn.jsdelivr(
						"ReactDOM",
						"umd/react-dom.production.min.js",
					),
				},
			},
		}),
	],
});
