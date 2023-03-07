import React from 'react'
import ImageSlider from './ImageSlider'
import video2 from './video2.mp4'
import video1 from './video1.mp4'
import blackBackground from './greyBlack.jpg'
import useMediaQuery from '../common/Header/mediaQuery'
import { useNavigate } from 'react-router-dom'
import VideoSliderData from './VideoSliderData'
var containerStyles;
const VideoSlider = () => {
    const isDesktop = useMediaQuery('(max-width:830px)');
    const nav = useNavigate()
    const slides =[
        video2,video1,video2
    ]

    var showVideoStyles=()=>{
      if(isDesktop == true){
        containerStyles = {
          width:'450px',
          height:'450px',
        }
      }
      else{
        containerStyles = {
          width:'750px',
          height:'750px',
        }
      }
    }
    const mainStyles = {
      backgroundImage:`url(${blackBackground})`,
      backgroundSize:'100% 100%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    }
  return (
    <>
    {showVideoStyles()}
      <div className='controlMain' style={mainStyles}>
      <h1 className='photosH1'> : סרטונים לדוגמא  </h1>
      <div style={containerStyles}>
        <VideoSliderData slides={slides} />
      </div>
      <div style={{display:'flex',justifyContent:'center', margin:'50px'}}>
      <button onClick={()=>{nav('/choosealbum')}} style={{height:'75px',width:'75px',borderRadius:'50%',justifyContent:'center',display:'flex',alignItems:'center',fontSize:'20px'}}>back</button>
      </div>
      </div>


    </>
  )
}

export default VideoSlider