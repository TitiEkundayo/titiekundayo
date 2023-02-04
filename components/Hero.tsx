import styles from "../styles/componentstyles/enterpreneurpage.module.scss"


const Hero = () => {
	return <div>Hero</div>;
};

export default Hero;




export const EnterpreneurpageHero = () => {
  return (
	<div className={styles.EnterpreneurHero}>

    <div className="px-4 container-fluid  d-flex pt-5 pb-4 align-items-center ">
      
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12 mt-5">
			<div className={styles.Enterpreneurtexthero}>

          <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-4 ">
          LOREM IPSUM DOLOR 
		  
          </h1>
			</div>
		  
          <p className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, impedit ipsum, numquam totam. Nulla delectus aliquam ipsa doloribus <br/>distinctio quia deleniti porro perferendis dolores.
          </p>
        
		  <div className={styles.EnterpreneurpageHero2}>

          <h2 className="d-xs-block d-sm-block d-md-block d-lg-none ">
		  LOREM IPSUM DOLOR 
          </h2>
		  <p className="d-xs-block d-sm-block d-md-block d-lg-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, impedit ipsum, numquam totam. Nulla delectus aliquam ipsa doloribus <br/>distinctio quia deleniti porro perferendis dolores.
          </p>
		  </div>
        </div>
      </div>
    </div>
	</div>
  );
};