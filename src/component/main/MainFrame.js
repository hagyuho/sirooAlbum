import React from "react";
import { Link } from "react-router-dom";

const MainFrame = (props) => {
  const { item } = props;

  //grid css
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gridTemplateRows: "4fr 1fr",
  };

  const divStyle1 = {
    height: "72vh",
    alignSelf: "center",
    border: "1px solid black",
  };
  const divStyle2 = {
    height: "72vh",
    alignSelf: "center",
    border: "1px solid black",
  };

  const divStyle3 = {
    display: "flex",
    height: "18vh",
    gridColumn: "1/3",
    gridRow: "2",
    border: "1px solid black",
    justifyContent: "center",
    alignItems : "center",

  };

  const frameStyle = {
    height: "100%",
    backgroundImage: `url(${item.img})`,
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
  };


  return (
    <div style={containerStyle}>
      <div style={divStyle1}>
        {item.type === "video/mp4" ? (
          <video width="100%" height="100%" autoPlay loop muted>
            <source src={item.img} type="video/mp4"></source>
          </video>
        ) : (
          <div className="main-frame-container" style={frameStyle}></div>
        )}
      </div>
      <div style={divStyle2}>{item.name} </div>
      <div style={divStyle3}> {item.descrption} </div>
    </div>
  );
};

export default MainFrame;
