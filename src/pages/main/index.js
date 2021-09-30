import React from "react";

const MainPage = () => {
  const contents = [
    { name: "메이크업", img: "1" },
    { name: "아이웨어", img: "1" },
    { name: "화인주얼리", img: "1" },
    { name: "워치", img: "1" },
    { name: "스킨케어", img: "1" },
    { name: "향수", img: "1" },
    { name: "하이주얼리", img: "1" },
    { name: "오뜨꾸뛰르", img: "1" },
  ];

  return (
    <div>
      <ul>
        {contents.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
