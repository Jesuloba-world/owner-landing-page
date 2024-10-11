import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SectionWrapper } from "../sectionWrapper";
import { useMemo } from "react";

export const Intro = () => {
	return (
		<section className="py-16 md:py-20">
			<SectionWrapper>
				<div className="flex flex-col gap-6 md:gap-8 items-start justify-start md:items-center md:justify-start">
					{/* Intro Head */}
					<div className="flex flex-col gap-5 max-w-[400px] md:max-w-none md:gap-6 text-left md:text-center items-center">
						<h2 className="w-full max-w-none md:max-w-[560px] text-[36px] md:text-[44px] font-medium leading-[1.2] tracking-[-.011em] md:leading-[1.1] md:tracking-[-.018em]">
							How restaurants grow using owner
						</h2>
						<p className="w-full max-w-none md:max-w-[400px] text-foreground-2 text-[13px] leading-[1.3] tracking-[-.015em]">
							Owner gives you the same tools that major national
							brands use to drive sales. We learn what works for
							them, then give it to local restaurant owners.
						</p>
					</div>
					{/* Intro Items */}
					<ul className="flex gap-2 w-full justify-center mt-4 md:mt-0 flex-col md:flex-row order-1 md:order-none">
						{introText.map((el, i) => (
							<IntroItem key={i} {...el} />
						))}
					</ul>

					<Button variant={"secondary"} className="group">
						See how it works
						<span className="relative w-5 h-5 ml-2">
							<ChevronRight className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0" />
							<ArrowRight className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" />
						</span>
					</Button>
				</div>
			</SectionWrapper>
		</section>
	);
};

const IntroItem = ({ bottom, top }: { top: string; bottom: string }) => {
	const randomSeed = useMemo(() => Math.floor(Math.random() * 1000), []);
	return (
		<li className="bg-[#f1f1f2] rounded-[32px] flex flex-col gap-12 md:gap-[72px] justify-end py-12 md:py-10 px-[2%] h-[520px] text-center">
			<div className="flex-none w-full md:w-auto md:flex-1 flex flex-col justify-center my-auto md:my-0">
				<Image
					src={`https://picsum.photos/seed/${randomSeed}/315/120`}
					alt="random"
					width={315}
					height={120}
					className="w-full h-auto object-cover"
				/>
			</div>
			<div>
				<h3 className="text-lg leading-[1.35] font-medium tracking-[-.0125em]">
					{top}
					<br />
					<span className="text-foreground-2">{bottom}</span>
				</h3>
			</div>
		</li>
	);
};

const introText = [
	{
		top: "Website and Online Ordering",
		bottom: "designed to increase orders",
	},
	{
		top: "Mobile app with rewards",
		bottom: "to help you drive repeat orders.",
	},
	{
		top: "Automated marketing",
		bottom: "proven to drive sales",
	},
];
