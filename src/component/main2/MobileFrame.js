import React from 'react';

const MobileFrame = (props) => {
    const { item } = props;
    //grid css

    const containerStyle = {
        display: "grid",
        gridTemplateRows: "2fr 1fr",
    }
    const divStyle1 = {
        height: "60vh",
        alignSelf: "center",
        border: "1px solid black",
    };

    const divStyle3 = {
        height: "30vh",
        display: "flex",
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
          <div style={divStyle3}>
            <ul>
              <li>{item.name}</li>
              <li>{item.descrption}</li>
            </ul>
          </div>
        </div>
      );
};

export default MobileFrame;