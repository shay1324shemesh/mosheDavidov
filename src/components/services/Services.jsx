import React from 'react'
import Back from '../common/Back'
import FeaturedCard from '../Home/featured/FeaturedCard'
import img from './useServiecs.jpg'
import './service.css'
import ladyIcon from './person-female.png'
import blackBack from './black.jpeg'
import beardImage from './410492.png'
import beardImage2 from './beard1.png'

const Services = () => {

  const mainStyles = {
    height:'1200px',
    width:'100%',
    backgroundColor:'grey',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  }
  const priceStyles = {
    height:'850px',
    width:'60%',
    backgroundColor:'black',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    borderRadius:'50px'
  }
  return (
    <>
    <div className="mainPrice" style={mainStyles}>
      <h1 style={{textAlign:'center',padding:'50px',fontSize:'50px',color:'black',textDecoration:'underline'}}>
       המחירון שלנו   
      </h1>
      <div className='priceCard' style={priceStyles}>
      <div className='backgroundLine' style={{    borderRadius:'50px'
,height:'95%',width:'95%',border:'2.5px solid  gold',boxShadow:'white 5px 2px 100px',display:'flex',flexDirection:'column', alignItems:'center'}}>   
       <h2  style={{marginTop:'25px',color:'white',textAlign:'center',display:'flex',alignItems:'center',color:'goldenrod'}}>    <img src={beardImage} alt="" style={{height:'50px',width:'50px'}}/>      Moshe Davidov Barber Shop <img src={beardImage} alt="" style={{height:'50px',width:'50px'}}/></h2>
        <h1 style={{textAlign:'center',padding:'30px',fontSize:'50px',color:'white',textDecoration:'underline'}}>: מחירון תספורות  </h1>
        <div className='listDiv' style={{    borderRadius:'25px'
,height:'60%',width:'80%',border:'goldenrod 1px solid',marginTop:'35px',backgroundImage:`url(${blackBack})`,backgroundRepeat:'no-repeat',backgroundSize:'100%'}}>
          <ul className='topPriceList' style={{border:'1px solid white',color:'white',width:'100%',height:'20%',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
            <li  style={{width:'80%',textAlign:'center'}}>תספורת לגבר</li>
            <div className='line' style={{height:'100%',width:'1px',backgroundColor:'white'}}>

</div>
            <li  style={{width:'18.8%',textAlign:'center'}}>₪70</li>
          </ul>
          <ul style={{border:'1px solid white',color:'white',width:'100%',height:'20%',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
            <li style={{width:'80%',textAlign:'center'}}>תספורת לגבר + גילוח זקן</li>
            <div className='line' style={{height:'100%',width:'0.2%',backgroundColor:'white'}}>

            </div>
            <li style={{width:'18.8%',textAlign:'center'}}>₪90</li>
          </ul>
          <ul style={{color:'white',width:'100%',height:'20%',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
            <li  style={{width:'80%',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',justifyContent:'space-evenly'}}>~ גילוח זקן ~ <img src={beardImage2} alt="" style={{heigth:'50px',width:'50px'}}/></li>
            <div className='line' style={{height:'100%',width:'1px',backgroundColor:'white'}}>

</div>
            <li  style={{width:'18.8%',textAlign:'center'}}>₪20</li>
          </ul>
          <ul style={{border:'1px white solid',color:'white',width:'100%',height:'20%',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
            <li  style={{display:'flex',justifyContent:'center', alignItems:'center',justifyContent:'space-evenly',width:'80%',textAlign:'center'}}>  ~ תספורת לאישה ~ <img src={ladyIcon} alt="" style={{height:'50px', width:'50px'}}/></li>
            <div className='line' style={{height:'100%',width:'1px',backgroundColor:'white'}}>

</div>
            <li  style={{width:'18.8%',textAlign:'center'}}>₪270</li>
          </ul>
          <ul style={{color:'white',width:'100%',height:'20%',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
            <li  style={{width:'80%',textAlign:'center'}}>תספורת לילד</li>
            <div className='line' style={{height:'100%',width:'1px',backgroundColor:'white'}}>

</div>
            <li  style={{width:'18.8%',textAlign:'center'}}>₪55</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Services



{/* <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" class="bi bi-scissors" viewBox="0 0 50 50">  <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
         </svg> */}