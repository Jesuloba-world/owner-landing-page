import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SectionWrapper } from "../sectionWrapper";

export const Intro = () => {
	return (
		<section className="py-20">
			<SectionWrapper>
				<div className="flex flex-col gap-8 items-center justify-start">
					{/* Intro Head */}
					<div className="flex flex-col gap-6 text-center items-center">
						<h2 className="max-w-[560px] text-[44px] font-medium leading-[1.1] tracking-[-.018em]">
							How restaurants grow using owner
						</h2>
						<p className="max-w-[400px] text-foreground-2 text-[13px] leading-[1.3] tracking-[-.015em]">
							Owner gives you the same tools that major national
							brands use to drive sales. We learn what works for
							them, then give it to local restaurant owners.
						</p>
					</div>
					{/* Intro Items */}
					<ul className="flex gap-2 w-full justify-center">
						<li className="bg-[#f1f1f2] rounded-[32px] flex flex-col gap-[72px] justify-end py-10 px-[2%] h-[520px] text-center">
							<div className="flex-1 flex flex-col justify-center">
								<Image
									src="https://picsum.photos/seed/1/315/120"
									alt="random"
									width={315}
									height={120}
								/>
							</div>
							<div>
								<h3 className="text-lg leading-[1.35] font-medium tracking-[-.0125em]">
									Website and Online Ordering
									<br />
									<span className="text-foreground-2">
										designed to increase orders
									</span>
								</h3>
							</div>
						</li>
						<li className="bg-[#f1f1f2] rounded-[32px] flex flex-col gap-[72px] justify-end py-10 px-[2%] h-[520px] text-center">
							<div className="flex-1 flex flex-col justify-center">
								<Image
									src="https://picsum.photos/seed/2/315/120"
									alt="random"
									width={315}
									height={120}
								/>
							</div>
							<div>
								<h3 className="text-lg leading-[1.35] font-medium tracking-[-.0125em]">
									Mobile app with rewards
									<br />
									<span className="text-foreground-2">
										to help you drive repeat orders.
									</span>
								</h3>
							</div>
						</li>
						<li className="bg-[#f1f1f2] rounded-[32px] flex flex-col gap-[72px] justify-end py-10 px-[2%] h-[520px] text-center">
							<div className="flex-1 flex flex-col justify-center">
								<Image
									src="https://picsum.photos/seed/3/315/120"
									alt="random"
									width={315}
									height={120}
								/>
							</div>
							<div>
								<h3 className="text-lg leading-[1.35] font-medium tracking-[-.0125em]">
									Automated marketing
									<br />
									<span className="text-foreground-2">
										proven to drive sales
									</span>
								</h3>
							</div>
						</li>
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
