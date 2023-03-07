import React from 'react'
import image1 from './imageBarber1.jpg'
import image2 from './imageBarber2.jpg'
import image3 from './imageBarber3.jpg'
import image4 from './imageBarber4.jpg'
import image5 from './imageBarber5.jpg'
import image6 from './imageBarber6.jpg'
import image7 from './imageBarber7.jpg'
import image8 from './imageBarber8.jpg'
import image9 from './imageBarber9.jpg'
import image10 from './imageBarber10.jpg'
import image11 from './imageBarber11.jpg'
import image12 from './imageBarber12.jpg'

import ImageSlider from './ImageSlider'
import backgroundImage from './greyBlack.jpg'
import './slideBarber.css'
import { useNavigate } from 'react-router-dom'


const SlideBarber = () => {

    const nav = useNavigate()

    const slides =[
        image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12
    ]
    const containerStyles = {
        display:'inline-block',
    }
    const backgroundStyle = {
        backgroundImage:`url(${backgroundImage})`,
        backgroundSize:'100% 100%',
        backgroundRepeat:'no-repeat'
    }

  return (
    <>
    <div className='backgroundBarber' style={backgroundStyle}>
    <h1 className='photosH1'> : תמונות לדוגמא  </h1>
      <div className='controlMain'>
      <div className='changeApp' style={containerStyles}>
        <ImageSlider slides={slides}/>
      </div>
      </div>
      <div style={{display:'flex',justifyContent:'center',padding:'50px'}}>
      <button onClick={()=>{nav('/choosealbum')}} style={{height:'75px',width:'75px',borderRadius:'50%',justifyContent:'center',display:'flex',alignItems:'center',fontSize:'20px'}}>back</button>
      </div>
    </div>

    </>
  )
}

export default SlideBarber
