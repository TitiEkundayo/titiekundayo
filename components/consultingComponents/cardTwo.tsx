// import CardContent from ".././../pages/api/CardData.json";
import Image from "next/image";
import CardContent from "../../pages/api/CardData.json";
import styles from "../../styles/componentstyles/consultingTwo.module.scss";

interface card {
  ConsultingCardImage: string;
  ConsultingCardTitle: string;
  bodyText: string;
  ConsultingCardSmallText: string;
}

export const Card = (props: card) => {
  const { ConsultingCardImage, ConsultingCardTitle, bodyText, ConsultingCardSmallText } = props;
  return (
    <>
      <div className="">
        <div className="bg-white text-black text-center">
          <Image src={ConsultingCardImage}
            className={`card-img-top img-fluid p-5 mx-auto`}
            width="150" height="150" alt="image"
          />
          <div className="row justify-content-center">
            <p className="px-4 fs-6 text-black">{bodyText}</p>
            <h5 className="fs-6">{ConsultingCardTitle}</h5>
            <hr className={`${styles.LineColor3} w-50 my-2`}/>
            <p className="text-black">{ConsultingCardSmallText}</p>
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
