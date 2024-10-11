import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { FiveStar } from "./fiveStar";

export const ReviewBox = () => {
	return (
		<div className="gap-4 bg-white rounded-2xl flex flex-col p-5 pr-8">
			<div className="w-[75px]">
				<FiveStar />
			</div>
			<p className="text-base md:text-[15px] leading-[1.45] tracking-[-.02em] font-medium">
				The branded website and Online ordering platform is perfect for
				our guest and growing my business.
			</p>
			<div className="flex items-center gap-2">
				<Avatar className="w-6 h-6 rounded-full">
					<AvatarImage src="https://i.pravatar.cc/300" />
					<AvatarFallback>SF</AvatarFallback>
				</Avatar>
				<p className="text-[13px] leading-[1.3] tracking-[-.015em]">
					Steven F
				</p>
			</div>
		</div>
	);
};
