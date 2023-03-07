import { useState } from "react";
import "./visitcard.css";
import Logo from '../common/Header/Logo.jpg'
import VCardCreator from '../Shop/VCardCreator';
import greyBackgroundImage from './whiteTexture.jpg'

function VisitCard() {
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
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`visit-card ${flipped ? "flipped" : ""}`}
      style={{ width: "500px", height: "300px", borderRadius: "50px" }}
      onClick={handleFlip}
    >
      <div className="front">
        <h2 className="visitCardName">משה דוידוב</h2>
        <p>ספר מקצועי</p>
        <img src={Logo} alt="" height={'150px'} width={'225px'}/>
      </div>
      <div className="back" style={{backgroundImage:`url(${greyBackgroundImage})`,backgroundSize:'100% 100%'}}>
        <div className="firstBack">
        <VCardCreator/>
        <ul>
          <li style={{marginTop:'15px',display:'flex',justifyContent:'flex-end'}}> <a href="mailto:avraham1962@gmail.com" className="emailLink">john.doe@example.com :</a> <button className="emailBut">אימייל</button></li>
          <li style={{display:'flex',justifyContent:'flex-end',marginTop:'15px'}}> <a href="tel:+972 52-377-3413" className="phoneLink">(+972) 52-377-3413 :</a> <button className="phoneBut">טלפון</button></li>

        </ul>
        <div className="imageLogoContainer">
        <img src={Logo} alt=""/>

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
