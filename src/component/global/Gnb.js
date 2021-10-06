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
          <Tab component="a" label="MAIN" href="#/" />
          <Tab component="a" label="BABY" href="#/baby" />
          <Tab component="a" label="CUTE" href="#/cute" />
          <Tab component="a" label="EDGE" href="#/edge" />
          <Tab component="a" label="PLAYGROUND" href="#/playground" />
          <Tab component="a" label="UGLY" href="#/ugly" />
          <Tab component="a" label="LAZY" href="#/lazy" />
          <Tab component="a" label="SLEEP" href="#/sleep" />
          <Tab component="a" label="SUV" href="#/suv" />
        </Tabs>
    </div>
  );
};

export default Gnb;
