import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React, { useState } from "react";
import Gnb from "./Gnb";

const Header = () => {
  
  
  const headerStyle = {
    height:'10vh',
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
  };
  const headerNameStyle = {
    fontSize: "2rem",
    margin:"auto",
    alignSelf:"center",
  };

  const iconBoxStyle = {
    alignSelf:'flex-end',
  }


  const [value, setValue] = useState(0);

  const onChange = (event, newValue) => {
    setValue(newValue);
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
