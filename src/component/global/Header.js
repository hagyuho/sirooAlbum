import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React, { useState } from "react";

const Header = () => {
  
  
  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
  };
  const headerNameStyle = {
    fontSize: "50px",
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
      <Box style={iconBoxStyle}>
      <BottomNavigation showLabels value={value} onChange={onChange}>
        <BottomNavigationAction label="Instagram" onClick={()=>window.open("https://www.instagram.com/siroo_9092/")}/>
        <BottomNavigationAction label="About Siroo" />
        <BottomNavigationAction label="About Butler" />
        <BottomNavigationAction label="ETC" />
      </BottomNavigation>
      </Box>
    </div>
  );
};

export default Header;
