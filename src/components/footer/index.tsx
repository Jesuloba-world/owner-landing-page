import { LogoWhite } from "@/assets/logo-white";
import { Button } from "../ui/button";
import { cva } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import { Columns } from "./columns";

export const Footer = () => {
	return (
		<div className="bg-gradient-to-b from-transparent via-[#090a0b]/[0.53] to-[#090a0b]">
			<footer className="rounded-t-[48px] bg-[url('https://picsum.photos/3008/2139')] bg-normal lg:mx-1 p-1.5 pt-10 md:pt-[56px] relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)]"></div>
				{/* Real top */}
				<div className="max-w-[1418px] mx-auto relative">
					<div className="text-white max-w-[800px] pb-[216px] pl-4 md:pl-[56px] flex flex-col items-start justify-start space-y-6 md:space-y-7 lg:space-y-8">
						<h2 className="text-[44px] md:text-[64px] font-medium leading-[1.1] tracking-[-.018em] md:leading-[1.03] md:tracking-[-.031em]">
							The easiest way to grow your restaurant online.
						</h2>
						<Button morphArrow>Get a free demo</Button>
					</div>
				</div>
				<div className="bg-[#090a0b] text-white p-6 md:p-[38px] rounded-[24px]">
					<div className="max-w-[1418px] mx-auto relative">
						<div className="flex flex-col gap-[72px] md:gap-24">
							{/* row top */}
							<div className="flex flex-col lg:flex-row gap-14 md:gap-0 items-start justify-between">
								<div className="w-[120px]">
									<LogoWhite />
								</div>
								<div className="flex gap-2 w-full md:w-auto">
									<div className={footerCardStyles()}>
										<div className="w-8 h-8 rounded-full self-end bg-[#ffffff26] text-[#ffffffc2] grid place-items-center">
											<ArrowUpRight className="w-4 h-4" />
										</div>
										<p className="font-medium leading-[1.35]">
											Get a free demo
										</p>
									</div>
									<div
										className={footerCardStyles({
											bgColor: "grey",
										})}
									>
										<div className="w-8 h-8 rounded-full self-end bg-[#ffffff26] text-[#ffffffc2] grid place-items-center">
											<ArrowUpRight className="w-4 h-4" />
										</div>
										<p className="font-medium leading-[1.35]">
											See how it works
										</p>
									</div>
								</div>
							</div>
							{/* Columns */}
							<Columns />
							{/* Copyright */}
							<div className="lg:mt-8 gap-6 md:gap-0 flex flex-col-reverse md:flex-row justify-between">
								<p className="text-[#6c6f75] text-xs leading-[1.3] tracking-[-.016em]">
									2024 © Owner. All right reserved.
								</p>
								<ul className="flex gap-2.5 flex-wrap">
									{legalList.map((el, i) => (
										<li key={i}>
											<p className="cursor-pointer text-[#6c6f75] hover:text-white text-xs leading-[1.3] tracking-[-.016em]">
												{el}
											</p>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

const footerCardStyles = cva(
	"h-[160px] w-[263px] pt-3 pr-3 pb-5 pl-5 rounded-[16px] flex flex-col md:flex-none flex-1 justify-between text-[#ffffffeb]",
	{
		variants: {
			bgColor: {
				blue: "bg-[#0051f2] hover:bg-[#054bc5]",
				grey: "bg-[#ffffff14] hover:bg-[#ffffff0a]",
			},
		},
		defaultVariants: {
			bgColor: "blue",
		},
	}
);

const legalList = [
	"privacy",
	"website terms",
	"disclaimer",
	"restaurant agreement",
	"platform terms",
	"accessiblity",
];
