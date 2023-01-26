import logofont from "../styles/generalstyles/fonts.module.scss";
import { SocialMediaIcons } from "./icons.js/SocialMediaIcons";
import styles from "../styles/generalstyles/colors.module.scss";
import Link from "next/link";

const Footer = () => {
	return (
		<>
			{/* mobile footer */}
			<footer className="text-white container-fluid d-sm-block d-md-none pb-4">
				<h1 className={`mb-5 ${logofont.logofontfamily}`}>Titilayo Ekundayo</h1>
				{/* <h1 className={`mb-5 ${globalstyles.logofont}`}>Titilayo Ekundayo</h1> */}

				<div className="d-flex justify-content-around mb-3">
					{/* first column */}
					<div>
						<Link
							className="nav-link active"
							aria-current="page"
							href="/meettiti">
							Titi
						</Link>

						<Link
							className="nav-link active mt-3"
							aria-current="page"
							href="/books">
							Books
						</Link>

						<Link
							className="nav-link active mt-3"
							aria-current="page"
							href="/contact">
							Contact
						</Link>
					</div>

					{/* second column */}
					<div>
						<Link
							className="nav-link active"
							aria-current="page"
							href="/podcast">
							Podcast
						</Link>

						<Link
							className="nav-link active mt-3"
							aria-current="page"
							href="/musing">
							Musing
						</Link>
					</div>

					{/* third column */}
					<div>
						<Link
							className="nav-link active"
							aria-current="page"
							href="/entrepreneurship">
							Entrepreneur
						</Link>

						<Link
							className="nav-link active mt-3"
							aria-current="page"
							href="/consulting">
							Consulting
						</Link>
					</div>
				</div>

				<div className="d-flex flex-column align-items-center mb-3">
					<p className={`mb-0`}>Subscribe to Newsletter</p>
					<div className={`border-bottom w-50 ${styles.secColor}`}></div>
				</div>
				<div>
					<SocialMediaIcons />
				</div>
				<div className="mt-4 text-center">
					<p className="mb-0">&copy; 2022 Titi Ekundayo. All Rights Reserved</p>
					<p>Privacy Policy</p>
				</div>
			</footer>

			{/* desktop footer */}
			<footer className="text-white container d-none d-sm-none d-md-block pb-4">
				<div className="d-flex justify-content-around text-center">
					<div className="">
						<h1 className={`${logofont.logofontfamily}`}>Titilayo Ekundayo</h1>
					</div>

					<div className={`vr`}></div>

					<div className="text-start">
						<Link
							className="nav-link active mb-3"
							aria-current="page"
							href="/meettiti">
							Titi
						</Link>

						<Link
							className="nav-link active mb-3"
							aria-current="page"
							href="/books">
							Books
						</Link>

						<Link
							className="nav-link active mb-3"
							aria-current="page"
							href="/podcast">
							Podcast
						</Link>

						<Link
							className="nav-link active"
							aria-current="page"
							href="/musing">
							Musing
						</Link>
					</div>

					<div className={`vr`}></div>

					<div className="text-start">
						<Link
							className="nav-link active mb-3"
							aria-current="page"
							href="/musing">
							Entrepreneur
						</Link>

						<Link
							className="nav-link active mb-3"
							aria-current="page"
							href="/consulting">
							Consulting
						</Link>

						<Link
							className="nav-link active"
							aria-current="page"
							href="/contact">
							Contact
						</Link>
					</div>
				</div>

				<div className="mt-5 mb-5 d-flex justify-content-between">
					<div className="">
						<p className={`mb-0`}>Subscribe to Newsletter</p>
						<div className={`border-bottom w-100`}></div>
					</div>

					<div className="">
						<SocialMediaIcons />
					</div>

					{/* <div className={`border-bottom w-50 ${globalstyles.secColor}`}></div> */}
				</div>

				<div className="mt-4 text-center">
					<p className="mb-0">
						&copy; 2022 Titi Ekundayo. All Rights Reserved{" "}
						<span className={`${styles.secColor}`}> | </span> Privacy Policy
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
