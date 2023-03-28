import styles from ".././../styles/componentstyles/consultingTwo.module.scss";
import Image from "next/image";
import SectionImgTwo from ".././../public/images/ConsultingImgs/consultingImage2.png";
import { CardMappingTwo } from "../../components/consultingComponents/cardTwo";
import { ConsultNavTitle } from "@/components/Navbar";
import MobileHeroImg from ".././../public/images/ConsultingImgs/MobileHeroImg.png";
//import DesktopHeroImg from ".././../public/images/HomeImgs/titi.png";
//import { ScrollUpIcon } from "@/components/icons.js/ScrollUpIcon";
const ConsultingReadMoreTwo = () => {
  return (
    <>
      <div>
        <div>
          <ConsultNavTitle/>
        </div>
        <div>
          <ConsultingHero/>
        </div>
    
     
        <div className="bg-black px-4 px-lg-0">
         <Section/>
        </div>
          <div className="bg-black">
            <h3 className={styles.LineColor}>Success Stories</h3>
            <div className={styles.Underline}></div>
            <div className="mb-5">
              <CardMappingTwo/>
            </div>
        </div>
        
      </div>
    </>
  );
};
 
export default ConsultingReadMoreTwo;

const ConsultingHero = () => {
  return ( 
    <div>
         <div className={styles.ConsultingHero}>
          {/* <div className="gradientBg overlayBg"></div> */}
          <div className="d-lg-flex justify-content-between align-items-center">
            <div
              className={`${styles.ConsultingHeroBg} px-lg-5 mx-3 pt-4 mt-lg-0`}
            >
              <h1 className="fw-bold">Lorem, Ipsum Dolor.</h1>
              <p className={`${styles.justifyText}`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                unde excepturi perspiciatis doloribus maiores vel fugiat, soluta
                officiis totam illo dolorum facilis officia explicabo, natus
                distinctio eaque, itaque magni maxime.
              </p>
            </div>
            <Image
              className="d-lg-none mt-5 mx-auto"
              src={MobileHeroImg}
              alt=""
              width={277}
              height={377}
            />
            {/* <Image
              className="desktopImage d-none d-lg-block"
              src={DesktopHeroImg}
              alt=""
             width={1512}
             height={668}
            /> */}
          </div>
        </div>
    </div>
    
  );
};

export const Section = () => {
  return (
    <>
      <div className={styles.Section}>
        <div className="">
          <div className="container-fluid">
            {/* <div className="cotainer align-items-center"> */}

            <div className="text-white">
              <div className="row align-items-center justify-content-center">
                <div className="justify-content-start mt-4">
                  <h3 className={styles.LineColor2}>Short Brief</h3>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 mt-4">
                  <p className={styles.justifyText}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nulla reprehenderit sapiente molestias, corporis repellendus
                    minus totam at officiis asperiores quibusdam commodi
                    voluptatibus non eius architecto ipsa mollitia reiciendis ea
                    nihil ullam magnam rem ducimus consectetur neque maiores!
                    Amet non iste esse autem perferendis sunt tempora minima
                    corporis ab perspiciatis impedit nobis, nulla quo maxime
                    laboriosam quam explicabo repellat? Repellat repellendus
                    architecto reprehenderit optio hic quae laboriosam facilis
                    asperiores eveniet culpa?
                  </p>
                  <p className={styles.justifyText}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nulla reprehenderit sapiente molestias, corporis repellendus
                    minus totam at officiis asperiores quibusdam commodi
                    voluptatibus non eius architecto ipsa mollitia reiciendis ea
                    nihil ullam magnam rem ducimus consectetur neque maiores!
                    Amet non iste esse autem perferendis sunt tempora minima
                    corporis ab perspiciatis impedit nobis, nulla quo maxime
                    laboriosam quam explicabo repellat? Repellat repellendus
                    architecto reprehenderit optio hic quae laboriosam facilis
                    asperiores eveniet culpa?
                  </p>
                  <p className={styles.justifyText}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nulla reprehenderit sapiente molestias, corporis repellendus
                    minus totam at officiis asperiores quibusdam commodi
                    voluptatibus non eius architecto ipsa mollitia reiciendis ea
                    nihil ullam magnam rem ducimus consectetur neque maiores!
                    Amet non iste esse autem perferendis sunt tempora minima
                    corporis ab perspiciatis impedit nobis, nulla quo maxime
                    laboriosam quam explicabo repellat? Repellat repellendus
                    architecto reprehenderit optio hic quae laboriosam facilis
                    asperiores eveniet culpa?
                  </p>
                </div>
                <div className="container-fluid">
                  <div
                    className={`container d-flex justify-content-center mx-auto mb-4 `}
                  >
                    <Image
                      className={styles.bodyImage}
                      src={SectionImgTwo}
                      width="700"
                      height={500}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12">
                  <p className={styles.justifyText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    quasi a blanditiis rem optio dolores accusantium
                    reprehenderit labore doloribus, qui amet similique velit
                    consectetur suscipit assumenda iure sapiente delectus dicta.
                    Cupiditate officiis, similique ullam deleniti ipsam vitae
                    omnis eveniet labore maiores doloribus placeat, corrupti
                    quidem? Enim, similique eaque suscipit aperiam in
                    consequuntur incidunt praesentium provident maxime tempore
                    debitis esse reprehenderit voluptate, officiis commodi fuga
                    mollitia. Deserunt iure animi nam natus.
                  </p>
                  <p className={styles.justifyText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    quasi a blanditiis rem optio dolores accusantium
                    reprehenderit labore doloribus, qui amet similique velit
                    consectetur suscipit assumenda iure sapiente delectus dicta.
                    Cupiditate officiis, similique ullam deleniti ipsam vitae
                    omnis eveniet labore maiores doloribus placeat, corrupti
                    quidem? Enim, similique eaque suscipit aperiam in
                    consequuntur incidunt praesentium provident maxime tempore
                    debitis esse reprehenderit voluptate, officiis commodi fuga
                    mollitia. Deserunt iure animi nam natus.
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
