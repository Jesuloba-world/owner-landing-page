import { SectionWrapper } from "../sectionWrapper";
import { Testimonial2Swiper } from "./swiper";

export const Testimonial2 = () => {
	return (
		<section className="py-20 md:pt-[120px] lg:pt-[200px] md:pb-[100px] lg:pb-[120px] bg-[#f1f1f2]">
			<SectionWrapper>
				<div className="flex flex-col gap-4">
					<Testimonial2Swiper />
				</div>
			</SectionWrapper>
		</section>
	);
};
