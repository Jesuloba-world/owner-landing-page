import Marquee from "react-fast-marquee";
import Image from "next/image";
import { marqueeData, MarqueeItem } from "./constants";
import { cn } from "@/lib/utils";

export const TestimonialMarquee = () => {
	return (
		<div className="full-vw-regardless">
			<div className="hidden md:block">
				<Marquee pauseOnHover>
					{marqueeData.map((el, i) => (
						<TestimonialCard key={i} {...el} />
					))}
				</Marquee>
			</div>
			<div className="md:hidden">
				<TestimonialScroll />
			</div>
		</div>
	);
};

const TestimonialScroll = () => {
	return (
		<div className="flex overflow-x-auto items-stretch scrollbar-hide">
			{marqueeData.map((el, i) => (
				<div key={i} className="flex-shrink-0 h-full w-full">
					<TestimonialCard {...el} />
				</div>
			))}
		</div>
	);
};

const TestimonialCard = ({
	establishment,
	owners,
	testimony,
	stats,
}: MarqueeItem) => {
	const randomSeed = Math.floor(Math.random() * 1000);
	const moreThanOneOwner = owners.length > 1;
	return (
		<div className="bg-[#F0EEF6] rounded-[40px] h-[450px] md:h-[500px] mr-3 flex overflow-hidden">
			<div className="rounded-r-[40px] overflow-hidden aspect-[465/504]">
				<Image
					src={`https://picsum.photos/seed/${randomSeed}/426/500`}
					alt="random image"
					width={426}
					height={500}
					className="hover:scale-105 transition duration-300 object-cover h-full w-full"
				/>
			</div>
			<div className="flex flex-col justify-between md:w-[510px] p-8 gap-6 w-[450px] rounded-[32px] md:rounded-[40px]">
				{testimony && (
					<p className="text-[28px] md:text-[32px] leading-[1.2] font-medium tracking-[-.0125em]">
						&quot;{testimony}&quot;
					</p>
				)}
				{stats && (
					<div className="max-w-[250px] flex flex-col gap-6">
						{stats.map((stat, i) => (
							<div className="space-y-2" key={i}>
								<p className={cn(statBigClass)}>{stat.value}</p>
								<p className="text-[#00000085] text-sm font-medium tracking-[-.0125em] leading-[1.35]">
									{stat.description}
								</p>
							</div>
						))}
					</div>
				)}
				<div className="flex flex-col">
					<p className="text-[15px] font-medium leading[1.35]">
						{!moreThanOneOwner ? owners[0] : owners.join(" & ")}
					</p>
					<p className="text-[15px] font-medium leading[1.35] text-foreground-2">
						Owner{moreThanOneOwner && "s"}{" "}
						{!moreThanOneOwner ? "of" : "at"} {establishment}
					</p>
				</div>
			</div>
		</div>
	);
};

const h3Class =
	"font-medium text-[32px] md:text-[44px] leading-[1.1] tracking-[-.018em]";
const statBigClass = cn(h3Class, "font-semibold tracking-[-.047em]");
