import React from "react";
import ReactDOM from "react-dom/client";
import ToggleUsersHeader from "./ToggleUsersHeader";
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
		<ToggleUsersHeader />
	</React.StrictMode>,
);
