import Footer from "@/components/Footer";
import UnderConstruction1 from "./underconstruction1";
import { TitiNavTitle } from "@/components/Navbar";


const Meettiti = () => {
	return (
		<div>
			<div>
				<TitiNavTitle />
			</div>

			<div>
				<UnderConstruction1 />
			</div>
			
			<div className="bg-dark mt-5 pt-5">
				<Footer />
			</div>
		</div>
	);
};

export default Meettiti;
