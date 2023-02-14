import { ConsultNavTitle } from "@/components/Navbar";
import UnderConstruction1 from "../underconstruction1";
import Footer from "@/components/Footer";
import styles from ".././../styles/componentstyles/consulting.module.scss";
// import Cards from "@/components/consultingComponents/cards";
import ConsultingReadMore from ".././consulting/ConsultingReadMore";

const Consulting = () => {
	return (

		<div>
			<div>
				<ConsultNavTitle />
			</div>

			{/* <div> */}
				{/* Hero section begins */}
				{/* <div className={'container-fluid'}>
					<div className="row justify-content-start">
				  <div className={styles.ConsultingHero}>
					
					  <div className="col-lg-6 col-md-12 col-sm-12">
						<div className={styles.ConsultingHeroBg}>
						<h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5">
						  Lorem, Ipsum Dolor.
						</h1>
						<h2 className={styles.ConsultingHeroBg}> 
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab unde excepturi perspiciatis doloribus maiores vel fugiat, soluta officiis totam illo dolorum facilis officia explicabo, natus distinctio eaque, itaque magni maxime.
				
						</h2>
						</div>
				
					  </div>
					</div>
					</div>
				  </div>
			</div> */}
			{/* Hero section ends */}
				
		<div>
			{/* What most of our clients ask for */}
			<ConsultingReadMore/>
        {/* <>
        <div className={styles.ConsultingHome}>
        <div className="bg-black">
        <div className={'container-fluid'}>
            <div className={'container d-flex align-items-center'}>
                <div className={'container d-flex'}>
                <div className="row align-items-center justify-content-start">
                    <div className="col-lg-7 col-md-7 col-sm-12 mt-4">
                        <h2 className={styles.h3}>
                            What most of our clients ask for
                        </h2>

                    </div>

                </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 d-flex mt-4 justify-content-end">
                        <div>
                
                        <h5 className={styles.h5}>Lorem Ipsum</h5>
                            <p className={styles.p}>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cumque sequi sint eius.
                            </p> <br />
                            <h5 className={styles.h5}>Lorem Ipsum</h5>
                            <p className={styles.p}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cumque sequi sint eius.
                            </p> <br />
                            <h5 className={styles.h5}>Lorem Ipsum</h5>
                            <p className={styles.p}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cumque sequi sint eius.
                            </p> <br />
                            <h5 className={styles.h5}>Lorem Ipsum</h5>
                            <p className={styles.p}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cumque sequi sint eius.
                            </p><br />
                            </div>
           </div>
							</div>
						</div>
					</div>
				</div>
		</div>
        
        </> */}
		</div>
				{/* <div className="bg-black">
				<div className="col-lg-6 col-md-6 col-sm-12 mt-10">
					<h3 className={styles.h3}>How do we solve it?</h3>
				</div>
						<div className={'container-fluid'}>
							<div className={'container d-flex align-items-center'}>
								<div className={'container d-flex'}>
									<div className="col-lg-4 col-md-4 col-sm-12 mt-4">
										<Cards/>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12 mt-4">
										<Cards/>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12 mt-4">
										<Cards/>
									</div>

								</div>

							</div>

						</div>
		
					</div>
				
 */}


				
			<div>
				{/* <UnderConstruction1 /> */}
			</div>

			<div className="bg-dark mt-5 pt-5">
				<Footer />
			
			</div>
			
		</div>
	);
};

export default Consulting;


