import { BookNavTitle } from "@/components/Navbar";
import UnderConstruction1 from "../underconstruction1";
import Footer from "@/components/Footer";

const Books = () => {
	return (
		<div>
			<div>
				<BookNavTitle />
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

export default Books;
