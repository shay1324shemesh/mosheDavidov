import React from 'react'
import '../home.css'
import { useNavigate } from 'react-router-dom'
import barbeLinkBackground from '../barberLink.jpg'
import buttonBackgroundImage from '../cutIcon.png'

const AlbumsLink = () => {

    const nav = useNavigate()

    var linkAlbum=()=>{
      nav('/choosealbum')
      window.scrollTo(0,0)
    }

  return (
    <div className="mainExamples" style={{backgroundImage:`url(${barbeLinkBackground})`, backgroundSize:'100% 100%'}}>
    <h1>
      -
      למעבר צפייה בעבודות לדוגמא לחצו כאן
       - </h1>
       <div className="buttonLayer">
       <buttons style={{position:'absolute',backgroundImage:`url(${buttonBackgroundImage})`,backgroundSize:'100% 100%',height:'75px',width:'75px',margin:'50px'}} onClick={()=>{linkAlbum()}}></buttons>
       </div>
  </div>
  )
}

export default AlbumsLink