type Stat = {
	value: string;
	description: string;
};

export type MarqueeItem = {
	owners: string[];
	establishment: string;
	testimony?: string;
	stats?: Stat[];
};

export const marqueeData: MarqueeItem[] = [
	{
		owners: ["John", "Sam"],
		establishment: "Metro Pizza",
		testimony:
			"Owner is a must-have for succeeding online as an independent restaurant today.",
	},
	{
		owners: ["Sandy Sei"],
		establishment: "Cyclo Noodles",
		stats: [
			{
				value: "+$104,000",
				description: "Sales growth after switching to Owner",
			},
			{
				value: "$31,000",
				description: "Savings in third-party fees",
			},
		],
	},
	{
		owners: ["Phillip Hang"],
		establishment: "Sushi Me Roll'n",
		testimony:
			"Now that we’ve used Owner for 1 year, I can say confidently that it is the best technology in our restaurant.",
	},
	{
		owners: ["Mo", "Omar"],
		establishment: "Talkin Tacos",
		stats: [
			{
				value: "+$2,000,000",
				description: "In direct online sales",
			},
			{
				value: "+970%",
				description: "Growth",
			},
			{
				value: "$435,000",
				description: "Savings",
			},
		],
	},
];
