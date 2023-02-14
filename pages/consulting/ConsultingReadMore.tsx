import styles from ".././../styles/componentstyles/consulting.module.scss";
import Image from "next/image";
import SectionImg from ".././../public/images/ConsultingImgs/Image1.png";


const ConsultingReadMore = () =>{
    return (
        <>
        <div>

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
						</h2>
                        
						</div>
                        </div>
        </div>
        </div>
        </div>
        <div>
            <Section/>
        </div>
        
        
        
        </>

    );
};

export default ConsultingReadMore;

export const Section= () =>{
    return(
        <>
       <div className={styles.Section}>
        <div className="bg-dark">
            <div className="container-fluid">
                    {/* <div className="cotainer align-items-center"> */}
                        <div className="text-white">
                <div className="row align-items-center justify-content-center">
                 
        <div className="col-lg-10 col-md-10 col-sm-12 mt-4">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla reprehenderit sapiente molestias, corporis repellendus minus totam at officiis asperiores quibusdam commodi voluptatibus non eius architecto ipsa mollitia reiciendis ea nihil ullam magnam rem ducimus consectetur neque maiores! Amet non iste esse autem perferendis sunt tempora minima corporis ab perspiciatis impedit nobis, nulla quo maxime laboriosam quam explicabo repellat? Repellat repellendus architecto reprehenderit optio hic quae laboriosam facilis asperiores eveniet culpa?
                </p>
        </div>
        <div className="container-fluid">
            <div className="container justify-content-center">
        <Image src={SectionImg} width="900" height={300} alt="image"/>
        </div>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-12">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi a blanditiis rem optio dolores accusantium reprehenderit labore doloribus, qui amet similique velit consectetur suscipit assumenda iure sapiente delectus dicta. Cupiditate officiis, similique ullam deleniti ipsam vitae omnis eveniet labore maiores doloribus placeat, corrupti quidem? Enim, similique eaque suscipit aperiam in consequuntur incidunt praesentium provident maxime tempore debitis esse reprehenderit voluptate, officiis commodi fuga mollitia. Deserunt iure animi nam natus.
                </p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        {/* </div> */}
        </>


    );
};