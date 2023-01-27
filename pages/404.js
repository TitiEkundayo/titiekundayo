import Link from "next/link";
import styles from "../styles/generalstyles/colors.module.scss";

const PageNotFound = () => {
	return (
		<div className="d-flex flex-column mt-5">
			<h3>Ooops! this Page Does Not Exist</h3>
			<p>Please Go Back</p>
			<div>
				<Link href="/" className={`btn ${styles.secBgColor}`}>
					Home
				</Link>
			</div>
		</div>
	);
};

export default PageNotFound;
