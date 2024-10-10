import { cva } from "class-variance-authority";
import { Button } from "../ui/button";
import { footerElements } from "./constant";

export const Columns = () => {
	return (
		<div className="flex flex-wrap justify-start gap-x-[5%] gap-y-20">
			<div className={footerColumnStyles()}>
				<p className={footerColumnHead()}>products</p>
				<ul
					className={footerColumnList({
						main: true,
					})}
				>
					{footerElements.products.map((el, i) => (
						<li key={i}>
							<Button
								className={footerLinkStyles({ size: "big" })}
							>
								{el}
							</Button>
						</li>
					))}
				</ul>
			</div>
			<div className={footerColumnStyles()}>
				<p className={footerColumnHead()}>resources</p>
				<ul className={footerColumnList()}>
					{footerElements.resources.map((el, i) => (
						<li key={i}>
							<Button className={footerLinkStyles()}>{el}</Button>
						</li>
					))}
				</ul>
			</div>
			<div className={footerColumnStyles()}>
				<p className={footerColumnHead()}>compare</p>
				<ul
					className={footerColumnList({
						grid: true,
					})}
				>
					{footerElements.compare.map((el, i) => (
						<li key={i}>
							<Button className={footerLinkStyles()}>{el}</Button>
						</li>
					))}
				</ul>
			</div>
			<div className={footerColumnStyles()}>
				<p className={footerColumnHead()}>company</p>
				<ul className={footerColumnList()}>
					{footerElements.company.map((el, i) => (
						<li key={i}>
							<Button className={footerLinkStyles()}>{el}</Button>
						</li>
					))}
				</ul>
			</div>
			<div className={footerColumnStyles()}>
				<p className={footerColumnHead()}>support</p>
				<ul className={footerColumnList()}>
					{footerElements.support.map((el, i) => (
						<li key={i}>
							<Button
								className={footerLinkStyles({
									className: "normal-case",
								})}
							>
								{el}
							</Button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

const footerColumnStyles = cva("flex flex-col gap-4");

const footerColumnHead = cva(
	"text-[#787a7d] text-[11px] leading-[1.25] tracking-[.09em] uppercase"
);

const footerColumnList = cva("flex flex-col gap-3", {
	variants: {
		main: {
			true: "text-white",
			false: "",
		},
		grid: {
			true: "grid place-items-start grid-rows-[auto_auto_auto_auto] grid-flow-col gap-y-2.5 gap-x-[42px]",
			false: "",
		},
	},
	defaultVariants: {
		main: false,
		grid: false,
	},
});

const footerLinkStyles = cva(
	"p-0 h-fit bg-transparent capitalize hover:bg-transparent leading-[1.35] tracking-[-.0125em]",
	{
		variants: {
			size: {
				small: "text-[#a1a3a5] hover:text-white text-sm",
				big: "text-lg hover:opacity-50",
			},
		},
		defaultVariants: {
			size: "small",
		},
	}
);
