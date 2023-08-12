import { Button, ButtonGroup, Fab, IconButton } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Add, Delete, Remove, StarRate } from "@mui/icons-material";

const MButtons = () => {
  return (
    <>
      <Button>TeXt</Button>
      <Button variant="contained">contained</Button>
      <Button variant="outlined">outlined</Button>
      <hr />

      <Button variant="contained" size="large">
        large
      </Button>
      <Button variant="contained" size="medium">
        medium
      </Button>
      <Button variant="contained" size="small">
        small
      </Button>
      <hr />

      <Button variant="contained">Primary</Button>
      <Button variant="contained" color="secondary">
        secondary
      </Button>
      <Button variant="contained" color="success">
        success
      </Button>
      <Button variant="contained" color="error">
        error
      </Button>
      <hr />

      <Button variant="contained" startIcon={<AddIcon />}>
        Add post
      </Button>
      <Button variant="contained" endIcon={<AddIcon />}>
        Add post
      </Button>
      <hr />

      <IconButton color="primary">
        <Add />
      </IconButton>
      <IconButton color="secondary">
        <Remove />
      </IconButton>
      <IconButton color="success">
        <StarRate />
      </IconButton>
      <IconButton color="error">
        <Delete />
      </IconButton>
      <hr />

      <ButtonGroup variant="outlined" size="large" color="success">
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="secondary">
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </ButtonGroup>
      <ButtonGroup variant="text">
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </ButtonGroup>
      <hr />

      <Fab color="secondary">
        <Add />
      </Fab>
      <Fab color="primary">
        <Add />
      </Fab>
      <Fab color="success">
        <Add />
      </Fab>
      <Fab color="error">
        <Add />
      </Fab>
      <Fab>
        <Add />
      </Fab>

      <hr />

      {["large", "medium", "small"].map((item) => (
        <Fab size={item}>
          <Add />
        </Fab>
      ))}
      <hr />
      {["", "primary", "secondary", "success", "error"].map((item) => (
        <Fab variant={item}>
          <Add />
        </Fab>
      ))}
      <hr />

      <Fab variant="extended">
        <Add />
        Add Todo
      </Fab>
    </>
  );
};

export default MButtons;
