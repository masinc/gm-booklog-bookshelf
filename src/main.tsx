import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const headerMenu = document.getElementById("header-menu") as HTMLElement;

if (!headerMenu) {
	throw new Error("Element not found: #header-menu");
}

ReactDOM.createRoot(
	(() => {
		const app = document.createElement("div");
		headerMenu.appendChild(app);
		return app;
	})(),
).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
