import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Surface = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary>What Is React?</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          maiores minus mollitia autem inventore eos pariatur a similique quidem
          enim veniam, non quibusdam, corrupti perferendis optio esse quam?
          Minima, beatae?
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>What Is TypeScript?</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          maiores minus mollitia autem inventore eos pariatur a similique quidem
          enim veniam, non quibusdam, corrupti perferendis optio esse quam?
          Minima, beatae?
        </AccordionDetails>
      </Accordion>
      <hr />
      <h1>Card</h1>
      <Card>
        <CardMedia
          sx={{ height: 500, width: 500 }}
          image="https://images.unsplash.com/photo-1688913826777-a2a007ffb0dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <CardHeader title="Header" />
        <CardContent>
          <Typography variant="h4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            aliquam laudantium ducimus, consectetur asperiores distinctio,
            veritatis quibusdam placeat vero numquam voluptates atque. Quam
            corporis sit iusto, sint vitae quae blanditiis.
          </Typography>
          <CardActions>
            <Button>Show MOre</Button>
          </CardActions>
        </CardContent>
      </Card>
      <hr />
      <h1>PAper</h1>

      <Paper elevation={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        voluptate sapiente, ullam aut quos consequatur fuga vel voluptatum
        earum, ea velit odio eos, id ipsum libero tenetur cum veniam nisi? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate
        sapiente, ullam aut quos consequatur fuga vel voluptatum earum, ea velit
        odio eos, id ipsum libero tenetur cum veniam nisi? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Maxime voluptate sapiente, ullam aut
        quos consequatur fuga vel voluptatum earum, ea velit odio eos, id ipsum
        libero tenetur cum veniam nisi?
      </Paper>
      <hr />
      <h1>Navbar</h1>

      <AppBar>
        <Toolbar>
          <Typography variant="h6">Skillhub</Typography>
          <Typography variant="subtitle">Home</Typography>
          <Typography variant="subtitle">About</Typography>
          <Typography variant="subtitle">Contact</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Surface;
