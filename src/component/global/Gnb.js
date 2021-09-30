import React, { useState } from "react";
import { Tab, Tabs } from "@material-ui/core";

const Gnb = () => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="global-navigation-bar"
        >
          <Tab component="a" label="메인화면" href="#/" />
          <Tab component="a" label="오띄 꾸뛰르" href="#/hautecouture" />
          <Tab component="a" label="패션" href="#/passion" />
          <Tab component="a" label="하이 주얼리" href="#/highjewely" />
          <Tab component="a" label="화인 주얼리" href="#/finejewely" />
          <Tab component="a" label="워치" href="#/watch" />
          <Tab component="a" label="아이웨어" href="#/eyewear" />
          <Tab component="a" label="향수" href="#/fragment" />
          <Tab component="a" label="메이크업" href="#/makeup" />
          <Tab component="a" label="스킨케어" href="#/skincare" />
          <Tab component="a" label="샤넬소개" href="#/introduceChanel" />
        </Tabs>
    </div>
  );
};

export default Gnb;
