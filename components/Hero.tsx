import  styles  from "../styles/componentstyles/hero.module.scss";



const Hero = () => {{
	return (
	
			
				  <div className={styles.ConsultingHero}>
					{/* <div className="gradientBg overlayBg"></div> */}
					<div className="row justify-content-start">
					  <div className="col-lg-6 col-md-6 col-sm-12 px-lg-5">
						<div className={styles.ConsultingHeroBg}>
						<h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 ">
						  Lorem, Ipsum Dolor.
						</h1>
						<h2 className={styles.ConsultingHeroBg}>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab unde excepturi perspiciatis doloribus maiores vel fugiat, soluta officiis totam illo dolorum facilis officia explicabo, natus distinctio eaque, itaque magni maxime.
				
						{/* <hr className={styles.hr}/> */}
						</h2>
						</div>
						<h2 className="d-xs-block d-sm-block d-md-block d-lg-none ">
						  Lorem, Ipsum Dolor. 
						</h2>
	
					  </div>
					</div>
				  </div>
						
				);
			
			  };
	
};

export default Hero;



