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
          <Tab component="a" label="" href="#/" />
          <Tab component="a" label="BABY" href="#/hautecouture" />
          <Tab component="a" label="CUTE" href="#/passion" />
          <Tab component="a" label="EDGE" href="#/highjewely" />
          <Tab component="a" label="PLAYGROUND" href="#/finejewely" />
          <Tab component="a" label="UGLY" href="#/watch" />
          <Tab component="a" label="LAZY" href="#/eyewear" />
          <Tab component="a" label="SLEEP" href="#/fragment" />
          <Tab component="a" label="SUV" href="#/makeup" />
        </Tabs>
    </div>
  );
};

export default Gnb;
