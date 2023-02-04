import Enterpreneuepic from "../images/serviceCard/Enterpreneuepic.png"
import styles from "../styles/componentstyles/enterpreneurpage.module.scss"
import enterpreneur from '../pages/api/enterpreneur.json'
// import  Type  from "typescript"


interface ITestimonial {
    images: string;
    heading: string;
    body: string;
  }


 

 const Enterpreneuerbody =(props: ITestimonial)=>{
    const{ images, heading, body}= props;
    return(
        <main className="d-flex">

        
<div className="container mt-5">
    <div className="row">
        
        <div className= "col-lg-3 col-md-4 col-sm-12 col-xs-12 mt-4 mb-5"  >
            <div style={{width: "11rem"}}>

            <img src={Enterpreneuepic.src} alt="/"  />
            </div>
        </div>
        <div className="col-lg-2 d-xs-none d-sm-none d-md-none d-lg-block mb-5 ">
        <div className="d-flex" style={{height: 250, color: "white"}}>
  <div className="vr ms-5"></div>
</div>
        </div>
        <div className="col-lg-7 col-md-8 col-sm-12 ">
            <h1 style={{color: "white"}}>{heading}</h1>
            <p style={{color:"white"}}>{body}<br /><a href="">view website</a></p>
        </div>
    </div>
</div>
        </main>
    )
   
}



 export const Enterpreneur = () => {
	return (
		<div className="container-fluid ">
			<div className="row">
				{enterpreneur.enterpreneurshipjson.map((enterpreneurbody) => {
					return (
						<div className="col-sm-12 col-md-12 col-lg-12 p-0 " key={enterpreneurbody.id}>
							<Enterpreneuerbody  {...enterpreneurbody}></Enterpreneuerbody>
						</div>
					);
				})}
			</div>
		</div>
	);
};


export default Enterpreneur;