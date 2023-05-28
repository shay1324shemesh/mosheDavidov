import React from 'react'
import { footer } from '../../Data/data'
import Logo from '../Header/Logo.jpg'
import './footer.css'
import locationIcon from './goldLocation.png'
import { useNavigate } from 'react-router-dom'
import instegramIcon from './instegramIcon.png'
import facebookIcon from './facebookIcon.png'
import whiteLogo from './whiteCallLogo.png'
import websiteIcon from './websiteIcon.png'
import useMediaQuery from '../Header/mediaQuery'
const Footer = () => {

    const isDesktop = useMediaQuery('max-width:829px')
    const nav = useNavigate();
    var albumBut = () => {
        nav('/choosealbum')
        window.scrollTo(0,0)
    }
    var contactBut = () => {
        nav('/contact')
        window.scrollTo(0,0)
    }
    var priceListBut = () => {
        nav('/services')
        window.scrollTo(0,0)
    }
    var homeBut = () => {
        nav('/')
        window.scrollTo(0,0)
    }
    var dataBut = () => {
        nav('/barber')
        window.scrollTo(0,0)
    }
    var itemsBut = () => {
        nav('/visitcard')
        window.scrollTo(0,0)
    }
    var sendToSign=()=>{
        nav('/contact')
        window.scrollTo(0,0)
    }
  return (
    <>
    <section className='footerContact'>
        <div className="containerFooter">
            <div className="send flex">
                <div className="text">
                    <h1>? מעוניין לקבוע תור</h1>
                    <p>צור איתנו קשר עוד היום לקביעת תורים ומידע נוסף</p>
                </div>
                <button className='btn5' onClick={()=>{sendToSign()}}>Book Now</button>
            </div>
        </div>
    </section>
    <div className='footerBox'>
    <div className='innerBoxFooter'>

    <div className='leftFooter'>
        <h1 style={{color:'white',marginTop:'50px'}}>|  עקבו אחרינו  | </h1>
        <div className='buttnsDivFooter' >
        <div style={{height:'50px',width:'50px' ,margin:'25px',border:'1px goldenrod solid',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src={instegramIcon} alt="" style={{height:'75%', width:'75%'}}/>
        </div>
        <div style={{height:'50px',width:'50px',border:'1px goldenrod solid',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src={facebookIcon} alt="" style={{height:'75%', width:'75%',borderRadius:'5px'}}/>    
        </div>     
        </div>
        </div>
        <div className='leftFooterUp'>
            <div className='innerFooterUp'>
            <h1 style={{color:'white',marginBottom:'25px'}}> | צרו איתנו קשר | </h1>
            </div>
            <div className='controladdress'>
            <div className='addressText'>
                <h3 style={{color:'white'}}>כתובת</h3>
                <p style={{color:'white'}}>פתח תקווה , יוסף ספיר 18</p>
            </div>
            <div className='addressFooter'>
                <div style={{height:'50px',width:'50px',border:'1px goldenrod solid',marginBottom:'10px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src={locationIcon} alt="" style={{heigth:'75%',width:'75%'}}/>
                </div>
            </div>
            </div>
            <div className='controladdress'>
            <div className='addressText'>
                <h3 style={{color:'white'}}>אתר</h3>
                <p style={{color:'white'}}>www.moshedavidovbarber.hair</p>
            </div>
            <div className='addressFooter'>
                <div style={{height:'50px',width:'50px',border:'1px goldenrod solid',marginBottom:'10px'}}>
                    <img src={whiteLogo} alt="" style={{heigth:'100%',width:'100%'}}/>
                </div>
            </div>
            </div>

            <div className='controladdress'>
            <div className='addressText'>
                <h3 style={{color:'white'}}>טלפון</h3>
                <p style={{color:'white'}}>0523773413</p>
            </div>
            <div className='addressFooter'>
                <div style={{height:'50px',width:'50px',border:'1px goldenrod solid',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src={websiteIcon} alt="" style={{heigth:'80%',width:'80%'}}/>
                </div>
            </div>
            </div>
        </div>
        </div>

    <div>
        <div className='menuFooter' style={isDesktop ? {margin:'50px',display:'flex',flexDirection:'column'} : {display:'flex',flexDirection:'column',margin:'0'}}>
            <h1 style={{color:'white',textAlign:'end',marginTop:'50px'}}>| תפריט האתר | </h1>
            <div className='menuFooterButtoms'>
            <button style={{marginTop:'35px'}} onClick={()=>{itemsBut()}}>כרטיס ביקור</button>
            <button onClick={()=>priceListBut()}>מחירון</button>
            <button onClick={()=>contactBut()}>צור קשר</button>
            <button onClick={()=>albumBut()}>אלבומים</button>
            <button onClick={()=>homeBut()}>עמוד הבית</button>
            </div>
        </div>
        </div>
    </div>
    <div className="legal">
        <span> Apps and Websites Professional Developing By BrandBuild</span>
    </div>
    </>
  )
}

export default Footer


{/* <footer>
<div className="container">
    <div className="box">
        <div className="logo" >
            <img src={Logo} alt="" />
            <h2>Don You Need Help With Anything ?</h2>
            <p>Receive updates, hot deals, tutorials, discounts sent srtaignt in your inbox every mounth</p>
            <div className="input flex">
                <input type="text" placeholder='Email Address' name='' id=''/>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
    {footer.map((val) => (
        <div className="box">
            <h3>{val.title}</h3>
            <ul>
                {val.text.map((items) => (
                    <li>{items.list}</li>
                ))}
            </ul>
        </div>
    ))}
</div>
</footer> */}