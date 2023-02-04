import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";


import { useEffect } from "react";
import { useRouter } from "next/router";







interface btnprops {
	classes: string;
	btnText: string;
}

const Button = (props: btnprops) => {
	const { classes, btnText } = props;
	return <button className={classes}>{btnText}</button>;
};

export default Button;




// export const ScrollButton = () => {
//   const [visible, setVisible] = useState(false);

//   const toggleVisible = () => {
//     const scrolled = document.documentElement.scrollTop;
//     if (scrolled > 300) {
//       setVisible(true);
//     } else if (scrolled <= 300) {
//       setVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
//     });
//   };

//   window.addEventListener("scroll", toggleVisible);

//   return (
//     <>
//       {" "}
//       <FaArrowCircleUp
//         className="scrolltotopBtn pe-4"
//         onClick={scrollToTop}
//         style={{
//           display: visible ? "inline" : "none",
//           // width: "100px",
//           height: "30px",
//         }}
    //   />
      {/* <div className=" scrolltotopBtn ">
        {" "}
        <i
          class="bi bi-arrow-up-square scrolltotopBtn  "
          onClick={scrollToTop}
          style={{
            display: visible ? "inline" : "none",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        
        ></i>
      </div> */}
    {/* </>
  );
}; */}

// export function GoToTop() {
//   const routePath = useRouter();
//   const onTop = () => {
//     window.scrollTo(0, 0);
//   };
//   useEffect(() => {
//     onTop();
//   }, [routePath]);

//   return null;
// }




export  function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

//scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <h3>Go up!</h3>
        </div>
      )}
    </div>
  );
}


