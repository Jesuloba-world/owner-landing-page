import { SectionWrapper } from "../sectionWrapper";
import { TestimonialSwiper } from "./swiper";

export const Testimonial1 = () => {
	return (
		<div className="pt-[200px] pb-[160px] overflow-hidden bg-[#ebeae8]">
			<SectionWrapper>
				<div className="flex flex-col overflow-hidden gap-2 w-full">
					<TestimonialSwiper />
				</div>
			</SectionWrapper>
		</div>
	);
};
