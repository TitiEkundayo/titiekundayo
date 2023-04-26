import { SocialMediaIcons } from "@/components/icons.js/SocialMediaIcons";
import styles from "../styles/generalstyles/colors.module.scss";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function UnderConstruction1() {
	const [hooray, setHooray] = useState(false);
	const [days, setDays] = useState(30);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const target = new Date("05/10/2023 23:59:59");
		const interval = setInterval(() => {
			const now = new Date();
			const timeDifference = target.getTime() - now.getTime();

			const daysBtwNowAndTarget = Math.floor(
				timeDifference / (1000 * 60 * 60 * 24)
			);
			setDays(daysBtwNowAndTarget);

			const hoursBtwNowAndTarget = Math.floor(
				(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			setHours(hoursBtwNowAndTarget);

			const minsBtwNowAndTarget = Math.floor(
				(timeDifference % (1000 * 60 * 60)) / (1000 * 60)
			);
			setMinutes(minsBtwNowAndTarget);

			const secsBtwNowAndTarget = Math.floor(
				(timeDifference % (1000 * 60)) / 1000
			);
			setSeconds(secsBtwNowAndTarget);

			if (
				daysBtwNowAndTarget <= 0 &&
				hoursBtwNowAndTarget <= 0 &&
				minsBtwNowAndTarget <= 0 &&
				secsBtwNowAndTarget <= 0
			) {
				setHooray(true);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);
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

	// let interval = useRef();

	// const beginTimer = () => {
	// 	const countDown = new Date("March 1, 2023 59:00:00").getTime();

	// 	let interval = setInterval(() => {
	// 		const currentTime = new Date().getTime();
	// 		const timeDifference = countDown - currentTime;

	// 		const dayTimer = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	// 		const hourTimer = Math.floor(
	// 			(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	// 		);

	// 		const minutesTimer = Math.floor(
	// 			(timeDifference % (1000 * 60 * 60)) / (1000 * 60)
	// 		);

	// 		const secondsTimer = Math.floor((timeDifference % (1000 * 60)) / 1000);

	// 		// to display or update our timer
	// 		if (timeDifference < 0) {
	// 			// stop the timer
	// 			// clearInterval(interval.current)
	// 			clearInterval(interval);
	// 		} else {
	// 			// update the timer
	// 			setDays(dayTimer);
	// 			setHours(hourTimer);
	// 			setMinutes(minutesTimer);
	// 			setSeconds(secondsTimer);
	// 		}
	// 	}, 1000);
	// };

	// useEffect(() => {
	// 	beginTimer();
	// 	console.log(beginTimer());

	// 	// return () => {
	// 	// 	clearInterval(interval.current);
	// 	// };
	// }, []);

	return (
		<div className="card bg-dark m-auto w-75 mt-5">
			<div className="card-body text-center p-5">
				{/* timer for mobile */}
				<h5 className={`card-title mb-4 h3 ${styles.secColor}`}>
					We are working on something beautiful
				</h5>
				<div className="card d-sm-block d-md-none">
					<div className="card-body">
						<div className="d-flex justify-content-center">
							<div className="me-1">
								<h4 className="mb-0">{days}</h4>
								<h6>Days</h6>
							</div>

							<div className="me-1">
								<h4>:</h4>
							</div>

							<div className="me-1">
								<h4 className="mb-0">{hours}</h4>
								<h6>Hrs</h6>
							</div>

							<div className="me-1">
								<h4>:</h4>
							</div>

							<div className="me-1">
								<h4 className="mb-0">{minutes}</h4>
								<h6>Mins</h6>
							</div>

							<div className="me-1">
								<h4>:</h4>
							</div>

							<div>
								<h4 className="mb-0">{seconds}</h4>
								<h6>Secs</h6>
							</div>
						</div>
					</div>
				</div>

				{/* timer for desktop */}
				<div className="card d-none d-sm-none d-md-block w-50 m-auto">
					<div className="card-body">
						<div className="d-flex justify-content-center">
							<div className="me-2">
								<h4 className="mb-0">{days}</h4>
								<h6>Days</h6>
							</div>

							<div className="me-2">
								<h4>:</h4>
							</div>

							<div className="me-2">
								<h4 className="mb-0">{hours}</h4>
								<h6>Hrs</h6>
							</div>

							<div className="me-2">
								<h4>:</h4>
							</div>

							<div className="me-2">
								<h4 className="mb-0">{minutes}</h4>
								<h6>Mins</h6>
							</div>

							<div className="me-2">
								<h4>:</h4>
							</div>

							<div>
								<h4 className="mb-0">{seconds}</h4>
								<h6>Secs</h6>
							</div>
						</div>
					</div>
				</div>

				<div className="text-white mt-4">
					<Link
						href="mailto:holla@titiekundayo.com"
						className="nav-link"
						passHref={true}>
						holla@titiekundayo.com
					</Link>
					<SocialMediaIcons />
				</div>

				<footer className="text-white mt-5 d-none d-sm-none d-md-block">
					&copy; 2022 Titi Ekundayo. All Rights Reserved <span>|</span>
					Privacy Policy
				</footer>
				<footer className="text-white mt-5">
					<p className="mb-0"> &copy; 2022 Titi Ekundayo.</p>
					<p>Privacy Policy</p>
				</footer>
			</div>
		</div>
	);
}
