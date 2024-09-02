import React from "react";
import logo from "./assert/logo.png";
import './App.css';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import { MdLiveTv } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { IoMdMusicalNotes } from "react-icons/io";
import img1 from "./assert/img1";
import img2 from "./assert/img2.jpg";
import img3 from "./assert/img3.jpg";
import img4 from "./assert/img4.jpg";
import img5 from "./assert/img5.jpg";
import img6 from "./assert/img 6.jpg";
import img7 from "./assert/img7";
import img8 from "./assert/img8.jpg";
import img9 from "./assert/img9.jpg";

function App() {
  return (
     <div>
      <div className="header">
        <div className="logo">
                <img src={logo}   height="250px" alt="img"/>
        </div>
        <div className="input">
          <input ></input><span><IoIosSearch /></span>
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
              <img className="image1" src={img1} height="250px" width="450px" alt="img"/>
              <h1>Sports</h1>
            </div>
            <div className="img1">
              <img className="image1" src={img2} height="250px" width="450px" alt="img"/>
              <h1>Movie</h1>
            </div>
            <div className="img1">
              <img className="image1" src={img3} height="250px" width="450px" alt="img"/>
              <h1>WWE Match</h1>
            </div>
          </div>
          <div className="row2">
            <div className="img1">
              <img className="image1" src={img4} height="250px" width="450px" alt="img"/>
              <h1>Dance Show</h1>

            </div>
            <div className="img1">
              <img className="image1" src={img5} height="250px" width="450px" alt="img"/>
              <h1>Makeup</h1>
            </div>
            <div className="img1">
              <img className="image1" src={img6} height="250px" width="450px" alt="img"/>
              <h1>Dress Hall</h1>
            </div>
          </div>
          <div className="row3">
            <div className="img1">
              <img className="image1" src={img7} height="250px" width="450px" alt="img"/>
              <h1>StartMusic</h1>
            </div>
            <div className="img1">
              <img className="image1" src={img8} height="250px" width="450px" alt="img"/>
              <h1>Coding class</h1>
            </div>
            <div className="img1">
              <img className="image1" src={img9} height="250px" width="450px" alt="img"/>
              <h1>TNPSC Class</h1>
            </div>
          </div>
        </div>
      </div>


     </div>


  );
}

export default App;
