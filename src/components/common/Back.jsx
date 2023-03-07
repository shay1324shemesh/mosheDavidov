import React from 'react'

const Back = ({ name ,title ,cover }) => {
  return (
    <>
    <div className="back">
        <div className="container" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center'}} >
           <h2 style={{textShadow:'black 5px 2px 5px'}}>{name}</h2>
            <h1 style={{textShadow:'black 5px 2px 5px'}}>{title}</h1>
        </div>
        <img src={cover} alt="" />
    </div>
    </>
  )
}

export default Back