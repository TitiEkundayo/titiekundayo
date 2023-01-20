import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/global.css";
import "../styles/globals/globals.module.scss";
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle");
	}, []);
	return <Component {...pageProps} />;
}
