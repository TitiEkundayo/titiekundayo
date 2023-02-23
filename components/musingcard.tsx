import Card1 from "../pages/api/card.json"
import styles from "../styles/generalstyles/colors.module.scss"

 

interface Product {
  Image: string;
  Title: string;
  Bodytext: string;
  Link: string;
  Id: number;
}

export const MusingCard = (props:Product) => {
  const { Image, Title, Bodytext, Link, Id } = props;
  return (
    <>
      
       <div className= {`card border-0 ${styles.pryColor}`}>
          <img src={Image} className="card-img-top" alt="..." />
          <div className="card-body text-wrap">
            <h5 className="card-title">{Title}</h5>
            <p className="card-text">{Bodytext}</p>
          <a href="#" className={`${styles.secColor}`}>{Link}</a>
          </div>
      </div> 
    </>
  );
};

export const CardMapping = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mb-5 g-5">
        {Card1.Cards.map((item) => {
          return (
            <>
              <div className="col-lg-4 col-md-4 col-sm-12" key={item.Id}>
                <MusingCard {...item}/>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};