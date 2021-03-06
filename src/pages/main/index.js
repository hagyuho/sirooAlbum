import React, { useEffect, useRef, useState } from "react";
import DesktopFrame from "../../component/main/DesktopFrame";
import { useMediaQuery } from "react-responsive";
import MobileFrame from "../../component/main/MobileFrame";
import TabletFrame from "../../component/main/TabletFrame";

const MainPage = () => {
  const contents = [
    {
      name: "ICECREAM",
      img: "media/icecreamSiroo.mp4",
      type: "video/mp4",
      descrption: "아이스크림 먹기",
      path: "/icecream",
    },
    {
      name: "ROUTINE",
      img: "media/babySiroo1.jpg",
      type: "img",
      descrption: "시루와 하루를 지내는 방법",
      path: "/routine",
    },
    {
      name: "CUTE",
      img: "media/babySiroo2.jpg",
      type: "img",
      descrption: "하늘만 봐도 귀여웠던 시절",
      path: "/cute",
    },
    {
      name: "EDGE",
      img: "media/babySiroo3.jpg",
      type: "img",
      descrption: "시크한 뽕주디",
      path: "/edge",
    },
    {
      name: "PLAYGROUND",
      img: "media/funSiroo1.jpg",
      type: "img",
      descrption: "모든 곳이 그의 놀이터",
      path: "/playground",
    },
    {
      name: "UGLY",
      img: "media/funSiroo2.jpg",
      type: "img",
      descrption: "빻음의 시작",
      path: "/ugly",
    },
    {
      name: "LAZY",
      img: "media/sleepSiroo1.jpg",
      type: "img",
      descrption: "귀찮은 자가 높이 올라간다",
      path: "/lazy",
    },
    {
      name: "SLEEP",
      img: "media/sleepSiroo2.jpg",
      type: "img",
      descrption: "자고 일어나고의 반복",
      path: "/sleep",
    },
    {
      name: "SUV",
      img: "media/sleepSiroo3.jpg",
      type: "img",
      descrption: "자동차로의 부활",
      path: "/suv",
    },
  ];

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  // const windowFrame = useRef();
  // const [windowFrameWidth, setWindowFrameWidth] = useState();
  // useEffect(() => {
  //   window.addEventListener('resize', resizing);
  // }, []);

  // const resizing = () =>{
  //   setWindowFrameWidth( windowFrame.current.clientWidth);
  // }

  return (
    <>
      <div
      // ref={windowFrame}
      >
        {isMobile
          ? // windowFrameWidth < 768 ?
            contents.map((item, index) => (
              <MobileFrame key={index} item={item} />
            ))
          : isTablet
          ? // windowFrameWidth < 1024 ?
            contents.map((item, index) => (
              <TabletFrame key={index} item={item} />
            ))
          : contents.map((item, index) => (
              <DesktopFrame key={index} item={item} />
            ))}
      </div>
    </>
  );
};

export default MainPage;
