import { SocialMediaIcons } from "@/components/icons.js/SocialMediaIcons";
import styles from "../styles/generalstyles/colors.module.scss";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function UnderConstruction1() {
	const [days, setDays] = useState(30);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	// useEffect(() => {
	// 	const targetTime = new Date("31/03/2023 23:59:59");

	// 	const interval = setInterval(() => {
	// 		const currentTime = new Date();
	// 		const timeDifference = targetTime.getTime() - currentTime.getTime();
	// 		const daysBtwNowAndTarget = Math.floor(
	// 			timeDifference / (1000 * 60 * 60 * 24)
	// 		);
	// 		// console.log(daysBtwNowAndTarget);

	// 		setDays(daysBtwNowAndTarget);
	// 	}, 1000);

	// 	return () => clearInterval(interval);
	// }, []);

	let interval = useRef();

	const beginTimer = () => {
		const countDown = new Date("March 1 2023 59:00:00").getTime();

		let interval = setInterval(() => {
			const currentTime = new Date().getTime();
			const timeDifference = countDown - currentTime;

			const dayTimer = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
			const hourTimer = Math.floor(
				(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);

			const minutesTimer = Math.floor(
				(timeDifference % (1000 * 60 * 60)) / (1000 * 60)
			);

			const secondsTimer = Math.floor((timeDifference % (1000 * 60)) / 1000);

			// to display or update our timer
			if (timeDifference < 0) {
				// stop the timer
				// clearInterval(interval.current)
				clearInterval(interval);
			} else {
				// update the timer
				setDays(dayTimer);
				setHours(hourTimer);
				setMinutes(minutesTimer);
				setSeconds(secondsTimer);
			}
		}, 1000);
	};

	useEffect(() => {}, []);

	return (
		<div className="card bg-dark m-auto w-75 mt-5">
			<div className="card-body text-center p-5">
				{/* <h3
					className={`card-title mb-4 h3 ${underconstructionstyles.seccolor}`}>
					We are working on somethin2g beautiful
				</h3> */}
				<h3 className={`card-title mb-4 h3 ${styles.secColor}`}>
					We are working on something beautiful
				</h3>

				{/* timer for mobile */}
				{/* <div className="card m-auto d-none d-sm-block d-md-none">
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
				</div> */}

				<div className="card d-sm-block d-md-none">
					<div className="card-body">
						<div className="d-flex justify-content-center">
							<div className="me-1">
								<h4 className="mb-0">40</h4>
								<h6>Days</h6>
							</div>

							<div className="me-1">
								<h4>:</h4>
							</div>

							<div className="me-1">
								<h4 className="mb-0">06</h4>
								<h6>Hrs</h6>
							</div>

							<div className="me-1">
								<h4>:</h4>
							</div>

							<div className="me-1">
								<h4 className="mb-0">00</h4>
								<h6>Mins</h6>
							</div>

							<div className="me-1">
								<h4>:</h4>
							</div>

							<div>
								<h4 className="mb-0">00</h4>
								<h6>Secs</h6>
							</div>
						</div>
					</div>
				</div>

				{/* timer for desktop */}
				{/* <div className="card m-auto w-50 d-sm-none d-md-block">
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
				</div> */}

				<div className="card d-none d-sm-none d-md-block w-50 m-auto">
					<div className="card-body">
						<div className="d-flex justify-content-center">
							<div className="me-2">
								<h4 className="mb-0">06</h4>
								<h6>Days</h6>
							</div>

							<div className="me-2">
								<h4>:</h4>
							</div>

							<div className="me-2">
								<h4 className="mb-0">10</h4>
								<h6>Hrs</h6>
							</div>

							<div className="me-2">
								<h4>:</h4>
							</div>

							<div className="me-2">
								<h4 className="mb-0">00</h4>
								<h6>Mins</h6>
							</div>

							<div className="me-2">
								<h4>:</h4>
							</div>

							<div>
								<h4 className="mb-0">00</h4>
								<h6>Secs</h6>
							</div>
						</div>
					</div>
				</div>

				<div className="text-white mt-4">
					{/* <address className="mb-0 pFont">holla@titiekundayo.com</address> */}
					<Link
						href="mailto:holla@titiekundayo.com"
						className="nav-link"
						passHref={true}>
						holla@titiekundayo.com
					</Link>
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
