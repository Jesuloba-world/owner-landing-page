import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Capterra } from "./capterra";
import { G2 } from "./g2";
import { ReviewBox } from "./reviewBox";
import { SectionWrapper } from "../sectionWrapper";

export const Reviews = () => {
	return (
		<section className="flex flex-col py-[100px] md:py-[160px] bg-gradient-to-b from-white to-[#ebeae8] overflow-hidden md:overflow-auto">
			<SectionWrapper>
				<div className="flex flex-col items-center justify-start gap-16">
					<div className="flex flex-col max-w-[600px] items-center justify-start text-center gap-6">
						<h4 className="font-medium leading-[1.2] tracking-[-0.011em] text-[36px] md:leading-[1.1] md:tracking-[-0.018em] md:text-[44px]">
							See why we&apos;re rated #1 in restaurant tech
						</h4>
						<ul className="flex items-center justify-center gap-2">
							<li className="flex font-medium p-2 pr-3 max-w-[182px] rounded-xl items-center text-left gap-2.5 bg-secondary">
								<div className="h-10 w-10">
									<Capterra />
								</div>
								<p className="text-xs leading-[1.3] tracking-[-.016em]">
									Rated #1 Restaurant Marketing Software
								</p>
							</li>
							<li className="flex font-medium p-2 pr-3 max-w-[182px] rounded-xl items-center text-left gap-2.5 bg-secondary">
								<div className="h-10 w-10 grid place-items-center">
									<G2 />
								</div>
								<p className="text-xs leading-[1.3] tracking-[-.016em]">
									Leader Position Summer 2024
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-col items-center self-center">
					<div className="flex pt-10 -mb-6 w-max md:w-full gap-2">
						<div className="flex flex-col gap-2 flex-1 max-w-[334px] [mask-image:linear-gradient(to_bottom,black_60%,transparent_90%)]">
							<ReviewBox />
							<ReviewBox />
							<ReviewBox />
						</div>
						<div className="flex flex-col gap-2 flex-1 max-w-[334px] [mask-image:linear-gradient(to_bottom,black_60%,transparent_90%)] -mt-10">
							<ReviewBox />
							<ReviewBox />
							<ReviewBox />
						</div>
						<div className="flex flex-col gap-2 flex-1 max-w-[334px] [mask-image:linear-gradient(to_bottom,black_60%,transparent_90%)]">
							<ReviewBox />
							<ReviewBox />
							<ReviewBox />
						</div>
					</div>
					<Button className="group">
						See more reviews
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
