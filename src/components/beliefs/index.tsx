import Image from "next/image";
import { SectionWrapper } from "../sectionWrapper";
import { beliefs } from "./constants";
import { SignatureSvg } from "./signature";

export const Beliefs = () => {
	return (
		<section className="section-border bg-[#e0e0e1] lg:bg-[#f7f6f5] pb-12 md:pb-[120px] pt-20 lg:pt-[120px]">
			<SectionWrapper>
				<div className="flex flex-col lg:grid gap-x-[60px] gap-y-14 lg:gap-y-[72px] grid-rows-[auto_1fr] grid-cols-[minmax(auto,414px)_1fr] auto-cols-[1fr]">
					<div className="space-y-[18px] md:space-y-6">
						<h2 className="text-[36px] md:text-[44px] leading-[1.2] md:leading-[1.1] font-medium tracking-[-.011em] md:tracking-[-.018em]">
							3 beliefs that guide our company
						</h2>
						<p className="text-[#787a7d] text-[13px] leading-[1.35] font-medium tracking-[-.0125em]">
							Understand how we do business.
						</p>
					</div>
					<ul className="flex flex-col gap-6 row-span-2">
						{beliefs.map((el, i) => (
							<li
								key={i}
								className="flex flex-col md:grid grid-cols-[.8fr_1fr] gap-4 md:gap-[60px] pb-8 border-b border-b-[#00000014]"
							>
								<p className="text-lg leading-[1.35] font-medium tracking-[-.0125em]">
									{el.title}
								</p>
								<p className="text-[#787a7d] text-[13px] leading-[1.35] font-medium tracking-[-.0125em]">
									{el.text}
								</p>
							</li>
						))}
					</ul>
					<div className="flex pl-[14px] items-center md:items-end justify-start gap-10">
						<div className="relative">
							<div className="rounded-[10px] overflow-hidden w-[120px] -rotate-[1.5deg] hidden md:block">
								<Image
									src={"https://picsum.photos/120/152"}
									alt="random"
									width={120}
									height={152}
								/>
							</div>
							<div className="md:absolute top-[100px] -left-6 w-[138px]">
								<SignatureSvg />
							</div>
						</div>
						<p className="text-[12px] leading-[1.3] tracking-[-.016em]">
							Adam Guild <br /> Co-founder and CEO at Owner
						</p>
					</div>
				</div>
			</SectionWrapper>
		</section>
	);
};
