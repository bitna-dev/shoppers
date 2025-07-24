"use client";
import { toast } from "react-toastify";

export default function Home() {
	const handleClick = () => {
		toast.success("성공");
	};
	return (
		<div>
			<button onClick={handleClick}>Click</button>
		</div>
	);
}
