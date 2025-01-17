import { Beliefs } from "@/components/beliefs";
import { Feature } from "@/components/feature";
import { Footer } from "@/components/footer";
import { Guide } from "@/components/guide";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/Intro";
import Nav from "@/components/nav";
import { Reviews } from "@/components/reviews";
import { Tech } from "@/components/tech";
import { Testimonial1 } from "@/components/testimonial1";
import { Testimonial2 } from "@/components/testimonial2";

export default function Home() {
	return (
		<>
			<Nav />
			<main>
				<Hero />
				<Intro />
				<Reviews />
				<Tech />
				<Testimonial1 />
				<Feature />
				<Testimonial2 />
				<Beliefs />
				<Guide />
			</main>
			<Footer />
		</>
	);
}
