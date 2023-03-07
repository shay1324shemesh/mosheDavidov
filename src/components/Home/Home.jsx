import React from 'react'
import Barber from '../Barber/Barber'
import PriceList from '../services/PriceList'
import VisitCardHolder from '../Shop/VisitCardHolder'
import './home.css'
import AlbumsLink from './AlbumsLink/AlbumsLink'
const Home = () => {

  return (
    <div className='mainHome'>
    <Barber/>
    <VisitCardHolder/>
    <PriceList/>
    <AlbumsLink/>
    </div>
  )
}

export default Home