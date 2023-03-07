import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.css'
const ContactForm = () => {
    const form = useRef();
      
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_91yldn2',
            'template_stfk1yi',
            form.current, 
            'hhRA9UKAyDYpDJX_c'
            )
          .then((result) => {
            alert('הודעתכם נשלחה בצלחה !')
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    

  return (
    <div className="mainForm">
            <h1 className='formH1'>מלאו את הפרטים ונחזור אליכם בהקדם</h1>
            <form ref={form} onSubmit={sendEmail}>
    <label>שם מלא</label>
    <input className='nameInput' type="text" name="user_name" />
    <label>כתובת אימייל</label>
    <input  className='emailInput' type="email" name="user_email" />
    <label>תוכן ההודעה</label>
    <textarea name="message" />
    <input className='submitInput' type="submit" value="Send" />
  </form>  
    </div>

  )
}

export default ContactForm



