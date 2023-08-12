import { Box, Button, Drawer } from "@mui/material";
import React, { useState } from "react";

const MDrawer = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <Button onClick={(e) => setState(true)}>Open</Button>
      <Drawer anchor="right" onClose={(e) => setState(false)} open={state}>
        <Box sx={{ width: 300 }}>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
            nihil. Qui facilis, asperiores ab, corporis voluptatem dignissimos
            nisi quaerat cum tempore nulla at rem! Iure magni natus aperiam
            ducimus quasi. Similique illo quo quisquam ea, sequi quia beatae
            ipsum, nesciunt architecto, consequatur animi dolorem eveniet nobis
            quas laborum deleniti ex natus? Voluptatem obcaecati dolores quo
            voluptate. Asperiores dolorem necessitatibus dolorum! Hic nisi id
            exercitationem rerum ab iusto, distinctio eos nihil ducimus
            perspiciatis mollitia accusamus error dicta similique, corporis
            cupiditate tenetur ullam? Est adipisci perspiciatis nam dicta quos
            mollitia dolorum eius.
          </h1>
        </Box>
      </Drawer>
    </>
  );
};

export default MDrawer;
