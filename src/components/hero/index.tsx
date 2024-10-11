import { Button } from "../ui/button";
import { TestimonialMarquee } from "./testimonialMarquee";

export const Hero = () => {
	return (
		<section className="pt-[116px] md:pt-[22vh] pb-20 overflow-hidden">
			<div className="px-[5%]">
				<div className="w-full max-w-[1416px] mx-auto flex flex-col gap-[60px] md:gap-20">
					<div className="flex justify-start items-end flex-wrap gap-8">
						<div className="max-w-[800px]">
							<h1 className="text-[44px] md:text-[72px] font-medium leading-[1.1] md:leading-[1.03] tracking-[-.018em] md:tracking-[-.027em]">
								Making online growth easy for restaurants
							</h1>
						</div>
						<div className="max-w-[430px] w-full space-y-7">
							<p className="font-medium leading-[1.35] text-foreground-2">
								Thousands of restaurant owners use Owner.com to
								succeed online. Grow your sales with a great
								online experience – just like Domino&apos;s and
								Chipotle.
							</p>
							<div className="flex gap-4 flex-wrap">
								<Button morphArrow>Get a free demo</Button>
								<Button variant={"secondary"} morphArrow>
									How owner works
								</Button>
							</div>
						</div>
					</div>
					<TestimonialMarquee />
				</div>
			</div>
		</section>
	);
};
