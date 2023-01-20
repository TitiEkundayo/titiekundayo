import Head from "next/head";
import Image from "next/image";
import { HomeNavTitle } from "../components/Navbar";
import home from "../styles/Home.module.css";
import titi from "../public/images/HomeImgs/titi.png";
import Footer from "@/components/Footer";
import UnderConstruction from "./underconstruction";
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
				<UnderConstruction />
			</div>

			<div className="bg-dark mt-5 pt-5">
				<Footer />
			</div>
		</>
	);
}
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
// 				<Navbar0 />
// 			</div>
// 			<div className="mt-3">
// 				<Hero />
// 			</div>
// 		</>
// 	);
// }

const Hero = () => {
	return (
		<div id="carouselExampleIndicators" className="carousel slide">
			<div className="carousel-indicators">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					data-bs-slide-to="0"
					aria-current="true"
					// data-bs-target="#carouselExampleIndicators"
					aria-label="Slide 1"
					width="16"
					height="16"
					fill="currentColor"
					className="bi bi-record active"
					viewBox="0 0 16 16">
					<path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					data-bs-slide-to="1"
					aria-current="true"
					// data-bs-target="#carouselExampleIndicators"
					aria-label="Slide 2"
					type="button"
					width="16"
					height="16"
					fill="currentColor"
					className="bi bi-record active"
					viewBox="0 0 16 16">
					<path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					data-bs-slide-to="3"
					aria-current="true"
					// data-bs-target="#carouselExampleIndicators"
					aria-label="Slide 3"
					type="button"
					width="16"
					height="16"
					fill="currentColor"
					className="bi bi-record active"
					viewBox="0 0 16 16">
					<path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
				</svg>
				{/* <button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="1"
					aria-label="Slide 2"></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="2"
					aria-label="Slide 3"></button> */}
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<Image src={titi} height={200} alt="" className="d-block w-100" />
				</div>
				<div className="carousel-item">
					<Image src={titi} width={200} alt="" className="d-block w-100" />
				</div>
				<div className="carousel-item">
					<Image src={titi} width={200} alt="" className="d-block w-100" />
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};
