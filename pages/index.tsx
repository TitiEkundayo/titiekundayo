import Head from "next/head";
import Image from "next/image";
import { HomeNavTitle } from "../components/Navbar";
import titi from "../public/images/HomeImgs/titi.png";
import Footer from "@/components/Footer";
import UnderConstruction from "./underconstruction1";
import Button from "@/components/Button";
// import Hero from "../components/Hero";
import styles from "../styles/generalstyles/colors.module.scss";

// export default function Home() {
// 	return (
// 		<>
// 			<Head>
// 				<title>Create Next App</title>
// 				<meta name="description" content="Generated by create next app" />
// 				<meta name="viewport" content="width=device-width, initial-scale=1" />
// 				<link rel="icon" href="/favicon.ico" />
// 			</Head>

// 			<div>
// 				<HomeNavTitle />
// 			</div>

// 			<div>
// 				<UnderConstruction />
// 			</div>

// 			<div>
// 				<Button
// 					classes={`btn ${styles.secBgColor} text-white`}
// 					btnText="Get Started"
// 				/>

// 				<Button classes={`btn btn-primary text-white`} btnText="Submit" />
// 			</div>

// 			<div className="bg-dark mt-5 pt-5">
// 				<Footer />
// 			</div>
// 		</>
// 	);
// }

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>
				<HomeNavTitle />
			</div>

			<div>
				<UnderConstruction />
			</div>

			{/* the code below is a sample of how a button is used */}
			{/* <div>
				<Button
					classes={`btn ${styles.secBgColor} text-white`}
					btnText="Get Started"
				/>

				<Button classes={`btn btn-primary text-white`} btnText="Submit" />
			</div> */}

			<div className="bg-dark mt-5 pt-5">
				<Footer />
			</div>
		</>
	);
}
