// import styles from "../styles/globals.css";
import Image from "next/image";
import CardDetails from "../pages/api/sucesscards.json";
import sucessCardsStyles from "../styles/componentstyles/sucesscards.module.scss";

interface sucessCards {
  SucessImages: any;
  SucessTitle: string;
  SucessText: string;
  id: number;
}

export const sucessCards = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center align-items-center">
        {CardDetails.sucesscards.map((items) => {
          return (
            <>
              <div
                className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
                key={items.id}
              >
                <SingleSucessCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export const SingleSucessCards = (props: sucessCards) => {
  const { SucessImages, SucessTitle, SucessText } = props;
  return (
    <>
      <div className="row rows-cols-1 row-cols-sm-1 row-cols-md-3 rows-cols-lg-3 g-3">
        <div className="col">
          <div className="card h-100 text-center">
            <Image src={SucessImages} className="card-img-rounded-circle" alt="..." />
            <div className="card-body">
              <p className="card-text">{SucessText}</p>
              <h3 className={`card-title ${sucessCardsStyles.underlineColor}`}>
                {SucessTitle}
              </h3>
              <p className="card-text">{SucessText}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default sucessCards;
