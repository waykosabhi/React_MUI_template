import { Alert, Box, Container, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

const Layout = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            height: 100,
            width: 100,
            backgroundColor: "red",
            transition: "300ms",
            "&:hover": {
              backgroundColor: "blue",
            },
          }}
        ></Box>
        <hr />
        <h1>Grid</h1>
        <Grid2 container spacing={{ xs: 2, sm: 5 }}>
          <Grid2 xs={12} sm={8}>
            <Alert>Alert</Alert>
          </Grid2>
          <Grid2 xs={12} sm={4}>
            <Alert>Alert</Alert>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={{ xs: 2, sm: 5 }}>
          <Grid2 xs={6} xsOffset={3}>
            <Alert>Alert</Alert>
          </Grid2>
        </Grid2>
        <hr />
        <h1>flexBox</h1>
        <Stack
          justifyContent="space-between"
          direction={{ xs: "column", sm: "row" }}
          sx={{ height: 400, backgroundColor: "grey" }}
        >
          <Box sx={{ backgroundColor: "red" }}>Hello</Box>
          <Box sx={{ backgroundColor: "blue" }}>BYe</Box>
        </Stack>


        <hr />
        
      </Container>
    </>
  );
};

export default Layout;
