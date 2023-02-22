import Footer from "./Footer";

// interface pages {
// 	children: string;
// }
// const Layout = (props: pages) => {
// 	const { children } = props;
// 	return (
// 		<div>
// 			{children}
// 			<Footer />
// 		</div>
// 	);
// };

interface pages {
	children: any;
}
const Layout = (props: pages) => {
	const { children } = props;
	return (
		<div>
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
