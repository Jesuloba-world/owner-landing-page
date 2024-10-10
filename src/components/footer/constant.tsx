import { ReactNode } from "react";
import { MessageCirclePlus } from "lucide-react";

type FooterElementType = {
	products: (string | ReactNode)[];
	resources: string[];
	compare: string[];
	company: string[];
	support: string[];
};

export const footerElements: FooterElementType = {
	products: [
		"Restaurant Website",
		"Online Ordering",
		"Custom mobile app",
		"Zero-Commission delivery",
		"Loyalty Program",
		"Automated Marketing",
		<>
			<MessageCirclePlus className="mr-2 h-4 w-4" />
			See What&apos;s New
		</>,
	],
	resources: [
		"case studies",
		"compare owner",
		"restaurant marketing guide",
		"SEO for restuarants",
		"restaurants email marketing",
		"restaurant mobile app",
		"online ordering systems",
		"restaurant website builders",
		"best restaurant websites",
	],
	compare: [
		"BentoBox",
		"ChowNow",
		"Clover",
		"DoorDash",
		"Grubhub",
		"Menufy",
		"Popmenu",
		"Slice",
		"SpotHopper",
		"Square",
		"Toast",
		"Uber Eats",
	],
	company: ["About", "Careers", "Press"],
	support: ["(510) 630-2397", "support@owner.com"],
};
