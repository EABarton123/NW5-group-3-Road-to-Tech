import React from "react";
import Capgemini from "../image 1.png";
import FinancialTimes from "../image 2.png";
import Bbc from "../image 3.png";
import STV from "../image 6.png";
import Carphone from "../image 4.png";
import Cominc from "../image 5.png";
import Style from "./Footer.module.css";

const Footer = () => {
	return <div>
     <div className={Style.footerConteiner} >
     <hr></hr>
        <p>GREAT PLACES WHERE CODE YOUR FUTURE GRADUATES WORK</p>
        <hr></hr>
        <div className={Style.footerImage}>
        <div >
				<img
					className= {Style.CapgeminiPhoto}
					src={Capgemini}
					alt="Capgemini"
				/>
			</div>
            <div >
				<img
					className= "FinancialTimes"
					src={FinancialTimes}
					alt="FinancialTimes"
				/>
			</div>
            <div >
				<img
					className= "Bbc "
					src={Bbc }
					alt="Bbc "
				/>
			</div>
            <div >
				<img
					className= "STV"
					src={STV}
					alt="STV "
				/>
			</div>
            <div >
				<img
					className= "Carphone"
					src={Carphone}
					alt="Carphone"
				/>
			</div>
            <div >
				<img
					className= "Cominc"
					src={Cominc}
					alt="Cominc"
				/>
			</div>
            </div>



    </div>
    </div>;
};

export default Footer;
