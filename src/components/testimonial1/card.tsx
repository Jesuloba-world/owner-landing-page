import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import { useMemo } from "react";

export const TestimonialCard = ({
	owners,
	establishment,
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
	const moreThanOneOwner = owners.length > 1;
	const randomSeed = useMemo(() => Math.floor(Math.random() * 1000), []);
	return (
		<div className="p-2.5 pb-10 md:p-8 md:pt-10 flex flex-col md:grid w-full grid-cols-[auto_1fr] grid-rows-[auto_auto] rounded-[32px] bg-white gap-4 md:gap-10">
			<div className="col-span-2 flex items-center justify-between mt-2 md:mt-0 px-2 md:px-0 md:pr-6 w-full">
				<div>
					{/* Owner Names(s) */}
					<h3 className={cn(h3Class)}>
						{!moreThanOneOwner ? owners[0] : owners.join(" & ")}
					</h3>
					{/* Owner of/at [Restaurant/Organization] */}
					<h3 className={cn(h3Class)}>
						Owner{moreThanOneOwner && "s"}{" "}
						{!moreThanOneOwner ? "of" : "at"} {establishment}
					</h3>
				</div>
				<Button morphArrow className="hidden lg:flex">
					See all reviews
				</Button>
			</div>
			<div className="flex flex-col gap-12 md:gap-6 px-2 md:px-0 justify-start md:justify-between col-span-1">
				<div className=" md:max-w-[290px] gap-6 lg:gap-0 flex flex-col items-start justify-start">
					<p className="text-[#6c6f75] font-medium leading-[1.35]">
						&quot;{testimony}&quot;
					</p>
					<Button morphArrow className="flex lg:hidden">
						See all reviews
					</Button>
				</div>
				<div className="w-full md:max-w-[250px] flex flex-1 md:flex-none flex-row md:flex-col gap-6">
					{stats.map((stat, i) => (
						<div className="md:space-y-2" key={i}>
							<p className={cn(statBigClass)}>{stat.value}</p>
							<p className="text-[#6c6f75] text-sm font-medium tracking-[-.0125em] leading-[1.35]">
								{stat.description}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className="h-[470px] place-self-end rounded-[32px] overflow-hidden -order-1 md:order-none w-full lg:w-[700px]">
				<Image
					src={`https://picsum.photos/seed/${randomSeed}/700/470`}
					alt="random"
					height={470}
					width={700}
					className="hover:scale-110 transition duration-300 h-full object-cover"
				/>
			</div>
		</div>
	);
};

const h3Class =
	"font-medium text-[28px] md:text-[44px] leading-[1.2] tracking-[-.011em] md:leading-[1.1] md:tracking-[-.018em]";
const statBigClass = cn(
	h3Class,
	"font-semibold text-[32px] tracking-[-.047em]"
);
