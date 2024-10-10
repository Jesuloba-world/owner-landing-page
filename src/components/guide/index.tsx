import Image from "next/image";
import { SectionWrapper } from "../sectionWrapper";
import { Button } from "../ui/button";
import { useMemo } from "react";
import { VideoPlay } from "@/assets/play";

export const Guide = () => {
	return (
		<section className="bg-[#f7f5f2] py-[160px]">
			<SectionWrapper>
				<div className="flex flex-col gap-10">
					<div className="flex items-center justify-between gap-6">
						<h2 className="max-w-[560px] text-[44px] font-medium leading-[1.1] tracking-[-.018em]">
							See our free guides on growing your restaurant
						</h2>
						<Button morphArrow>See more guides</Button>
					</div>
					<div className="flex gap-2">
						<Guidecard
							text="3 Best Restaurant Marketing Ideas For 2024 (with AI Strategies)"
							isVideo
						/>
						<Guidecard text="Restaurant SEO is Easier Than You Think (3 Big Wins)" />
						<Guidecard text="Buyer's Guide: The Best Restaurant Website Builders" />
					</div>
				</div>
			</SectionWrapper>
		</section>
	);
};

const Guidecard = ({ text, isVideo }: { text: string; isVideo?: boolean }) => {
	const randomSeed = useMemo(() => Math.floor(Math.random() * 1000), []);
	return (
		<div className="flex-1 flex items-start flex-col justify-end rounded-[32px] overflow-hidden group relative aspect-[370/447]">
			<Image
				src={`https://picsum.photos/seed/${randomSeed}/370/447`}
				alt="random"
				width={370}
				height={447}
				className="group-hover:scale-110 transition-all duration-300 absolute z-[1] inset-[-2px] h-[calc(100%+4px)] w-[calc(100%+4px)]"
			/>
			<div className="relative z-[2] bg-gradient-to-b from-transparent to-black/60 flex items-end justify-between p-8 overflow-hidden gap-[15%]">
				<p className="text-lg font-medium leading-[1.35] tracking-[-.0125em] text-white">
					{text}
				</p>
				{isVideo && (
					<div className="shrink-0 aspect-square w-10 grid place-items-center bg-white rounded-full">
						<div className="w-6 aspect-square">
							<VideoPlay />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
