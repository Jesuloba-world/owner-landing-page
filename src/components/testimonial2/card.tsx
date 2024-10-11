import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import { useMemo } from "react";

export const Testimonial2Card = ({
	owners,
	testimony,
	stats,
}: {
	owners: string[];
	establishment: string;
	testimony: string;
	stats: {
		value: string;
		description: string;
	}[];
}) => {
	const randomSeed = useMemo(() => Math.floor(Math.random() * 400), []);

	return (
		<div className="bg-white rounded-[32px] w-full flex flex-col lg:flex-row">
			<div className="w-full lg:w-[406px] h-[447px] overflow-hidden shrink-0 rounded-[32px] aspect-[370/307] lg:aspect-[406/447]">
				<Image
					src={`https://picsum.photos/seed/${randomSeed}/406/447`}
					alt="random"
					width={406}
					height={447}
					className="hover:scale-105 transition duration-300 w-full h-full object-cover"
				/>
			</div>
			<div className="flex flex-col justify-between p-10 pt-8 rounded-b-[32px] lg:rounded-r-[32px] bg-white gap-8 lg:gap-12">
				<p className="text-[32px] md:text-[36px] leading-[1.2] font-medium tracking-[-.01em]">
					&quot;{testimony}&quot;
				</p>
				<div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-4 flex-wrap">
					<div className="flex gap-6 order-1 lg:order-none">
						{stats.map((stat, i) => (
							<div className="md:space-y-2" key={i}>
								<p className={cn(statBigClass)}>{stat.value}</p>
								<p className="text-[#6c6f75] text-sm font-medium tracking-[-.018em] md:tracking-[-.0125em] leading-[1.35]">
									{stat.description}
								</p>
							</div>
						))}
					</div>
					<Button variant={"secondary"} morphArrow>
						See {owners[0].split(" ")[0]}&apos;s story
					</Button>
				</div>
			</div>
		</div>
	);
};

const h3Class = "font-medium md:text-[32px] leading-[1.1] tracking-[-.018em]";
const statBigClass = cn(h3Class, "text-lg font-semibold tracking-[-.047em]");
