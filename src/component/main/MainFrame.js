import React from "react";
import { Link } from "react-router-dom";

const MainFrame = (props) => {
  const { item } = props;

  const containerStyle = {
    width: "100%",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundImage: `url(${item.img})`,
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
  };

  const wordAreaStyle = {
    textAlign: "center",
    color: "#FFFFFF",
    textShadow: "1px 1px 10px #000",
  };

  const liStyle = {
    listStyle: "none",
    textAlign: "center",
  };

  const watchMoreStyle = {
    border: "1px solid white",
    color: "black",
    backgroundColor: "white",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "40px",
    width: "100px",
    height: "40px",
    alignSelf: "center",
    margin: "15px",
  };
  
  const linkStyle={
    textDecoration: "none",
  }

  return (
    <div>
      {item.type === "video/mp4" ? (
        <div>
          <video width="100%" height="600px" autoPlay loop muted>
            <source src={item.img} type="video/mp4"></source>
          </video>
        </div>
      ) : (
        <div className="main-frame-container" style={containerStyle}>
          <div className="word-area" style={wordAreaStyle}>
            <ul style={liStyle}>
              <li style={{ fontSize: "20px", margin: "15px" }}>{item.name}</li>
              <li style={{ fontSize: "40px", margin: "15px" }}>
                {item.descrption}
              </li>
              <li style={{ display: "inline-block" }}>
                <Link to={item.path} style={linkStyle}>
                  <div style={watchMoreStyle}>더 보기</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainFrame;
