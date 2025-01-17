import { cn } from "@/lib/utils";
import Image from "next/image";
import { SectionWrapper } from "../sectionWrapper";

export const Tech = () => {
	return (
		<section className="section-border bg-white pt-20 pb-8 md:py-[120px]">
			<SectionWrapper>
				<div className="flex flex-col items-center text-center gap-12">
					<div className="max-w-none md:max-w-[560px] w-full">
						<h2 className="font-medium text-[36px] leading-[1.2] tracking-[-.011em] md:text-[42px] md:leading-[1.1] md:tracking-[-.018em]">
							Growing sales is easy when you use Owner
						</h2>
					</div>
					<div className="flex flex-col md:grid w-full grid-cols-2 gap-3 grid-rows-[560px_520px]">
						<div
							className={cn(
								techClassname,
								"bg-[url('https://picsum.photos/1140/560')] bg-normal col-span-2 flex flex-col aspect-[373/490] md:aspect-auto items-center md:items-end justify-end"
							)}
						>
							<div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)]"></div>
							<p className="z-[2] max-w-[460px] text-lg font-medium tracking-[-.0125em] leading-[1.35] text-center md:text-right">
								We make it easy for your customers to re-order
								by giving your restaurant its own{" "}
								<span className="text-[#ffffffeb]">
									mobile app.
								</span>
							</p>
						</div>
						<div
							className={cn(
								techClassname,
								"bg-[url('https://picsum.photos/564/520')] bg-normal aspect-[373/490] md:aspect-auto justify-end"
							)}
						>
							<div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)]"></div>
							<div className="flex items-center justify-center h-48 md:h-full my-auto bg-white/40 rounded-[30px] relative">
								<Image
									src="https://picsum.photos/350/100"
									alt={"random"}
									height={100}
									width={350}
								/>
							</div>
							<p className="w-full z-[2] text-lg font-medium tracking-[-.0125em] leading-[1.35]">
								Your website should be your top source of new
								customers. We use AI to grow your website’s
								Google rankings.
							</p>
						</div>
						<div
							className={cn(
								techClassname,
								"bg-[#f4ece0] aspect-[373/490] md:aspect-auto py-8 px-6 md:p-10"
							)}
						>
							<div className="flex items-center justify-center h-full">
								<Image
									src="https://picsum.photos/350/100"
									alt={"random"}
									height={100}
									width={350}
								/>
							</div>
							<p className="w-4/5 z-[2] text-lg font-medium tracking-[-.0125em] leading-[1.35] text-[#787a7d] mx-auto">
								Customers order directly if it&apos;s familiar &
								easy. So that&apos;s how we build your online
								ordering.
							</p>
						</div>
					</div>
				</div>
			</SectionWrapper>
		</section>
	);
};

const techClassname =
	"flex flex-col justify-between gap-8 text-center rounded-[40px] w-full overflow-hidden p-10 relative text-[#ffffff85]";
