import {
	Laptop,
	Smartphone,
	CalendarClock,
	MessagesSquare,
	PartyPopper,
	ShoppingBag,
	LucideIcon,
	ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { cva } from "class-variance-authority";
// import { Button } from "../ui/button";

export const ProductDropdown = () => {
	return (
		<div className="max-w-[1280px] mx-auto flex justify-between gap-10">
			<div className="flex flex-col gap-4 lg:gap-7">
				<p className="text-[#a1a3a5] font-medium text-[13px] tracking-[-.015em] leading-[1.3]">
					Products
				</p>
				<ul className="flex flex-col lg:grid grid-cols-2 gap-3 lg:gap-6 place-items-stretch">
					{products.map((el, i) => (
						<Products
							key={i}
							Icon={el.Icon}
							name={el.name}
							description={el.description}
						/>
					))}
				</ul>
			</div>
			<div className="flex-1 hidden lg:flex flex-col justify-center">
				<div className="h-[280px] w-full max-w-[470px] self-end overflow-hidden relative rounded-[20px] group cursor-pointer">
					<Image
						src={`https://picsum.photos/seed/455/500/280`}
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
							How Talkin Tacos increased direct online sales to
							$120,000/m by using Owner.com
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const Products = ({
	description,
	name,
	Icon,
}: {
	Icon: LucideIcon;
	name: string;
	description: string;
}) => {
	return (
		// <Button variant={"ghost"} size="nothing">
		<>
			<li className="lg:block hidden max-w-[300px] h-full w-full">
				<div className="flex gap-4 rounded-[2px] p-2 cursor-pointer hover:bg-[#f1f1f2]">
					<div>
						<Icon className="h-6 w-6 text-[#787a7d]" />
					</div>
					<div className="flex flex-col gap-0.5">
						<p className="font-medium leading-[1.35]">{name}</p>
						<span className="text-[#787a7d] text-sm leading-[1.35] tracking-[-.0125em] font-medium">
							{description}
						</span>
					</div>
				</div>
			</li>
			<li className="block lg:hidden">
				<Button className={navLinkStyles({ size: "big" })}>
					{name}
				</Button>
			</li>
		</>
		// </Button>
	);
};

const products = [
	{
		Icon: Laptop,
		name: "Website builder",
		description:
			"Convert more visitors into customers using our AI-powered website",
	},
	{
		Icon: CalendarClock,
		name: "Automated Marketing",
		description:
			"Drive sales from customers with proven, automated campaigns",
	},
	{
		Icon: MessagesSquare,
		name: "Zero-Commission delivery",
		description:
			"Drive sales from customers with proven, automated campaigns",
	},
	{
		Icon: Smartphone,
		name: "Custom mobile app",
		description:
			"Drive sales from customers with proven, automated campaigns",
	},
	{
		Icon: ShoppingBag,
		name: "Online Ordering",
		description:
			"Drive sales from customers with proven, automated campaigns",
	},
	{
		Icon: PartyPopper,
		name: "Loyalty Program",
		description:
			"Drive sales from customers with proven, automated campaigns",
	},
];

export const navLinkStyles = cva(
	"text-[rgb(9,10,11)] p-0 h-fit bg-transparent hover:opacity-50 capitalize leading-[1.35] tracking-[-.0125em] shadow-none",
	{
		variants: {
			size: {
				small: "text-[15px]",
				big: "text-lg",
			},
		},
		defaultVariants: {
			size: "small",
		},
	}
);
