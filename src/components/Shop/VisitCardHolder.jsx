import React from 'react'
import { useState } from 'react'
import { Animated } from 'react-animated-css'
import VisitCard from './VisitCard'
import './visitcardHolder.css'
import blackBackgroundImage from './blackBackground.jpg'


const VisitCardHolder = () => {

  const[flag,setFlag]=useState(false)
  var changeFlag = () => {
    setFlag(!flag)
    setFlipped(false)
  }

  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className='mainVisitCard' style={{backgroundImage:`url(${blackBackgroundImage})`,backgroundSize:"100% 100%"}}>
      <h1 className='firstH1'>לחצו על כרטיס הביקור למטה למידע נוסף</h1>
      <button className='visitBut' onClick={()=>changeFlag()}>Show/Hide - Visit Card</button>
      { flag ?  <Animated 
      animationIn="fadeInLeftBig" 
      animationOut="fadeOutLeftBig"
      isVisible={true}
      > 
      <VisitCard flipped={flipped} handleFlip={handleFlip}/>
      </Animated>  :
      <Animated 
      isVisible={false}
      > 
      <VisitCard flipped={flipped} handleFlip={handleFlip}/>
      </Animated> 
      }

    </div>
  )
}

export default VisitCardHolder
