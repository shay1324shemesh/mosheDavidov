import React from 'react'
import Back from '../common/Back'
import img from '../SlideBarber/image3.jpg'
import './contact.css'
import Logo from '../common/Header/Logo.jpg'
import chairImage from './barberChair.jpg'
import ContactForm from './ContactForm'

const Contact = () => {
  const chairStyles = {
    backgroundImage:`url(${chairImage})`,
    heigth:'100%',
    width:'500px',
    backgroundSize:'100% 100%',
    backgroundRepeat:'no-repeat',
    marginTop:'50px',
  }
  // var LogoStylesFunction =()=>{
  //   if(isDesktop == true){
  //     return LogoStyles={
  //       backgroundSize:'100% 100%',
  //       height:'130px',
  //       width:'200px',
  //       marginLeft:'50px',
  //       backgroundRepeat:'no-repeat',
  //       borderRadius:'25px',
  //     }
  //   }
  //   else{
  //     return LogoStyles={
  //       backgroundSize:'100% 100%',
  //       height:'130px',
  //       width:'200px',
  //       marginLeft:'0',
  //       backgroundRepeat:'no-repeat',
  //       borderRadius:'25px',
  //     }
  //   }
  // }
  return (
    <>
    <section className='contact mb'>
      <Back name='צרו איתנו קשר' title='! קבעו תור לתספורת כבר מעכשיו' cover={img} />
      <div className="containerForm">
        <div className='formLogoDiv'>
          <div>
          <img src={Logo} alt="" className='formLogo'/>
          </div>
        </div>
        <ContactForm/>
          <div className='chairImage' style={chairStyles}>
          </div>
      </div>

    </section>

    </>
  )
}

export default Contact