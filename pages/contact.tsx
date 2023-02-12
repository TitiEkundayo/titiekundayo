import { ContactNavTitle } from "@/components/Navbar";
import UnderConstruction1 from "./underconstruction1";
import Footer from "@/components/Footer";
import {
	EmailIcon,
	SocialMediaIcons,
} from "@/components/icons.js/SocialMediaIcons";
import btnbgcolor from "../styles/generalstyles/colors.module.scss";

const Contact = () => {
	return (
		<div>
			<div>
				<ContactNavTitle />
			</div>

			<div>
				<ContactPageLayout />
			</div>

			{/* <div className="container mt-5 pt-3 d-md-flex align-items-md-center justify-content-center">
				<div className="d-flex flex-column justify-content-sm-center">
					<GetInTouch />
				</div>
				<div className="">
					<ContactForm />
				</div>
			</div> */}
			{/* <div className="container mt-5 pt-3">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-md-5">
						<GetInTouch />
					</div>

					<div className="col-md-7">
						<ContactForm />
					</div>
				</div>
			</div> */}
		</div>
	);
};
// const Contact = () => {
// 	return (
// 		<div>
// 			<div>
// 				<ContactNavTitle />
// 			</div>

// 			<div>
// 				<UnderConstruction1 />
// 			</div>
// 		</div>
// 	);
// };

const GetInTouch = () => {
	return (
		<div className="">
			<div className="text-white">
				<h3>Get In Touch</h3>
				<p className="w-75">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, earum?
				</p>
			</div>

			{/* <div>
				<EmailIcon />
				<p>titiekundayo@gmail.com</p>
			</div> */}

			<div className="">
				<SocialMediaIcons />
			</div>
		</div>
	);
};

const ContactForm = () => {
	return (
		<>
			<form className="bg-white p-3 w-100">
				<div className="mb-3">
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Name"
					/>
				</div>

				<div className="mb-3">
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Email"
					/>
				</div>

				<div className="mb-3">
					<textarea
						className="form-control"
						id="exampleFormControlTextarea1"
						placeholder="Message"
						rows={3}></textarea>
				</div>

				<div className="d-flex justify-content-end">
					<button type="submit" className={`btn ${btnbgcolor.secBgColor}`}>
						Submit
					</button>
				</div>
			</form>
		</>
	);
};

const ContactPageLayout = () => {
	return (
		<>
			{/* desktop */}
			<div className="container mt-5 pt-3 d-none d-sm-none d-md-block">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-md-5">
						<GetInTouch />
					</div>

					<div className="col-md-7">
						<ContactForm />
					</div>
				</div>
			</div>

			{/* mobile */}
			<div className="container mt-5 pt-3">
				<div className="">
					<GetInTouch />
				</div>
				<div className="">
					<ContactForm />
				</div>
			</div>
		</>
	);
};

export default Contact;
