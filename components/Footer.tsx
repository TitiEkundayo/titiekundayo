import logofont from "../styles/generalstyles/fonts.module.scss";
import { SocialMediaIcons } from "./icons.js/SocialMediaIcons";

const Footer = () => {
	return (
		<>
			{/* mobile footer */}
			<footer className="text-white container-fluid d-sm-block d-md-none">
				<h1 className={`mb-5 ${logofont.logofontfamily}`}>Titilayo Ekundayo</h1>
				{/* <h1 className={`mb-5 ${globalstyles.logofont}`}>Titilayo Ekundayo</h1> */}

				<div className="d-flex justify-content-around mb-3">
					<div className="">
						<p>Meet Titi</p>
						<p>Books</p>
						<p>Contact</p>
					</div>

					<div className="">
						<p>Podcast</p>
						<p>Musing</p>
					</div>

					<div className="">
						<p>Entrepreneur</p>
						<p>Consulting</p>
					</div>
				</div>

				<div className="d-flex flex-column align-items-center">
					<p className={`mb-0`}>Subscribe to Newsletter</p>
					<div className={`border-bottom w-50`}></div>
					{/* <div className={`border-bottom w-50 ${globalstyles.secColor}`}></div> */}
				</div>
				<div className="mt-4 text-center">
					<p className="mb-0">&copy; 2022 Titi Ekundayo. All Rights Reserved</p>
					<p>Privacy Policy</p>
				</div>
			</footer>

			{/* desktop footer */}
			<footer className="text-white container d-none d-sm-none d-md-block">
				<div className="d-flex justify-content-around text-center">
					<div className="">
						<h1 className={`${logofont.logofontfamily}`}>Titilayo Ekundayo</h1>
					</div>

					<div className={`vr`}></div>

					<div className="text-start">
						<p>Meet Titi</p>
						<p>Books</p>
						<p>Podcast</p>
						<p>Musing</p>
					</div>
					<div className={`vr`}></div>

					<div className="text-start">
						<p>Entrepreneur</p>
						<p>Consulting</p>
						<p>Contact</p>
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
						&copy; 2022 Titi Ekundayo. All Rights Reserved | Privacy Policy
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
