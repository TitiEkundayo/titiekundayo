import { MusingNavTitle } from "@/components/Navbar";
//import UnderConstruction1 from "../underconstruction1";
import Footer from "@/components/Footer";
import styles from "../../styles/generalstyles/colors.module.scss"
import mustyles from "../../styles/pagesstyle/musing.module.scss"
import Image from "next/image";
import blogimg from "../../public/images/musingpagesimg/blogimg.png"
import {CardMapping} from "../../components/musingcard"

const Musing = () => {
	return ( 
		<div>
			<div>
				<MusingNavTitle />
			</div>

			{/*<div>
				<UnderConstruction1 />
	           </div>*/
			}
			<div className="text-white">
		     <Blog />
		     <PopularArticlesSection/>	
	        </div>
				
			
		</div>
	);
};


const Blog = () => {
	return (
		<div className={"container mt-5 p-3"}>
			<p className="fs-7 fw-lighter">
				16 October, 2022
			</p>
			<h2 className={`${styles.secColor} fw-bold fs-1`}>
				Musing
			</h2>
          <div className="container mt-3">
				<div className="row justify-content-center align-items-center">
					<div className="col-md-7 mt-2">
					    <main className="d-none d-md-block d-sm-none">
							<Image
								//className={`img-fluid d-block ${musingstyles.img}`}
								src={blogimg}
								width="665" 
								alt=""
							/>
						</main>
						        {/*mobile*/}
					    <main className="d-md-none d-sm-block">
							<Image
								className={`img-fluid ${mustyles.img}`}
								src={blogimg}
								width="665" 
								alt=""
							/>
						</main>
						

					</div>
			
					<div className="col-md-5 col-sm-12 mt-3">
						<div>
							<h3 className="fw-bolder"> Blog One</h3>
							<p className="text-start"> Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
								lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
								lorem ipsum dolor lorem ipsum dolor
							</p>
						</div>
						<div>
							<h3 className="fw-bolder">Blog Two</h3>
							<p className="text-start"> Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
								lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
								lorem ipsum dolor lorem ipsum dolor. Lorem ipsum dolor lorem ipsum dolor
								lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
								lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
							</p>
						</div>
					
					</div>
				</div>
		 </div>

		</div>
			
	);   
};

const PopularArticlesSection = () => {
	return (
		<div className="p-3 mt-5">
			<div className="container">
				<p className={`${styles.secColor} fw-bold fs-1`}>Popular Articles</p>
			</div>
			<div>
				< CardMapping/>
	        </div>
		</div>
	);
};
export default Musing;
