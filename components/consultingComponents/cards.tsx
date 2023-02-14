// import image from ".././../public/images/HomeImgs/how do we solve it img.png";
import Image from "next/image";
import cardimg from ".././../public/images/ConsultingImgs/HowDoWeSolveItImg.png";
// import styles from ".././../styles/componentstyles/consulting.module.scss";

const Cards = () =>{
    return(
<div className="card">
<Image src={cardimg} width="307" height={326} alt="Card image cap"/>
 
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
);
};
export default Cards;