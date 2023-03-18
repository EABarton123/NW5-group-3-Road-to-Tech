import React from "react";
import side_image from "../assets/css/cititec-class.jpg";
import "../assets/css/content.css";
function Slide() {
  return (
    <div className='content'>
       <img className='image_content' src={side_image}


         width={170} height={70} ></img>
    </div>
  );
}

export default Slide;
