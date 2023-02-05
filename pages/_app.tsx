import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle");
	}, []);return<Component {...pageProps} />;
}
