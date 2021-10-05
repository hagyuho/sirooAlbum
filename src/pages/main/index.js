import React from "react";
import MainFrame from "../../component/main/MainFrame";
import MainVideoFrame from "../../component/main/MainVideoFrame";

const MainPage = () => {
  const contents = [
    { name: "BABY", img: "media/babySiroo1.jpg", descrption:"이제 막 와서 꼬물거리다" },
    { name: "CUTE", img: "media/babySiroo2.jpg", descrption:"하늘만 봐도 귀여웠던 시절" },
    { name: "EDGE", img: "media/babySiroo3.jpg", descrption:"시크한 뽕주디" },
    { name: "PLAYGROUND", img: "media/funSiroo1.jpg", descrption:"모든 곳이 그의 놀이터" },
    { name: "UGLY", img: "media/funSiroo2.jpg", descrption:"빻음의 시작" },
    { name: "LAZY", img: "media/sleepSiroo1.jpg", descrption:"귀찮은 자가 높이 올라간다" },
    { name: "SLEEP", img: "media/sleepSiroo2.jpg", descrption:"자고 일어나고의 반복" },
    { name: "SUV", img: "media/sleepSiroo3.jpg", descrption:"자동차로의 부활" },
  ];

  const liStyle = {
    listStyle:"none",
  };

  return (
    <div>
      <MainVideoFrame/>
        {contents.map((item, index) => (
         <MainFrame style={liStyle} key={index} item={item}/>
        ))}
    </div>
  );
};

export default MainPage;
