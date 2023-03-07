import React from 'react'
import Barber from '../Barber/Barber'
import PriceList from '../services/PriceList'
import VisitCardHolder from '../Shop/VisitCardHolder'
import ChooseAlbum from '../SlideBarber/ChooseAlbum'
import './home.css'
import { useNavigate } from 'react-router-dom'
import barbeLinkBackground from './barberLink.jpg'
import buttonBackgroundImage from './cutIcon.png'
const Home = () => {

  const nav = useNavigate()

  var linkAlbum=()=>{
    nav('/choosealbum')
    window.scrollTo(0,0)
  }

  return (
    <>
    <Barber/>
    <VisitCardHolder/>
    <PriceList/>
    <div className="mainExamples" style={{backgroundImage:`url(${barbeLinkBackground})`, backgroundSize:'100% 100%',boxShadow:'black 5px 0 50px'}}>
      <h1>
        -
        למעבר צפייה בעבודות לדוגמא לחצו כאן
         - </h1>
         <div className="buttonLayer">
         <buttons style={{position:'absolute',backgroundImage:`url(${buttonBackgroundImage})`,backgroundSize:'100% 100%',height:'75px',width:'75px',margin:'50px'}} onClick={()=>{linkAlbum()}}></buttons>
         </div>
    </div>
    </>
  )
}

export default Home