// import "./Work.scss"

// export default function Work() {
//   return (
//     <div className="work" id="work">
//       <div className="slider">
//         <div className="container">
//           <div className="item">
//             <div className="left">
//               <div className="leftContainer">
//                 <div className="imgContainer">
//                   <img src="assets/company logo.png" alt=""/>
//                 </div>
//                 <h2>Pharmarack Technologies,Pune</h2>
//                 <h4>Data Analytics Intern, October 2023- December 2023</h4>
//                 <p>
//                 As a Data Analytics Intern, I conduct daily sales analysis using a diverse toolkit of tools and programming languages,
//                 including SQL, Excel, Jupyter notebooks, R, and Python. In addition to my daily responsibilities, I’m actively engaged in a project that involves leveraging data-driven insights to
//                 enhance decision-making processes and drive business growth.
//                 My role plays a pivotal part in optimizing sales strategies and contributing to the company’s data analytics initiatives.
//                 Explored ways to visualize and send a daily report of the employees working at the grass root level for increasing the
//                 reach.
//                 </p>
//               </div>
//             </div>
//             <div className="right">

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// import{ useState } from "react";
// import "./Work.scss";

// export default function Work() {
//   const[currentSlide,setCurrentSlide]=useState(0);
  
//   const data=[
//     {
//       id:"1",
//       icon:"assets/company logo.png",
//       title:"Pharmarack Technologies, Pune",
//       time:"Data Analytics Intern, October 2023-December 2023",
//       desc:"As a Data Analytics Intern, I conduct daily sales analysis using a diverse toolkit of tools and programming languages, including SQL, Excel, Jupyter notebooks, R, and Python. In addition to my daily responsibilities, I’m actively engaged in a project that involves leveraging data-driven insights to enhance decision-making processes and drive business growth. My role plays a pivotal part in optimizing sales strategies and contributing to the company’s data analytics initiatives. Explored ways to visualize and send a daily report of the employees working at the grass root level for increasing the reach.",
//       img:"assets/images_intern.png",
//     },
//     {
//       id:"2",
//       icon:"assets/company logo2.png",
//       title:"VectrFlow Innovation Lab",
//       time:"SDE Intern, January 2024- March 2024",
//       desc:"Assisted in development of the front end of a web application and work with technologies such as Python, React, Typescript, Nodejs, and Docker. Worked on projects related to Generative AI, Language Models, and NLP. Collaborated with team members using version control systems such as Git to organize modifications and assign tasks. Managed company databases efficiently using MySQL server for structured data storage and Firebase for real-timesynchronization and user authentication.",
//       img:"assets/images_intern.png",
//     }

//   ]

//   const handleClick=(way)=>{
//     way==="left" ? setCurrentSlide(currentSlide>0 ? currentSlide-1 : 2) 
//     : setCurrentSlide(currentSlide<data.length -1 ? currentSlide + 1 : 0);
//   };
//   return (
//     <div className="work" id="work">
//       <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
//         {data.map((d) => (
//           <div className="container">
//           <div className="item">
//             <div className="left">
//               <div className="leftContainer">
//                 <div className="imgContainer">
//                   <img src={d.icon} alt="Company Logo" />
//                 </div>
//                 <h2>{d.title}</h2>
//                 <h4>{d.time}</h4>
//                 <p>
//                   {d.desc}
//                 </p>
//                 <span>Proof</span>
//               </div>
//             </div>
//             <div className="right">
//               <img src="assets/images_intern.png" alt="" />
//             </div>
//           </div>
        
//         </div>))}
//       </div>
//       <img src="assets/icons8-arrow-24.png" className="arrow left" alt=""  onClick={()=>handleClick("left")}/>
//       <img src="assets/icons8-arrow-24.png" className="arrow right" alt=""  onClick={()=>handleClick()}/>
//     </div>
//   );
// }


// import { useState } from "react";
// import "./Work.scss";

