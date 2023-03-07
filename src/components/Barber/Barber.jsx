import React from 'react'
import Image from './barber.jpg'
import './barber.css'
import moshe from './moshePhoto.jpg'
import backgroundImageBrown from './brown.jpg' 
import backgroundVideo from './ProjectName.mp4'
import lineDivider from './dividerLine.png'
const Barber = () => {
  return (
    <>
    <div className="mainBarberVideo">
      <video autoPlay loop muted >
        <source src={backgroundVideo} type="video/mp4"/>
      </video>
      <div className="textDivBarber">
        <h1>Moshe Davidov Barber Shop</h1>
        <p>   ברוכים הבאים למספרה של משה דוידוב , ספר גברים ונשים מקצועי עם ניסיון של 15 שנים , אם אתם מחפשים ספר אמין ומדוייק שאוהב להשקיע הגעתם למקום הנכון  </p>
      </div>
    </div>
    <div className='mainBarber' style={{backgroundImage:`url(${backgroundImageBrown})`,backgroundSize:'100% 100%'}}>
    <div className='moveDiv'>
      <div className='textDiv'>
        <h1 style={{textAlign:'end',textShadow:'white 5px 2px 5px',textDecoration:'underline'}}>קצת עלינו </h1>
        <p style={{textAlign:'end',marginTop:'25px',textShadow:'black 5px 2px 5px',color:'white'}}>אצלנו במספרה השירות שתקבלו הוא השירות הטוב ביותר שתוכלו לקבל , מעבר לאווירה החמה כל אחד אצלנו מקבל את מלוא תשומת הלב והזמן שנדרש לתספורת האישית שלו , נשמח לראות אותכם אצלנו בקרוב :)   </p>
      </div>
      <div>
      <img src={moshe} alt="" style={{height:'350px',width:'350px',borderRadius:'25px',boxShadow:'black 1px 0 50px'}}/>
      </div>
      </div>

    <div className='barberLine' >
      <img src={lineDivider} alt="" />
    </div>
    <div className='barberContainer'>
        <div className='barberBackground'>
            <img src={Image} alt="barber"/>
        </div>
        <div className='barberDescription'>
          <div>
          <h1>hello</h1>
          <p>אצלנו במספרה תוכלו למצוא את השירותים כגון תספורות שיער , גילוח זקן , צביעת שיער ברמה הגבוהה ביותר (גברים/נשים)</p>
          </div>
        </div>
    </div>

    </div>
    </>
  )
}

export default Barber
