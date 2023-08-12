import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Rating,
  Slider,
  Switch,
} from "@mui/material";
import React from "react";

const RadioCheckboxSwitch = () => {
  return (
    <>
      <RadioGroup row>
        {["male", "female", "other"].map((item) => (
          <FormControlLabel
            value={item}
            key={item}
            control={<Radio color="secondary" />}
            label={item}
          />
        ))}
      </RadioGroup>
      <hr />
      <FormGroup row>
        {["html", "css", "React"].map((item) => (
          <FormControlLabel
            value={item}
            key={item}
            label={item}
            control={<Checkbox color="secondary" />}
          />
        ))}
      </FormGroup>
      <hr />

      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <hr />

      <Switch color="primary" />
      <Switch color="secondary" />
      <Switch color="warning" />
      <Switch color="error" />
      <Switch color="success" />
      <hr />

      <Slider
        step={10}
        color="secondary"
        marks={[
          { value: 10, label: "small" },
          { value: 20, label: "Medium" },
          { value: 30, label: "High" },
          { value: 50, label: "Extrem High" },
        ]}
        min={10}
        max={50}
        valueLabelDisplay="auto"
      />
      <hr />

      <Rating defaultValue={3.5} precision={0.5} />
    </>
  );
};

export default RadioCheckboxSwitch;
