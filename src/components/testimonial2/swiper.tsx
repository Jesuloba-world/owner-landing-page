"use client";

import { Testimonial2Card } from "./card";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { testimonials } from "./constants";
import { useState, useEffect } from "react";
import { Autoplay } from "swiper/modules";
import { cn } from "@/lib/utils";

export const Testimonial2Swiper = () => {
	const [swiper, setSwiper] = useState<SwiperCore | null>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		let intervalId: NodeJS.Timeout;
		setProgress(0);

		if (swiper) {
			intervalId = setInterval(() => {
				setProgress((prev) => {
					if (prev >= 100) {
						clearInterval(intervalId);
						return 100;
					}
					return prev + 1;
				});
			}, 30);
		}
		return () => clearInterval(intervalId);
	}, [swiper, activeIndex]);

	return (
		<>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				className="w-full h-full"
				loop={true}
				modules={[Autoplay]}
				autoplay={{
					delay: 3000,
					disableOnInteraction: true,
				}}
				onSwiper={(swipercontrol) => setSwiper(swipercontrol)}
				onSlideChange={(swiper) => {
					setActiveIndex(swiper.realIndex);
					setProgress(0);
				}}
			>
				{testimonials.map((el, i) => (
					<SwiperSlide key={i}>
						<Testimonial2Card {...el} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className="flex items-center justify-center gap-[5px]">
				{testimonials.map((_, i) => (
					<div
						key={i}
						className={cn(
							"rounded-full w-1.5 h-1.5 transition-all bg-[#00000014] duration-[30ms] relative overflow-hidden cursor-pointer",
							{ "w-10": activeIndex === i }
						)}
						onClick={() => swiper?.slideTo(i)}
					>
						<div
							className={cn(
								"absolute inset-0 transition-transform duration-[30ms] ease-linear origin-left rounded-full",
								{ "bg-primary": activeIndex === i }
							)}
							style={{
								transform:
									activeIndex === i
										? `scaleX(${progress / 100})`
										: "scaleX(1)",
							}}
						/>
					</div>
				))}
			</div>
		</>
	);
};
