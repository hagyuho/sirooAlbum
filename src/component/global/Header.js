import React from "react";
import Gnb from "./Gnb";

const Header = () => {
  
  
  const headerStyle = {
    height:'10vh',
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    position:"sticky",
    top: 0,
  };
  const headerNameStyle = {
    fontSize: "2rem",
    margin:"auto",
    alignSelf:"center",
  };


  return (
    <div className="header" style={headerStyle}>
      <div className="header-name" style={headerNameStyle} onClick={()=>window.location.href="http://localhost:3000/"}>
        SIROO 
      </div>
      <Gnb/>
    </div>
  );
};

export default Header;
