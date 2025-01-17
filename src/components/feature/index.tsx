import Image from "next/image";
import { SectionWrapper } from "../sectionWrapper";
import { Button } from "../ui/button";
import { PiggyBank, BadgeCheck, CarFront } from "lucide-react";

export const Feature = () => {
	return (
		<section className="section-border bg-white pb-16 overflow-hidden pt-[50px] md:pb-[120px] lg:py-[120px]">
			<SectionWrapper>
				<div className="flex items-center justify-between flex-col lg:flex-row gap-8 lg:gap-10">
					<div className="flex items-start justify-start flex-col gap-8 w-full lg:w-auto lg:gap-20">
						<div className="flex items-start justify-start flex-col gap-4 lg:gap-6">
							<h2 className="w-full max-w-none lg:max-w-[560px] text-[36px] md:text-[44px] leading-[1.2] md:leading-[1.1] font-medium tracking-[-.011em] md:tracking-[-.018em]">
								Delivery without the unfair commissions
							</h2>
							<Button morphArrow>Learn more</Button>
						</div>
						<ul className="flex w-screen max-w-none lg:max-w-[330px] flex-row lg:flex-col items-start justify-start gap-6 scrollbar-hide -ml-[5vw] lg:ml-0 pl-[5vw] lg:pl-0 overflow-auto">
							{features.map((el, i) => (
								<li
									key={i}
									className="flex gap-4 w-[320px] flex-shrink-0 lg:w-auto"
								>
									<div className="bg-[#00000014] w-8 h-8 rounded-full flex items-center justify-center">
										<el.Icon className="h-4 w-4" />
									</div>
									<p className="text-lg leading-[1.35] font-medium tracking-[-.0125em]">
										{el.title}
										<span className="text-[#a1a3a5]">
											{el.text}
										</span>
									</p>
								</li>
							))}
						</ul>
					</div>
					<div className="overflow-hidden relative bg-[#f1f1f2] rounded-[32px] lg:w-1/2 w-full max-w-none lg:max-w-[530px] flex items-center justify-center aspect-[534/624]">
						<Image
							src={"https://picsum.photos/265/345"}
							alt={"random"}
							width={265}
							height={345}
							className="rounded-2xl "
						/>
					</div>
				</div>
			</SectionWrapper>
		</section>
	);
};

const features = [
	{
		Icon: PiggyBank,
		title: "Flat delivery fees.",
		text: "Pay a simple flat fee for delivery.",
	},
	{
		Icon: BadgeCheck,
		title: "4.5+ star drivers.",
		text: "We only send you top-rated DoorDash and Uber Eats drivers.",
	},
	{
		Icon: CarFront,
		title: "Control who delivers.",
		text: "Use third-party drivers, your own drivers, or both.",
	},
];
