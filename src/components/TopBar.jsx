import React from "react";
// import styles from "../style";
// import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
// import { BsChatSquareDots } from "react-icons/bs";
// import proxyma from "../assets/proxyma_logo/proxyma_b.png";

const TopBar = () => {
	return (
		<div className="flex flex-row justify-between w-full my-4 center item-center ">
			<div className="flex items-center justify-center">
				<img
					src="assets/proxyma_logo/proxymaW.png"
					alt="Proxyma logo"
					size={10}
					className="text-[var(--primary-dark)] mt-2 mr-2 max-w-[180px]"
				/>

				<h1 className="ml-4 text-xl font-bold text-gray-300">AI COLLECTION</h1>
			</div>
			<div className="flex items-center">
				<button
					className="gradient-hover-effect"
				>
					Contact Us
				</button>
			</div>
		</div>
	);
};

export default TopBar;
