import Head from "next/head";
import Image from "next/image";
import { HomeNavTitle } from "../components/Navbar";
import titi from "../public/images/HomeImgs/titi.png";
import Footer from "@/components/Footer";
// import UnderConstruction from "./underconstruction1";
import UnderConstruction1 from "./underconstruction1";
// import Hero from "../components/Hero";

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
				<UnderConstruction1 />
			</div>

			{/* the code below is a sample of how a button is used */}
			{/* <div>
				<Button
					classes={`btn ${styles.secBgColor} text-white`}
					btnText="Get Started"
				/>

				<Button classes={`btn btn-primary text-white`} btnText="Submit" />
			</div> */}
		</>
	);
}
