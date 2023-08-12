import { LinkedIn, Mail } from "@mui/icons-material";
import { Avatar, AvatarGroup, Badge, Chip, Typography } from "@mui/material";
import React from "react";

const DataDisplay = () => {
  return (
    <>
      <Avatar
        src="https://plus.unsplash.com/premium_photo-1664302857900-64aa9b4b06be?ixlib=rb-4.0.
      3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1689101298752-886c970ff200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MH
      x0b3BpYy1mZWVkfDE3fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      />
      <h1>Varient</h1>
      <Avatar
        src="https://images.unsplash.com/photo-1689101298752-886c970ff200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MH
      x0b3BpYy1mZWVkfDE3fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      />
      <Avatar
        variant="square"
        src="https://plus.unsplash.com/premium_photo-1664302857900-64aa9b4b06be?ixlib=rb-4.0.
      3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <Avatar
        variant="rounded"
        src="https://images.unsplash.com/photo-1689101298752-886c970ff200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MH
      x0b3BpYy1mZWVkfDE3fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      />
      <h1>Text</h1>
      <Avatar>A</Avatar>
      <Avatar>W</Avatar>
      <h1>Group</h1>
      <AvatarGroup total={100}>
        <Avatar
          src="https://plus.unsplash.com/premium_photo-1664302857900-64aa9b4b06be?ixlib=rb-4.0.
      3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1689101298752-886c970ff200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MH
      x0b3BpYy1mZWVkfDE3fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Avatar
          src="https://plus.unsplash.com/premium_photo-1664302857900-64aa9b4b06be?ixlib=rb-4.0.
      3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1689101298752-886c970ff200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MH
    x0b3BpYy1mZWVkfDE3fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Avatar
          src="https://plus.unsplash.com/premium_photo-1664302857900-64aa9b4b06be?ixlib=rb-4.0.
      3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1689101298752-886c970ff200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MH
      x0b3BpYy1mZWVkfDE3fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Avatar
          src="https://plus.unsplash.com/premium_photo-1664302857900-64aa9b4b06be?ixlib=rb-4.0.
      3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1689101298752-886c970ff200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MH
    x0b3BpYy1mZWVkfDE3fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        />
      </AvatarGroup>
      <hr />
      <h2>Badge</h2>
      <Badge badgeContent={3} color="error">
        <Mail />
      </Badge>
      <Badge badgeContent={300} max={200} color="error">
        <Mail />
      </Badge>
      <hr />
      <Badge badgeContent={300} variant="dot" color="error" max={200}>
        <LinkedIn />
      </Badge>
      <hr />

      <h2>Chip</h2>
      <Chip label="something" />
      <Chip label="something" variant="outlined" />
      <hr />

      <Chip
        onDelete={(e) => {}}
        onClick={(e) => {}}
        label="clickable"
        variant="outlined"
      />

      {["primary", "secondary", "warning", "success", "error"].map((item) => (
        <Chip label={item} color={item} />
      ))}
      <hr />
      {["primary", "secondary", "warning", "success", "error"].map((item) => (
        <Chip label={item} color={item} variant="outlined" />
      ))}
      <hr />
      {["primary", "secondary", "warning", "success", "error"].map((item) => (
        <Chip
          label={item}
          onClick={(e) => {}}
          color={item}
          variant="outlined"
        />
      ))}
      <hr />

      <Chip
        label="Leoperd"
        avatar={
          <Avatar
            src="https://images.unsplash.com/photo-1689101298752-886c970ff200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MH
      x0b3BpYy1mZWVkfDE3fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        }
      />

      <Chip label="Leoperd" variant="outlined" avatar={<Avatar></Avatar>} />
      <hr />

      <h1>Typography</h1>
      {[
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
        "overline",
      ].map((item) => (
        <>
          {" "}
          <hr /> <Typography variant={item}>Lorem ipsum</Typography>
        </>
      ))}
    </>
  );
};

export default DataDisplay;
