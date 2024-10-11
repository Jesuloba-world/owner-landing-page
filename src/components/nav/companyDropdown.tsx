import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { navLinkStyles } from "./productDropdown";

export const CompanyDropdown = () => {
	return (
		<div className="max-w-[1280px] mx-auto flex justify-between gap-10">
			<div className="flex flex-col  gap-4 lg:gap-7">
				<p className="text-[#a1a3a5] font-medium text-[13px] tracking-[-.015em] leading-[1.3]">
					Company
				</p>
				<ul className="flex flex-col gap-[10px] lg:gap-0 lg:-ml-4 lg:-mt-2">
					{story.map((el, i) => (
						<li key={i}>
							<Button
								variant={"ghost"}
								className="text-[20px] font-medium tracking-[-.0125em] leading-[1.2] py-2 hidden lg:flex"
							>
								{el}
							</Button>
							<Button
								className={navLinkStyles({
									className: "lg:hidden",
								})}
							>
								{el}
							</Button>
						</li>
					))}
				</ul>
			</div>
			<div className="flex-1 hidden lg:flex justify-end gap-2">
				<div className="h-[280px] w-full max-w-[470px] self-end overflow-hidden relative rounded-[20px] group cursor-pointer">
					<Image
						src={`https://picsum.photos/seed/399/500/280`}
						alt="random"
						width={470}
						height={280}
						className="group-hover:scale-105 transition-all duration-300 absolute z-[1] inset-[-2px] h-[calc(100%+4px)] w-[calc(100%+4px)]"
					/>
					<div className="absolute z-10 inset-0 flex flex-col justify-between items-start p-5 bg-gradient-to-t from-black/60 to-black/60 text-white">
						<div className="w-8 h-8 rounded-full bg-white/15 text-white/76 grid place-items-center self-end">
							<ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</div>
						<p className="text-[20px] font-medium leading-[1.2] tracking-[-.0125em]">
							Owner named to Forbes Next Billion{" "}
							<strong>‑</strong> Dollar Startups 2024
						</p>
					</div>
				</div>
				<div
					className={
						"h-[280px] w-[260px] pt-3 pr-3 pb-5 pl-5 rounded-[16px] flex flex-col justify-between text-[#ffffffeb] bg-black group cursor-pointer"
					}
				>
					<div className="w-8 h-8 rounded-full self-end bg-[#ffffff26] text-[#ffffffc2] grid place-items-center">
						<ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					</div>
					<div>
						<p className="font-medium leading-[1.35]">
							We&apos;re hiring
						</p>
						<p className="font-medium leading-[1.35] text-[#a1a3a5]">
							View our openings
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const story = ["Our story", "Careers", "Press", "Reviews", "Product releases"];
