import Image from "next/image";
import Card from "../pages/api/musingcard.json";
import styles from "../styles/generalstyles/colors.module.scss";
  
 

interface Product {
  MusingImage: string;
  MusingTitle: string;
  Bodytext: string;
  MusingLink: string;
  id: number;
}

export const MusingCard = (props:Product) => {
  const { MusingImage, MusingTitle, Bodytext, MusingLink, id } = props;
  return (
    <>
      
       <div className= {`card border-0 ${styles.pryColor}`}>
         <Image src={MusingImage} className="card-img-top"
           width={307.8} height="329" alt="..."
         />
          <div className="card-body text-wrap">
            <h5 className="card-title mt-4">{MusingTitle}</h5>
            <p className="card-text mt-3">{Bodytext}</p>
          <a href=" " className={`mt-3 text-decoration-none ${styles.secColor}`}>{MusingLink}</a>
          </div>
      </div> 
    </>
  );
};

export const CardMapping = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mb-5 g-5">
        {Card.MusingJsonCard.map((item) => {
          return (
            <>
              <div className="col-lg-4 col-md-4 col-sm-12" key={item.id}>
                <MusingCard {...item}/>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};