import React, { useEffect } from 'react'
import { useState } from 'react'
import './videoSlider.css'
let slideStyle;
const VideoSliderData = ({slides}) => {
    var video = document.getElementById('vid1');

    const[currentIndex,setCurrentIndex]=useState(0);
    // const isDesktop = useMediaQuery('(max-width:830px)')
    // var setGalleryPhotos = () => {
    //     if( isDesktop == true ){
    //         slideStyle = {
    //             width:'400px',
    //             height:'400px',
    //             borderRadius:'25px',
    //             boxShadow:'0 20px 55px white'
    //         }
    //     }
    //     else{
    //         slideStyle = {
    //             width:'750px',
    //             height:'750px',
    //             borderRadius:'25px',
    //             boxShadow:'0 20px 55px white'
    //         }
    //     }
    // }

    


    const sliderStyles = {
        height:'100%',
        position:'relative',

    }

    const leftArrowStyles = {
        position:'absolute',
        top:'50%',
        transform: 'translate(0, -50%)',
        left:'32px',
        fontSize:'40px',
        color:'#fff',
        zIndex: 1,
        cursor:'pointer'
    }
    const rightArrowStyles = {
        position:'absolute',
        top:'50%',
        transform: 'translate(0, -50%)',
        right:'32px',
        fontSize:'40px',
        color:'#fff',
        zIndex: 1,
        cursor:'pointer'
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex)
        video.load()

    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
        video.load()

    }

    const dotsContainerStyles = {
        display:'flex',
        justifyContent:'center',
    }

    const dotStylesVideo = {
        margin:'0 3px',
        cursor:'pointer',
        fontSize:'20px',
        color:'black',
        
    }


    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

  return (
      <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}> ← </div>
        <div style={rightArrowStyles} onClick={goToNext}> → </div>
             <div className='videoDiv'>
                    <video id='vid1' style={{heigth:'100%',width:'100%',borderRadius:'25px'}}  controls={true}>
                    <source src={slides[currentIndex]} type="video/mp4" />
                </video>

                    </div>
        <div style={dotsContainerStyles}>
            {slides.map((slide,slideIndex)=>(
                <div className='dotDiv' key={slideIndex} style={dotStylesVideo} onClick={()=> goToSlide(slideIndex)}>
                    ●      
                </div>
            ))}
        </div>
    </div>
  )
}

export default VideoSliderData
