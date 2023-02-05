import { ContactNavTitle, EntrepreneurNavTitle } from "@/components/Navbar";
import UnderConstruction1 from "./underconstruction1";
import Footer from "@/components/Footer";
import { EnterpreneurpageHero } from "@/components/Hero";
import Enterpreneur from "../components/enterpreneurbody";




const Entrepreneurship = () => {
	return (
		<div>
			<div>
				<EntrepreneurNavTitle />
			</div>

			{/* <div>
				<UnderConstruction1 />
			</div> */}

			<div>
				<EnterpreneurpageHero/>
			</div>
			<div className="mb-5 pb-5 bg-black">

			<Enterpreneur/>
				</div>

			

			
			<div className="bg-dark mt-5 pt-5">
				
				
				<Footer />
			</div>
			
		</div>
	);
};

export default Entrepreneurship;
