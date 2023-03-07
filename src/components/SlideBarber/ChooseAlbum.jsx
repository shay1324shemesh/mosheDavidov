import React from 'react'
import { useNavigate } from 'react-router-dom'
import photosLogo from './photosLogo.png'
import videosLogo from './videosLogo.png'
import backgroundImageBlack from './blackBackground.jpg'
const ChooseAlbum = () => {

    const nav = useNavigate()
    var linkVideos = () => {
        nav('/video')
    }
    var linkPhotos = () => {
        nav('/barberslide')
    }
  return (
    <>

    <div className="controllButtoms" style={{height:'500px',width:'100%',backgroundSize:'100% 100%',backgroundImage:`url(${backgroundImageBlack})`}}>
    <h1 style={{textAlign:'center',padding:'50px',color:'white',textShadow:'  grey 2px 0 5.5px',textDecoration:'underline'}}>בחר אלבום</h1>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <h2 style={{color:'white'}}>
                Photos
            </h2>
        <button style={{height:'50px',width:'50px',border:'none',borderRadius:'25px'}} onClick={linkPhotos}><img src={photosLogo} alt="" style={{heigth:'100%',width:'100%'}}/></button>
        </div>
        <div  style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',margin:'50px'}}>
        <h2 style={{color:'white'}}>
        Videos
        </h2>
        <button style={{height:'50px',width:'50px',border:'none',borderRadius:'25px'}} onClick={linkVideos}><img src={videosLogo} alt="" style={{height:'100%',width:'100%'}}/></button>
        </div>


    </div>
    </>
  )
}

export default ChooseAlbum