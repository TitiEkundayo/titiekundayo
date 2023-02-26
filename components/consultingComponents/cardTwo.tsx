// import CardContent from ".././../pages/api/CardData.json";
import CardContent from "../../pages/api/CardData.json";
import styles from "../../styles/componentstyles/consultingTwo.module.scss";

interface card {
  image: string;
  title: string;
  bodyText: string;
  smallText: string;
}

export const Card = (props: card) => {
  const { image, title, bodyText, smallText } = props;
  return (
    <>
      <div className="">
        <div className="bg-white text-center">
          <img src={image} style={{width: 40+"%"}} className="mx-auto py-3" alt="image" />
          <div className="row justify-content-center">
            <p className="px-4 fs-6">{bodyText}</p>
            <h5 className="fs-6">{title}</h5>
            <hr className={`${styles.LineColor3} w-50 my-2`}/>
            <p>{smallText}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const CardMappingTwo = () => {
  return (
    <>
      <div className="row d-flex justify-content-center px-4">
        {CardContent.CardDetails.map((CardItems) => {
          return (
            <>
              <div className="col-lg-3 col-md-3 col-sm-12 my-3" key={CardItems.id}>
                <Card {...CardItems} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
