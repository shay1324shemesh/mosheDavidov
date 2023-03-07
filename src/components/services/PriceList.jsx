import React from 'react'
import priceListImage from './mainMenu.png'
import './priceList.css'

import useMediaQuery from '../common/Header/mediaQuery'

var menuStyles;
const PriceList = () => {

    const isDesktop = useMediaQuery('(max-width:830px)');
    var changeMenu = () => {
        if(isDesktop == true){
            menuStyles = {
                backgroundImage:`url(${priceListImage})`,
                backgroundSize:'100% 100%',
                height:'65%',
                width:'80%',
                boxShadow:'white 1px 0 75px',
                borderRadius:'10px'

            }
        }
        else{
            menuStyles = {
                backgroundImage:`url(${priceListImage})`,
                backgroundSize:'100% 100%',
                height:'70%',
                width:'40%',
                boxShadow:'white 1px 0 75px',
                borderRadius:'10px'
            }
        }
    }

  return (
    <div className='backgroundPriceList'>
        <h1 className='priceH1'>- המחירון שלנו -</h1>
            {changeMenu()}
        <div className='priceListMenu' style={menuStyles}>

        </div>
    </div>
  )
}

export default PriceList