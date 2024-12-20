import React from "react";
import ReactDOM from "react-dom/client";
import ToggleUsersHeader from "./ToggleUsersHeader";
import "./index.css";
import "./app.css";
import BookShelfToolbar from "./BookShelfToolbar";

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

const shelfHeaderMenu = document.querySelector("#shelf-header > .shelf-header-menu") as HTMLElement;

if (!shelfHeaderMenu) {
	throw new Error("Element not found: #shelf-header-menu");
}

ReactDOM.createRoot(
	(() => {
		const app = document.createElement("div");
		app.classList.add("bookshelf-toolbar");
		shelfHeaderMenu.after(app);
		return app;
	})(),
).render(
	<React.StrictMode>
		<BookShelfToolbar />
	</React.StrictMode>,
);
