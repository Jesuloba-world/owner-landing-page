import Marquee from "react-fast-marquee";
import Image from "next/image";

export const TestimonialMarquee = () => {
	return (
		<div className="full-vw-regardless">
			<Marquee pauseOnHover>
				<TestimonialCard />
				<TestimonialCard />
				<TestimonialCard />
				<TestimonialCard />
			</Marquee>
		</div>
	);
};

const TestimonialCard = () => {
	const randomSeed = Math.floor(Math.random() * 1000);
	return (
		<div className="bg-[#F0EEF6] rounded-[40px] height-[500px] mr-3 flex overflow-hidden">
			<div className="rounded-r-[40px] overflow-hidden">
				<Image
					src={`https://picsum.photos/seed/${randomSeed}/426/500`}
					alt="random image"
					width={426}
					height={500}
					className="hover:scale-105 transition duration-300"
				/>
			</div>
			<div className="flex flex-col justify-between w-[510px] p-8 gap-6 rounded-[40px]">
				<p className="text-[32px] leading-[1.2] font-medium tracking-[-.0125em]">
					&quot;Owner is a must-have for succeeding online as an
					independent restaurant today.&quot;
				</p>
				<div className="flex flex-col">
					<p className="text-[15px] font-medium leading[1.35]">
						John & Sam
					</p>
					<p className="text-[15px] font-medium leading[1.35] text-foreground-2">
						Owners at Metro Pizza
					</p>
				</div>
			</div>
		</div>
	);
};
