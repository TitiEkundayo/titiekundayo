import { ContactNavTitle } from "@/components/Navbar";
import UnderConstruction1 from "./underconstruction1";
import Footer from "@/components/Footer";
import { EmailIcon, SocialMediaIcons } from "@/components/icons.js/SocialMediaIcons";

const Contact = () => {
	return (
		<div>
			<div>
				<ContactNavTitle />
			</div>

			<div>
				<UnderConstruction1 />
			</div>
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


const GetInTouch = ()=> {
	return (
		<>
			<div>
				<h2>Get In Touch</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, earum?</p>
			</div>

			{/* <div>
				<EmailIcon />
				<p>titiekundayo@gmail.com</p>
			</div> */}

			<div>
				<SocialMediaIcons/>
			</div>


		</>
	)
}

export default Contact;
