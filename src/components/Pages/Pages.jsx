import React from 'react'
import Header from '../common/Header/Header'
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Home from '../Home/Home'
import Footer from '../common/Footer/Footer'
import About from '../About/About'
import Services from '../services/Services'
import VisitCard from '../Shop/VisitCard.jsx'
import VisitCardHolder from '../Shop/VisitCardHolder'
import Blog from '../Blog/Blog'
import Pricing from '../Pricing/Pricing'
import Contact from '../Contact/Contact'
import Barber from '../Barber/Barber'
import SlideBarber from '../SlideBarber/SlideBarber'
import VideoSlider from '../SlideBarber/VideoSlider'
import ChooseAlbum from '../SlideBarber/ChooseAlbum'
import PriceList from '../services/PriceList'
// import Shop from '../Shop/Shop'
import AccessibilityMenu from '../Accessibility/AccessibilityMenu'
import WhatsAppButton from '../../WhatsappWidget/WhatsAppButton'
const Pages = () => {
  return (
    <>
    <Router>
     <Header/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='mosheDavidov' element={<Home/>}></Route>
        <Route path='/Real-Estate' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<PriceList/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/barber' element={<Barber/>}></Route>
        <Route path='/barberslide' element={<SlideBarber/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/choosealbum' element={<ChooseAlbum/>}></Route>
        <Route path='/video' element={<VideoSlider/>}></Route>
        <Route path='/visitcard' element={<VisitCardHolder/>}></Route>
        {/* <Route path='/shop' element={<Shop/>}></Route> */}
      </Routes>
      <Footer/>
      <AccessibilityMenu/>
      <WhatsAppButton/>

    </Router>
    </>
  )
}

export default Pages