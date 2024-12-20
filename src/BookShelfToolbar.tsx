import { useState } from "react";
import { Icon } from "@iconify/react";

function BookShelfToolbar() {
	const [searchText, setSearchText] = useState(
		new URLSearchParams(window.location.search).get("keyword") || "",
	);

	const currentStatus =
		new URLSearchParams(window.location.search).get("status") || "all";

	const statuses = [
		{ value: "all", label: "すべて" },
		{ value: "0", label: "未設定" },
		{ value: "1", label: "読みたい" },
		{ value: "2", label: "いま読んでる" },
		{ value: "3", label: "読み終わった" },
		{ value: "4", label: "積読" },
	];

	return (
		<div className="flex flex-wrap justify-end h-6">
			{/* search bar */}
			<div className="flex items-center text-xl mx-5">
				<input
					type="search"
					className="input input-bordered w-64 text-xl"
					placeholder="Search..."
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							const params = new URLSearchParams(window.location.search);
							params.set("keyword", searchText);
							window.location.search = params.toString();
						}
					}}
				/>
				<button
					className="btn btn-primary mx-1 text-xl"
					type="button"
					onClick={() => {
						const params = new URLSearchParams(window.location.search);
						params.set("keyword", searchText);
						window.location.search = params.toString();
					}}
				>
					<Icon icon="ic:round-search" width="24" height="24" />
				</button>
				<button
					className="btn btn-outline btn-primary mx-1"
					type="button"
					onClick={() => {
						const params = new URLSearchParams(window.location.search);
						params.delete("keyword");
						window.location.search = params.toString();
					}}
				>
					<Icon icon="ic:round-clear" width="24" height="24" />
				</button>
			</div>

			<div className="flex items-center text-xl">
				{statuses.map((status) => (
					<button
						key={status.value}
						className={`btn ${currentStatus === status.value ? "btn-active" : ""} btn-outline btn-primary mx-1`}
						type="button"
						onClick={() => {
							const params = new URLSearchParams(window.location.search);
							params.set("status", status.value);
							window.location.search = params.toString();
						}}
					>
						{status.label}
					</button>
				))}
			</div>
		</div>
	);
}

export default BookShelfToolbar;
