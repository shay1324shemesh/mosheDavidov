import React, { useState } from "react"
import "./header.css"
import { nav } from "../../Data/data"
import Logo from './Logo.jpg'
import { Link } from "react-router-dom"
import useMediaQuery from "./mediaQuery"

let task;
let deleteStyles;
const Header = () => {
  const [navList, setNavList] = useState(false)
  const isDesktop = useMediaQuery('(max-width: 829px)');
  var changeSit=()=>{
    if(isDesktop == true){
      setNavList(!navList)
      window.scrollTo(0,0)

    }
    else{
      window.scrollTo(0,0)
    }
  }
  var holdMenuBut=()=>{
      setNavList(!navList)
      window.scrollTo(0,0)
  }
  var keepStyle=()=>{
    if(isDesktop == true ){
      deleteStyles = {
        backgroundColor:'grey',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%'
      }
    }
    else{
      deleteStyles = {
        display:'none'
      }
    }
  }
  return (
    <>
    {keepStyle()}
    <header>
        <div className='container flex'>
          <div className='logo'>
            <img src={Logo} alt="" height={'100px'} width={'150px'} style={{marginLeft:'50px'}}/>
          </div>
          <div className='nav'>
  
            <ul  className='shay' style={{display:'block'}}>
           {nav.map((list, index) => (
                <li key={index} style={{display:'inline',marginLeft:'15px',marginRight:'15px'}}>
                      <Link to={list.path}><button onClick={()=>{changeSit()}}  className="hhll" style={{color:'white',fontFamily:'poppins',fontSize:'20px',backgroundColor:'black',textShadow:' goldenrod 2px 1px 2px'}}>{list.text}</button></Link>
                 </li>
              ))}                          
            </ul>                     
          </div>
          {isDesktop ?  <p style={{display:'none'}}>
            shay
          </p>
          : <div className='buttonCall' style={{marginRight:'50px'}}>
            <button className='btn1' style={{borderRadius:'15px',width:'220px',height:'50px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'17.5px',backgroundColor:'transparent',boxShadow:'white 1px 0 5px'}}>
              <a href="tel:+972 52-377-3413">0523773413 - חייגו אלינו </a>
            </button>
          </div>}


<div className='toggle'>
            <button onClick={() => holdMenuBut()}>{navList ? <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
}</button>
          </div>
        </div>
      </header>
      {navList ? <div style={deleteStyles}>     
       <ul  className='shayApp' style={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}}>
      {nav.map((list, index) => (
           <li key={index} style={{display:'inline',width:'100%'}}>
                 <Link to={list.path}><button onClick={()=>{changeSit()}}  className="hhll" >{list.text}</button></Link>
            </li>
         ))}                          
       </ul></div> 
       : <p style={{display:'none'}}>none</p>
         }            

    </>
  )
}

export default Header
