import { socialMedia } from "../constants";

const Social = () => (
	<div className="w-full flex justify-between items-center md:flex-row flex-col mt-12 pt-6 pb-6 border-t-[1px] border-t-[#3F3E45]">
		<p className="font-poppins font-normal text-center text-[10px] leading-[27px] text-white">
			All content & photography Copyright © 2022 Proxyma Cyber Solutions UK and
			its licensors | All rights reserved | Proxyma Cyber Solutions UK
		</p>

		<div className="flex flex-row mt-6 text-white md:mt-0">
			{socialMedia.map((social) => {
				const Icon = social.icon;
				return (
					<div
						key={social.id}
						className={`w-[21px] h-[21px] object-contain cursor-pointer ${
							social.id !== socialMedia.length - 1 ? "mr-6" : "mr-0"
						}`}
						onClick={() => window.open(social.link)}
					>
						<Icon />
					</div>
				);
			})}
		</div>
	</div>
);

export default Social;
