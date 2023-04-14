import React, { useState } from "react";
// import { BsChatSquareDots } from 'react-icons/bs';
import {
	FaFacebookF,
	FaTwitter,
	FaGooglePlusG,
	FaInstagram,
	FaBars,
} from "react-icons/fa";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-500/80 max-w-[1440px] m-auto">
			<ul className="hidden px-4 sm:flex">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="#text">Text</a>
				</li>
				<li>
					<a href="#video">Video</a>
				</li>
				<li>
					<a href="#image">Image</a>
				</li>
				<li>
					<a href="#coding">Coding</a>
				</li>
				<li>
					<a href="#others">Others</a>
				</li>
			</ul>
			<div className="flex justify-between">
				<FaFacebookF className="mx-4" />
				<FaTwitter className="mx-4" />
				<FaGooglePlusG className="mx-4" />
				<FaInstagram className="mx-4" />
			</div>
			{/* Hamburger Icon */}
			<div onClick={handleNav} className="z-10 sm:hidden">
				<FaBars size={20} className="mr-4 cursor-pointer" />
			</div>
			{/* Mobile Menu */}
			<div
				onClick={handleNav}
				className={
					nav
						? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
						: "absolute top-0 h-screen left-[-100%] ease-in duration-500"
				}
			>
				<ul className="w-full h-full pt-12 text-center">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="#text">Text</a>
					</li>
					<li>
						<a href="#video">Video</a>
					</li>
					<li>
						<a href="#image">Image</a>
					</li>
					<li>
						<a href="#coding">Coding</a>
					</li>
					<li>
						<a href="#others">Others</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
