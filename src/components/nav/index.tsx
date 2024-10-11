import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { DropdownWrapper } from "./dropdown";
import { ProductDropdown } from "./productDropdown";
import { CompanyDropdown } from "./companyDropdown";
import { ResourcesDropdown } from "./resourcesDropdown";
import { MobileNav } from "./mobileNav";

const Nav = () => {
	return (
		<>
			{/* <div className="h-28" /> */}
			<div className="h-16 lg:h-20 px-[5%] lg:px-12 fixed top-0 left-0 w-screen bg-white z-50">
				<div className="flex items-center gap-12 max-w-[1418px] mx-auto w-full h-full justify-between lg:justify-start">
					<div>
						<Link href="/">
							<Image src={Logo} alt={"logo"} />
						</Link>
					</div>
					<NavigationMenu className="mr-auto hidden lg:block">
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									Product
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<DropdownWrapper>
										<ProductDropdown />
									</DropdownWrapper>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/docs" legacyBehavior passHref>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
									>
										Pricing
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/docs" legacyBehavior passHref>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
									>
										How it works
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									Company
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<DropdownWrapper>
										<CompanyDropdown />
									</DropdownWrapper>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									Resources
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<DropdownWrapper>
										<ResourcesDropdown />
									</DropdownWrapper>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>

					<div className="flex gap-2 md:gap-4 items-center">
						<Button
							variant={"nothing"}
							size={"link"}
							className="hover:opacity-60"
						>
							<Link href="/login">Login</Link>
						</Button>
						<Button variant="default">Get a free demo</Button>
						<MobileNav />
					</div>
				</div>
			</div>
			{/* <CompanyDropdown /> */}
		</>
	);
};

export default Nav;

{
	/* <Button
						variant={"ghost"}
						size={"nav"}
						className="font-medium text-[13px]"
					>
						Product
					</Button>
					<div className="absolute w-[calc(100%-24px)] top-full left-1/2 transform -translate-x-1/2 bg-orange-800 h-48">
						Extra
					</div>
					<Button
						variant={"ghost"}
						size={"nav"}
						className="font-medium text-[13px]"
					>
						Pricing
					</Button>
					<Button
						variant={"ghost"}
						size={"nav"}
						className="font-medium text-[13px]"
					>
						How it works
					</Button>
					<Button
						variant={"ghost"}
						size={"nav"}
						className="font-medium text-[13px]"
					>
						Company
					</Button>
					<div className="absolute w-[calc(100%-24px)] top-full left-1/2 transform -translate-x-1/2 bg-orange-800 h-48">
						Extra
					</div>
					<Button
						variant={"ghost"}
						size={"nav"}
						className="font-medium text-[13px]"
					>
						Resources
					</Button> */
}
