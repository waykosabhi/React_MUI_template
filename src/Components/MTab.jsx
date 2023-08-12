import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

const MTab = () => {
  const [value, setValue] = useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
        <Tab value="four" label="Item four" />
      </Tabs>
    </>
  );
};

export default MTab;
