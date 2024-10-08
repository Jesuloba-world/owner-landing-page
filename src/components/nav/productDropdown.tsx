import {
	Laptop,
	Smartphone,
	CalendarClock,
	MessagesSquare,
	PartyPopper,
	ShoppingBag,
	LucideIcon,
} from "lucide-react";
import Image from "next/image";
// import { Button } from "../ui/button";

export const ProductDropdown = () => {
	return (
		<div className="max-w-[1280px] mx-auto grid grid-cols-2 gap-10">
			<div className="flex flex-col gap-7">
				<p>product</p>
				<div className="grid grid-cols-2 gap-6 ">
					{products.map((el, i) => (
						<Products
							key={i}
							Icon={el.Icon}
							name={el.name}
							description={el.description}
						/>
					))}
				</div>
			</div>
			<div className="flex flex-col justify-center">
				<div className="h-[280px] w-[470px] self-end overflow-hidden relative rounded-[20px] group">
					<Image
						src={"https://picsum.photos/500/280"}
						alt={"random image"}
						height={280}
						width={470}
						className="group-hover:scale-105 transition-all duration-300 ease-in-out"
					/>
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
		<div className="flex gap-4">
			<div>
				<Icon />
			</div>
			<div className="flex flex-col gap-0.5">
				<p>{name}</p>
				<span>{description}</span>
			</div>
		</div>
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
