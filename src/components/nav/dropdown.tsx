import { ReactNode } from "react";

export const DropdownWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<div className="pt-16 pb-20 px-12 w-[calc(100vw-16px)]">{children}</div>
	);
};
