import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React, { useState } from "react";

const Header = () => {
  
  
  const headerStyle = {
    display: "flex",
    justifyContent: 'center',
  };
  const headerNameStyle = {
    fontSize: "50px",
    margin:"auto",
    alignSelf:"center",
  };

  const iconBoxStyle = {
    // marginLeft: "auto",
    alignSelf:'flex-end',
  }


  const [value, setValue] = useState(0);

  const onChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div className="header" style={headerStyle}>
      <div>
          숨겨진 메뉴 영ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ
      </div>
      <div className="header-name" style={headerNameStyle}>
        CHANEL
      </div>
      <Box style={iconBoxStyle}>
      <BottomNavigation showLabels value={value} onChange={onChange}>
        <BottomNavigationAction label="SearchIcon" />
        <BottomNavigationAction label="MyPage" />
        <BottomNavigationAction label="Star" />
        <BottomNavigationAction label="shopping" />
      </BottomNavigation>
      </Box>
    </div>
  );
};

export default Header;
