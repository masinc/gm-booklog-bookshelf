import { useEffect, useState } from "react";

import "./App.css";

function App() {
	const [usersHeader] = useState<HTMLElement>(document.getElementById("users-header") as HTMLElement);

	useEffect(() => {
		if (usersHeader) {
			usersHeader.style.display = "none";
		}
	}, [usersHeader]);

	function toggle() {
		if (usersHeader) {
			if (usersHeader.style.display === "none") {
				usersHeader.style.display = "block";
			} else {
				usersHeader.style.display = "none";
			}
		}
	}

	return (
		<>
			<button type="button" onClick={toggle} className="menu">本棚の表示</button>
		</>
	);
}

export default App;
