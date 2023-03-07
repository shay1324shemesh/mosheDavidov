import React from "react";
import iconWhatsapp from './whatsapp.png'

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972523773413", "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "50px",
        right: "50px",
        color: "#fff",
        borderRadius: "50%",
        width: "75px",
        height: "75px",
        textAlign: "center",
        lineHeight: "60px",
        fontSize: "30px",
        cursor: "pointer",
        fontWeight: "bold",
        zIndex: "999",
      }}
      onClick={handleWhatsAppClick}
    >
      <div className="whatsapp" aria-hidden="true" style={{backgroundImage:`url(${iconWhatsapp})` ,backgroundSize:'100% 100%',height:'100%',width:'100%'}}>

      </div>
    </div>
  );
};

export default WhatsAppButton;
