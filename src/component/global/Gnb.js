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
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="global-navigation-bar"
        >
          <Tab component="a" label="REACT 반응형 예제1" href="#/" />
          <Tab component="a" label="REACT 반응형 예제2" href="#/2" />
          <Tab component="a" label="REACT 반응형 예제3" href="#/3" />
          <Tab component="a" label="ROUTINE" href="#/routine" />
        </Tabs>
    </div>
  );
};

export default Gnb;
