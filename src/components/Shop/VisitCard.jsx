import { useState } from "react";
import "./visitcard.css";
import Logo from '../common/Header/Logo.jpg'
import VCardCreator from '../Shop/VCardCreator';
import greyBackgroundImage from './whiteTexture.jpg'
import useMediaQuery from "../common/Header/mediaQuery";
function VisitCard({flipped , handleFlip}) {

  const isDesktop = useMediaQuery('(max-width: 829px)')

  var vCard = {
    firstName : 'אברהם',
    lastName : 'שמש',
    organization : 'שמש קבלנות ויזמות',
    workPhone : '+972-50-866-9944',
    note : 'קבלן רשום עם ניסיון של מעל 30 שנה בתחום'
  }
  


  let createVcard=()=>{
    const FileSaver = require('file-saver');
    const blob = new Blob([ vCard.getFormattedString() ], 
    {type: "text/vcard;charset=utf-8"});
     FileSaver.saveAs(blob, "blob.vcf");
  }
  // const [flipped, setFlipped] = useState(false);

  // const handleFlip = () => {
  //   setFlipped(!flipped);
  // };

  return (
    <div
      className={`visit-card ${flipped ? "flipped" : ""}`}
      style={isDesktop ? { width: "350px", height: "250px", borderRadius: "50px" } 
                       : { width: "500px", height: "300px", borderRadius: "50px"}
            }

      onClick={handleFlip}
    >
      <div className="front">
        <h2 className="visitCardName">משה דוידוב</h2>
        <p>ספר מקצועי</p>
        {isDesktop ? <img src={Logo} alt="" height={'100px'} width={'150px'}/>
                   : <img src={Logo} alt="" height={'150px'} width={'225px'}/>

        }
      </div>
      <div className="back" style={{backgroundImage:`url(${greyBackgroundImage})`,backgroundSize:'100% 100%'}}>
        <div className="firstBack">
        <VCardCreator/>
        {isDesktop ? <ul>
          <li style={{marginTop:'15px',display:'flex',justifyContent:'flex-end'}}> <a href="mailto:avraham1962@gmail.com" className="emailLink" style={{fontSize:'15px'}}>john.doe@example.com :</a> <button className="emailBut" style={{fontSize:'15px'}}>אימייל</button></li>
          <li style={{display:'flex',justifyContent:'flex-end',marginTop:'15px'}}> <a href="tel:+972 52-377-3413" className="phoneLink" style={{fontSize:'15px'}}>(+972) 52-377-3413 :</a> <button className="phoneBut" style={{fontSize:'15px'}}>טלפון</button></li>

        </ul>
                  :<ul>
                  <li style={{marginTop:'15px',display:'flex',justifyContent:'flex-end'}}> <a href="mailto:avraham1962@gmail.com" className="emailLink" style={{fontSize:'20px'}}>john.doe@example.com :</a> <button className="emailBut" style={{fontSize:'20px'}}>אימייל</button></li>
                  <li style={{display:'flex',justifyContent:'flex-end',marginTop:'15px'}}> <a href="tel:+972 52-377-3413" className="phoneLink" style={{fontSize:'20px'}}>(+972) 52-377-3413 :</a> <button className="phoneBut" style={{fontSize:'20px'}}>טלפון</button></li>
        
                </ul>
      }
        <div className="imageLogoContainer">
        {isDesktop ? <img src={Logo} alt="" height={'100px'} width={'150px'}/>
                   : <img src={Logo} alt="" height={'0px'} width={'0px'}/>

        }
        </div>
   
        </div>
        <div className="secondBack">
        <div className="onlyBack">
        
        </div>
        <div className="onlyBack2">
        
        </div>
        <div className="onlyBack3">
        
        </div>
        <div className="onlyBack4">
        
        </div>
        <div className="onlyBack5">
        
        </div>
        </div>
      </div>
    </div>
  );
}

export default VisitCard;
