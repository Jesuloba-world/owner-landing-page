"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Hamburger } from "./hamburger";
import { useState } from "react";
import { ProductDropdown } from "./productDropdown";
import { CompanyDropdown } from "./companyDropdown";
import { ResourcesDropdown } from "./resourcesDropdown";

export const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Drawer open={isOpen} onOpenChange={setIsOpen} direction="top">
			<DrawerTrigger asChild>
				<Button variant={"nothing"} className="flex lg:hidden p-0">
					<Hamburger isOpen={isOpen} />
				</Button>
			</DrawerTrigger>
			<DrawerContent className="h-[calc(100%-64px)] top-16 rounded-none after:hidden mt-0">
				<div className="px-[5%] flex flex-col items-start justify-start">
					<Button
						variant={"nothing"}
						size={"nothing"}
						className="shadow-none text-lg font-medium leading-[1.4] rounded-[2px] py-2"
					>
						Pricing
					</Button>
					<Button
						variant={"nothing"}
						size={"nothing"}
						className="shadow-none text-lg font-medium leading-[1.4] rounded-[2px] py-2"
					>
						How it works
					</Button>
					<div className="space-y-8">
						<ProductDropdown />
						<CompanyDropdown />
						<ResourcesDropdown />
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	);
};
