import { SocialMediaIcons } from "@/components/icons.js/SocialMediaIcons";
import styles from "../styles/generalstyles/colors.module.scss";

export default function UnderConstruction1() {
	return (
		<div className="card bg-dark m-auto w-75 mt-5">
			<div className="card-body text-center p-5">
				{/* <h3
					className={`card-title mb-4 h3 ${underconstructionstyles.seccolor}`}>
					We are working on something beautiful
				</h3> */}
				<h3 className={`card-title mb-4 h3 ${styles.secColor}`}>
					We are working on something beautiful
				</h3>

				<div className="card m-auto d-none d-sm-block d-md-none">
					<div className="card-body">
						<div className="card-text d-flex justify-content-center">
							<p className="my-auto">60</p>
							<p>:</p>
							<p className="my-auto">00</p>
							<p>:</p>
							<p className="my-auto">00</p>
							<p>:</p>
							<p className="my-auto">00</p>
						</div>
					</div>
				</div>
				<div className="card m-auto w-50 d-sm-none d-md-block">
					<div className="card-body">
						<div className="card-text d-flex justify-content-center">
							<p className="my-auto">60</p>
							<p>:</p>
							<p className="my-auto">00</p>
							<p>:</p>
							<p className="my-auto">00</p>
							<p>:</p>
							<p className="my-auto">00</p>
						</div>
					</div>
				</div>

				<div className="text-white mt-4">
					<address className="mb-0 pFont">holla@titiekundayo.com</address>
					<SocialMediaIcons />
				</div>

				<footer className="text-white mt-5 d-none d-sm-none d-md-block">
					{/* &copy; 2022 Titi Ekundayo. All Rights Reserved{" "}
					<span className={`${underconstructionstyles.seccolor}`}>|</span>{" "}
					Privacy Policy */}
					&copy; 2022 Titi Ekundayo. All Rights Reserved <span>|</span>
					Privacy Policy
				</footer>
				<footer className="text-white mt-5">
					<p className="mb-0"> &copy; 2022 Titi Ekundayo.</p>
					<p>
						{/* All Rights Reserved <span className={`${styles.secColor}`}>|</span>{" "} */}
						Privacy Policy
						{/* All Rights Reserved
						<span>|</span>
						Privacy Policy */}
					</p>
				</footer>
			</div>
		</div>
	);
}
