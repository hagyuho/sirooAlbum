import React from "react";

const MainFrame = (props) => {
  const { item } = props;

  const containerStyle = {
    width: "100%",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems:"center",
    backgroundImage: `url(${item.img})`,
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
  };

  const wordAreaStyle = {
    textAlign: "center",
    color: "#FFFFFF",
  };

  const liStyle = {
    listStyle: "none",
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
  };

  return (
    <div className="main-frame-container" style={containerStyle}>
      <div className="word-area" style={wordAreaStyle}>
        <ul style={liStyle}>
          <li style={{fontSize: "12px"}}>{item.name}</li>
          <li style={{fontSize: "30px"}}>{item.descrption}</li>
          <li>
            <div style={watchMoreStyle}>더 보기</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainFrame;
