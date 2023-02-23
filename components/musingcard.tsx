import CardDetails from "../pages/api/card.json"
interface Product {
  Image: string;
  Title: string;
  Bodytext: string;
  Link: string;
  Id: number;
}

export const MusingCard = (props: Product) => {
  const { Image, Title, Bodytext, Link, Id } = props;
  return (
    <>
      <div className="card">
        <img src={Image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text">{Bodytext}</p>
          <a href="#">{Link}</a>
        </div>
      </div>
    </>
  );
};

export const CardMapping = () => {
  return (
    <div className="contianer">
      <div className="row d-flex justify-content-center">
        {CardDetails.ourServiceCards.map((item) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-12" key={item.Id}>
              <MusingCard {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};