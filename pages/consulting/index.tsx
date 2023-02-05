import { ConsultNavTitle } from "@/components/Navbar";
import UnderConstruction1 from "../underconstruction1";
import Footer from "@/components/Footer";
import ConsultingHero  from "@/components/Hero";
import ConsultingSection from "./consultingsection";

const Consulting = () => {
	return (

		<div>
			<div>
				<ConsultNavTitle />
			</div>
				
				<div>

				<ConsultingHero/>

				</div>

				<div>
					< ConsultingSection/>
				</div>

			<div>
				{/* <UnderConstruction1 /> */}
			</div>

			<div className="bg-dark mt-5 pt-5">
				<Footer />
			
			</div>
		</div>
	);
};

export default Consulting;


