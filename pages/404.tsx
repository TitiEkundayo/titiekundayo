import Link from "next/link";
import styles from "../styles/generalstyles/colors.module.scss";
import { ErrorNav } from "@/components/Navbar";

const PageNotFound = () => {
	return (
		<>
			<ErrorNav />
			<div className="d-flex flex-column mt-5 mb-5 pb-5">
				<h3>Ooops! this Page Does Not Exist</h3>
				<p>Please Go Back</p>
				<div>
					<Link href="/" className={`btn ${styles.secBgColor} mb-5`}>
						Home
					</Link>
				</div>
			</div>
		</>
	);
};

export default PageNotFound;
