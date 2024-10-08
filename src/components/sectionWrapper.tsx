import { ReactNode } from "react";

export const SectionWrapper = ({ children }: { children?: ReactNode }) => {
	return (
		<div className="px-[5%]">
			<div className="w-full max-w-[1140px] mx-auto flex flex-col gap-20">
				{children}
			</div>
		</div>
	);
};
