import React from "react";
import { useMediaQuery } from "react-responsive";

const MainFrame = (props) => {
  const { item } = props;

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });

  let containerStyle;
  let divStyle1;
  let divStyle2;
  let divStyle3;

  containerStyle = isMobile
    ? { display: "grid", gridTemplateRows: "2fr 1fr" }
    : isTablet
    ? { display: "grid", gridTemplateRows: "3fr 1fr 1fr" }
    : {
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gridTemplateRows: "4fr 1fr",
      };

  divStyle1 = isMobile
    ? { height: "60vh", alignSelf: "center", border: "1px solid black" }
    : isTablet
    ? {
        height: "54vh",
        alignSelf: "center",
        border: "1px solid black",
      }
    : { height: "72vh", alignSelf: "center", border: "1px solid black" };

  divStyle2 = isMobile
    ? { display: "none" }
    : isTablet
    ? {
        display: "flex",
        height: "18vh",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
      }
    : {
        display: "flex",
        height: "72vh",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
      };

  divStyle3 = isMobile
    ? {
        height: "30vh",
        display: "flex",
        border: "1px solid black",
        justifyContent: "center",
        alignItems: "center",
      }
    : isTablet
    ? {
        display: "flex",
        height: "18vh",
        border: "1px solid black",
        justifyContent: "center",
        alignItems: "center",
      }
    : {
        display: "flex",
        height: "18vh",
        gridColumn: "1/3",
        gridRow: "2",
        border: "1px solid black",
        justifyContent: "center",
        alignItems: "center",
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
      <div style={divStyle2}>댓글기능 (구현중.....구현하진않을것) </div>
      <div style={divStyle3}>
        <ul>
          <li>{item.name}</li>
          <li>{item.descrption}</li>
        </ul>
      </div>
    </div>
  );
};

export default MainFrame;
