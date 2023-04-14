import React from "react";
// import styles from "../style";

const Hero = () => {
	return (
		<div
			className="flex flex-row items-center justify-between w-full bg-primary"
			id="home"
		>
			<div className="font-poppins font-semibold text-[52px] leading-[75px] w-[40%] ml-4">
				<h2 className="text-gradient">
					Find the Most Comprehensive Collection of
				</h2>
				<h1 className="text-gradient">Proxyma's AI Collection</h1>
				<h2 className="text-gradient">Websites and Resources</h2>
			</div>
			<div className={`flex-1 flex justify-center items-center md:my-0 my-10`}>
				<img src="assets/ai_hero_layout.png" alt="" />
			</div>
		</div>
	);
};

export default Hero;
