"use client";

import { TestimonialCard } from "./card";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { testimonials } from "./constants";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

import "swiper/css";

export const TestimonialSwiper = () => {
	const [swiper, setSwiper] = useState<SwiperCore | null>(null);
	const [, setActiveIndex] = useState(0);

	const getAdjacentSlides = () => {
		if (!swiper) return { prev: null, next: null };
		const prev =
			swiper.realIndex - 1 < 0
				? testimonials.length - 1
				: swiper.realIndex - 1;
		const next = (swiper.realIndex + 1) % testimonials.length;
		return {
			prev: testimonials[prev],
			next: testimonials[next],
		};
	};

	const { prev, next } = getAdjacentSlides();

	return (
		<>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				className="w-full h-full"
				loop={true}
				onSwiper={(swipercontrol) => setSwiper(swipercontrol)}
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
			>
				{testimonials.map((el, i) => (
					<SwiperSlide key={i}>
						<TestimonialCard {...el} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className="py-5 px-16 flex items-center justify-center md:justify-between">
				<Button
					variant={"nothing"}
					size={"nothing"}
					className="p-[6px] pl-4 gap-2 group"
					onClick={() => swiper?.slidePrev()}
				>
					<div className="bg-[#00000014] rounded-full w-8 h-8 flex items-center justify-center">
						<ArrowLeft className="w-4 h-4 text-secondary-foreground transition-transform duration-500 group-hover:-translate-x-1" />
					</div>
					<p className="text-[15px] font-medium leading-[1.45] tracking-[-.02em] hidden md:block">
						<span className="text-[#787a7d]">Previous</span>{" "}
						{prev?.establishment}
					</p>
				</Button>
				<Button
					variant={"nothing"}
					size={"nothing"}
					className="p-[6px] pl-4 gap-2 group"
					onClick={() => swiper?.slideNext()}
				>
					<p className="text-[15px] font-medium leading-[1.45] tracking-[-.02em] hidden md:block">
						<span className="text-[#787a7d]">Next</span>{" "}
						{next?.establishment}
					</p>
					<div className="bg-[#00000014] rounded-full w-8 h-8 flex items-center justify-center">
						<ArrowRight className="w-4 h-4 text-secondary-foreground transition-transform duration-500 group-hover:translate-x-1" />
					</div>
				</Button>
			</div>
		</>
	);
};
