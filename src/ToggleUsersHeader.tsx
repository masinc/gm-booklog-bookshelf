import { useEffect, useState } from "react";

function ToggleUserHeader() {
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
		<div className="menu">
			<button type="button" onClick={toggle} className="btn text-xl">本棚情報</button>
		</div>
	);
}

export default ToggleUserHeader;
