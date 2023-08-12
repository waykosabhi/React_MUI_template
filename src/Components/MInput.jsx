import { MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const MInput = () => {
  const [city, setCity] = useState();
  return (
    <>
      <TextField label="enter Something" variant="standard"></TextField>
      <TextField label="enter Something" variant="outlined"></TextField>
      <TextField label="enter Something" variant="filled"></TextField>
      <hr />
      <TextField
        label="enter Something"
        defaultValue="John Deo"
        variant="filled"
      ></TextField>
      <hr />

      <TextField label="enter Address" multiline variant="outlined"></TextField>
      <TextField label="enter" error variant="outlined"></TextField>
      <hr />
      <h1>{city}</h1>

      <TextField
        onChange={(e) => setCity(e.target.value)}
        fullWidth
        label="Choose City"
        helperText
        select
        variant="outlined"
      >
        <MenuItem value="Delhi">Delhi</MenuItem>
        <MenuItem value="Mumbai">Mumbai</MenuItem>
        <MenuItem value="Pune">Pune</MenuItem>
      </TextField>
      <hr />
      {["primary", "secondary", "success", "warning", "error"].map((item) => (
        <TextField
          color={item}
          fullWidth
          label={`Enter Something ${item}`}
          variant="outlined"
        />
      ))}
    </>
  );
};

export default MInput;
