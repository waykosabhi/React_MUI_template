import React from "react";

import { FileCopy, Save, Print, Share } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

const MSpeedDial = () => {
  const actions = [
    { icon: <FileCopy />, name: "Copy" },
    { icon: <Save />, name: "Save" },
    { icon: <Print />, name: "Print" },
    { icon: <Share />, name: "Share" },
  ];
  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default MSpeedDial;
