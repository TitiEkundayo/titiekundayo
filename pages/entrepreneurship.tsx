import { ContactNavTitle, EntrepreneurNavTitle } from "@/components/Navbar";
import UnderConstruction1 from "./underconstruction1";
import Footer from "@/components/Footer";

const Entrepreneurship = () => {
	return (
		<div>
			<div>
				<EntrepreneurNavTitle />
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

export default Entrepreneurship;
