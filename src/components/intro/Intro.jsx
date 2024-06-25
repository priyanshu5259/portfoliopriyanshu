// import { useEffect , useRef } from "react"
// import "./Intro.scss"
// import { init } from 'ityped'

// export default function Intro() {

//   const textRef=useRef();
//   useEffect(()=>{
//     init(textRef.current,{
//       showCursor:false,
//       backDelay: 1500,
//       backSpeed: 60,
//       showCursor: true,
//       strings: ["Data Science" , "GenAI" , "Web Development"],
//     });
//   },[]);
//   return (
//     <div className="intro" id="intro">
//       <div className="left">
//         <div className="imgContainer">
//           <img src="assets/Photo_Priyanshu2.png" alt=""/>
//         </div>
//       </div>
//       <div className="right">
//         <div className="wrapper">
//           <h2>Hello, I'm</h2>
//           <h1>Priyanshu Dayaramani</h1>
//           <h3>Computer Science Student</h3>
//           <h4>
//             <span ref={textRef}></span>
//           </h4>
//         </div>
//         <a href="#portfolio">
//           <img src="assets/icons8-expand-arrow-32.png" alt=""/>
//         </a>
//       </div>
//     </div>
//   )
// }


import "./Intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
   
    
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Data Science", "GenAI", "Web Development"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Photo_Priyanshu2.png" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm</h2>
          <h1>Priyanshu Dayaramani</h1>
          <h3>Computer Science Student</h3>
          <h4>
            <span ref={textRef}></span> Enthusiast
          </h4>
        </div>
        <a href="#portfolio">
          <img src="assets/icons8-expand-arrow-32.png" alt=""/>
        </a>
      </div>
    </div>
  );
}

