import { MusingNavTitle } from "@/components/Navbar";
import styles from "../../styles/generalstyles/colors.module.scss";
import musingstyles from "../../styles/pagesstyle/musing.module.scss";
import Image from "next/image";
import musingimg from "../../public/images/musingpagesimg/musingimg.png";
import musing2 from "../../public/images/musingpagesimg/musing2.png";




const Musingreadmore = () => {
    return ( 
        <div>

            <div>
                <MusingNavTitle/>
			</div>
            <div>
                <Blogone/>
            </div>
        </div>
        
    );
};

const Blogone = () => {
    return (
        <div className="container">
            <div className="text-white mt-5 p-2">
                <div className="text-center mt-5">
                    <p>16 October, 2022</p>
                    <h3 className={`${styles.secColor} fw-bold fs-1`}> Blog One</h3>
                </div>
                <div className=" mt-5 mb-5">
                    <Image
                        className={`img-fluid mx-auto d-block w-100 ${musingstyles.img}`}
                        src={musingimg}
                        width=" "
                        alt="musingimage"
                                
                    />
                </div>
                <div>
                    <div className="mt-2 fs-3">
                        <p className="text-center mx-auto w-75">
                            Lorem ipsum dolor lorem ipsum dolor lorem
                            orem ipsum dolor lorem ipsum dolor lorem
                        </p>
                    </div>
                    <p className="text-start mt-2">
                        Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                        Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor. Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                        Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor. Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                        Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor. Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                        Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
                        lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                    </p>
                </div>
<<<<<<< HEAD
                <div className="mt-5 mb-5">    
=======
                <div className="mt-5 mb-5">
>>>>>>> blessing_branch
                    <Image
                        className={`img-fluid rounded mx-auto d-block w-75 ${musingstyles.img}`}
                        src={musing2}
                        width=" "
                        alt=""
                    />
                </div>
                <div>
                    <p className="text-start">
                        Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                        Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                        Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                        Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                        Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                        Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                        Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                        Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                    </p>
                </div>
                    
            </div>
        </div>
    );
};

export default Musingreadmore