// export default function Work() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const data = [
//     {
//       id: "1",
//       icon: "assets/company logo.png",
//       title: "Pharmarack Technologies, Pune",
//       time: "Data Analytics Intern, October 2023-December 2023",
//       desc: "As a Data Analytics Intern, I conduct daily sales analysis using a diverse toolkit of tools and programming languages, including SQL, Excel, Jupyter notebooks, R, and Python. In addition to my daily responsibilities, I’m actively engaged in a project that involves leveraging data-driven insights to enhance decision-making processes and drive business growth. My role plays a pivotal part in optimizing sales strategies and contributing to the company’s data analytics initiatives. Explored ways to visualize and send a daily report of the employees working at the grass root level for increasing the reach.",
//       img: "assets/images_intern.png",
//     },
//     {
//       id: "2",
//       icon: "assets/company logo2.png",
//       title: "VectrFlow Innovation Lab",
//       time: "SDE Intern, January 2024- March 2024",
//       desc: "Assisted in development of the front end of a web application and work with technologies such as Python, React, Typescript, Nodejs, and Docker. Worked on projects related to Generative AI, Language Models, and NLP. Collaborated with team members using version control systems such as Git to organize modifications and assign tasks. Managed company databases efficiently using MySQL server for structured data storage and Firebase for real-time synchronization and user authentication.",
//       img: "assets/images_intern.png",
//     },
//   ];

//   const handleClick = (direction) => {
//     if (direction === "left") {
//       setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1);
//     } else {
//       setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
//     }
//   };

//   return (
//     <div className="work" id="work">
//       <div
//         className="slider"
//         style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
//       >
//         {data.map((d) => (
//           <div className="container" key={d.id}>
//             <div className="item">
//               <div className="left">
//                 <div className="leftContainer">
//                   <div className="imgContainer">
//                     <img src={d.icon} alt="Company Logo" />
//                   </div>
//                   <h2>{d.title}</h2>
//                   <h4>{d.time}</h4>
//                   <p>{d.desc}</p>
//                   <span>Proof</span>
//                 </div>
//               </div>
//               <div className="right">
//                 <img src={d.img} alt="Internship Image" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <img
//         src="assets/icons8-arrow-24.png"
//         className="arrow left"
//         alt="Left Arrow"
//         onClick={() => handleClick("left")}
//       />
//       <img
//         src="assets/icons8-arrow-24.png"
//         className="arrow right"
//         alt="Right Arrow"
//         onClick={() => handleClick()}
//       />
//     </div>
//   );
// }




import { useState } from "react";
import "./Work.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "assets/company logo.png",
      title: "Pharmarack Technologies, Pune",
      time: "Data Analytics Intern, October 2023-December 2023",
      // desc: "As a Data Analytics Intern, I conduct daily sales analysis using a diverse toolkit of tools and programming languages, including SQL, Excel, Jupyter notebooks, R, and Python. In addition to my daily responsibilities, I’m actively engaged in a project that involves leveraging data-driven insights to enhance decision-making processes and drive business growth. My role plays a pivotal part in optimizing sales strategies and contributing to the company’s data analytics initiatives. Explored ways to visualize and send a daily report of the employees working at the grass root level for increasing the reach.",
      img: "assets/images_intern.png",
    },
    {
      id: "2",
      icon: "assets/company logo2.png",
      title: "VectrFlow Innovation Lab",
      time: "SDE Intern, January 2024- March 2024",
      // desc: "Assisted in development of the front end of a web application and work with technologies such as Python, React, Typescript, Nodejs, and Docker. Worked on projects related to Generative AI, Language Models, and NLP. Collaborated with team members using version control systems such as Git to organize modifications and assign tasks. Managed company databases efficiently using MySQL server for structured data storage and Firebase for real-time synchronization and user authentication.",
      img: "assets/images_intern.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <h4>{d.time}</h4>
                  {/* <p>{d.desc}</p> */}
                  <span>Proof</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/icons8-arrow-24.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
      <img src="assets/icons8-arrow-24.png" className="arrow right" alt="" onClick={() => handleClick("right")} />
    </div>
  );
}
