import React from "react";
import logoo from "./assert/logoo.jpg";
import './App.css';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import { MdLiveTv } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { IoMdMusicalNotes } from "react-icons/io";
import st from "./assert/st.jpg";
import net from "./assert/net.jpg";
import tnpsc from "./assert/tnpsc.jpg";
import vtv from "./assert/vtv.jpg";
import ztv from "./assert/ztv.jpg";
import beauty from "./assert/beauty.jpg";
import code from "./assert/code.jpg";
import img1 from "./assert/img1";
import img2 from "./assert/img2.jpg";
import img3 from "./assert/img3.jpg";
import img4 from "./assert/img4.jpg";
import img5 from "./assert/img5.jpg";
import img6 from "./assert/img 6.jpg";
import img7 from "./assert/img7";
import img8 from "./assert/img8.jpg";
import img9 from "./assert/img9.jpg";
import ama from "./assert/ama.jpg";
import wwe from "./assert/wwe.jpg";
function App() {
  return (
     <div>
      <div className="header">
        <div className="logo">
                <img src={logoo}   height="80px" alt="img"/>
        </div>
        <div className="input">
          <input placeholder="Search......."></input><span className="span"><IoIosSearch /></span>
          </div> 
          </div> 
      <div className="section">
        <div className="left">
             <div className="icon"><IoMdHome /> </div>
             <div className="icon"> <IoLinkSharp />  </div>
             <div className="icon"> <IoMdMusicalNotes />  </div>
             <div className="icon"><MdOutlineLaptopChromebook /> </div>
             <div className="icon"><MdLiveTv /> </div>
             <div className="icon"><IoLogoGameControllerB /> </div>
        </div>
        <div className="Right">
          <div className="row1">
            <div className="img1">
              <img className="image1" src={img1} height="200px" width="450px" alt="img"/>
              <h2><span className="name"><img src={st} alt="st"/></span>Sports</h2>
              <p>This is The Reason Why We Love India National Volleyball Team !!!
              </p>
            </div>
            <div className="img1">
              <img className="image1" src={img2} height="200px" width="450px" alt="img"/>
              <h2><span className="name"><img src={net} alt="st"/></span>Movie</h2>
              <p>Adangaatha Asuran - Video Song | RAAYAN | Dhanush | Sun Pictures | A.R. Rahman | Prabhu Deva
              </p>
            </div>
            <div className="img1">
              <img className="image1" src={img3} height="200px" width="450px" alt="img"/>
             <h2><span className="name"><img src={wwe} alt="st"/></span>WWE Match</h2>
             <p>Gunther vs. Randy Orton – World Heavyweight Title Match: WWE Bash in Berlin 2024 highlights
             </p>
            </div>
          </div>
          <div className="row2">
            <div className="img1">
              <img className="image1" src={img4} height="200" width="450px" alt="img"/>
              <h2><span className="name"><img src={ztv} alt="st"/></span>Dance Show</h2>
              <p>Amazing Performance of #DeepikaDamu & #Kalai 🔥 | Jodi Are U Ready | Episode Preview
              </p>
            </div>
           
            <div className="img1">
              <img className="image1" src={img5} height="200px" width="450px" alt="img"/>
              <h2><span className="name"><img src={beauty} alt="st"/></span>Makeup</h2>
              <p>
Makeup Video 🖤 #makeuptutorial #nyadollie #mua #reels #darkskin #beauty #makeup #fentybeauty #grwm</p>
            </div>
            <div className="img1">
              <img className="image1" src={img6} height="200px" width="450px" alt="img"/>
              <h2><span className="name"><img src={ama} alt="st"/>
              </span>Dress Hall</h2>
              <p> 


Amazon Dresses Haul 🤯</p>
            </div>
          </div>
          <div className="row3">
            <div className="img1">
              <img className="image1" src={img7} height="200px" width="450px" alt="img"/>
              <h2><span className="name"><img src={vtv} alt="st"/></span>StartMusic</h2>
              <p>Start Music Season 5 | 1st September 2024 - Promo 3</p>
            </div>
            <div className="img1">
              <img className="image1" src={img8} height="200px" width="450px" alt="img"/>
              <h2><span className="name"><img src={code} alt="st"/></span>Coding class</h2>
              <p>How to learn CODING??😨 Jus 10mins, get started with coding(தமிழ்)🛑 Evlo easy ah coding
              </p>
            </div>
            <div className="img1">
              <img className="image1" src={img9} height="200px" width="450px" alt="img"/>
              <h2><span className="name"><img src={tnpsc} alt="st"/></span>TNPSC Class</h2>
              <p>TNPSC | Maths Shortcuts 2 | Group 1, 2, 4 & VAO | Veranda Race</p>
            </div>
          </div>
        </div>
      </div>


     </div>


  );
}

export default App;

