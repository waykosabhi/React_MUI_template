import {
  Alert,
  AlertTitle,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  LinearProgress,
  Skeleton,
  Snackbar,
  Typography,
} from "@mui/material";

import React, { useState } from "react";

const FeedBack = () => {
  const [show, setshow] = useState(false);
  const arr = ["primary", "secondary", "warning", "success", "error", "info"];
  return (
    <>
      {arr.map((item) => (
        <>
          <hr />
          <Alert severity={item}> {item} </Alert>
        </>
      ))}
      <hr />

      {arr.map((item) => (
        <>
          <hr />
          <Alert severity={item} variant="filled">
            {" "}
            <AlertTitle> {item} </AlertTitle>
            <Typography variant={item}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Alert>
        </>
      ))}
      <hr />

      {arr.map((item) => (
        <>
          <hr />
          <Alert severity={item} variant="outlined">
            {" "}
            <AlertTitle> {item} </AlertTitle>
            <Typography variant={item}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Alert>
        </>
      ))}
      <hr />

      <h2>MOdal Or Dialog</h2>
      <Button onClick={(e) => setshow(true)} variant="outlined">
        Click Me
      </Button>
      {/* <Dialog open={show}> */}
      <DialogTitle>Header</DialogTitle>
      <DialogContent>Body</DialogContent>
      <DialogActions>
        <Button onClick={(e) => setshow(false)} color="error">
          Close
        </Button>
      </DialogActions>
      {/* </Dialog> */}

      <hr />

      <h2>Toast or SnackBar</h2>
      <Button onClick={(e) => setshow(true)} variant="outlined">
        Open
      </Button>
      <Snackbar
        message="Todo created Successfully"
        autoHideDuration={2000}
        onClose={(e) => setshow(false)}
        open={show}
      />
      <hr />
      {/*progressBar  */}
      <h1>Progress bar</h1>
      <CircularProgress color="secondary" />
      <LinearProgress />

      <hr />
      <h1>Skeleton</h1>
      <Skeleton />
    </>
  );
};

export default FeedBack;
