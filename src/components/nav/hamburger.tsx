import { cn } from "@/lib/utils";

export const Hamburger = ({ isOpen }: { isOpen?: boolean }) => {
	return (
		<div
			className={cn("size-10", isOpen && "text-[#090a0b]")}
			style={{ WebkitUserSelect: "text" }}
			aria-label="menu"
			role="button"
			tabIndex={0}
			aria-controls="w-nav-overlay-0"
			aria-haspopup="menu"
			aria-expanded={isOpen}
		>
			<div className="flex flex-col items-center justify-center w-full h-full gap-[5px]">
				<div
					className="w-[18px] h-0.5 bg-current _1"
					style={{
						transform: isOpen
							? "translate3d(0px, 4px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)"
							: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
						transformStyle: "preserve-3d",
						transition: "transform 0.2s ease-in-out",
					}}
				></div>
				<div
					className="w-[18px] h-0.5 bg-current _2"
					style={{
						transform: isOpen
							? "translate3d(0px, -3px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)"
							: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
						transformStyle: "preserve-3d",
						transition: "transform 0.2s ease-in-out",
					}}
				></div>
			</div>
		</div>
	);
};
