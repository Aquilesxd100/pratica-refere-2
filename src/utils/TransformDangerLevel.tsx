import { Avatar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TransformDangerLevel = (dangerLevel: string) => {
  if (dangerLevel === "High") {
    return (
      <Box display={"flex"} gap={0.2}>
        <Avatar
          sx={{
            backgroundColor: "red",
            width: 24,
            height: 24,
          }}
        >
          {" "}
        </Avatar>
        <Avatar
          sx={{
            backgroundColor: "red",
            width: 24,
            height: 24,
          }}
        >
          {" "}
        </Avatar>
        <Avatar
          sx={{
            backgroundColor: "red",
            width: 24,
            height: 24,
          }}
        >
          {" "}
        </Avatar>
      </Box>
    );
  }

  if (dangerLevel === "Medium") {
    return (
      <Box display={"flex"} gap={0.2}>
        <Avatar
          sx={{
            backgroundColor: "yellow",
            width: 24,
            height: 24,
          }}
        >
          {" "}
        </Avatar>
        <Avatar
          sx={{
            backgroundColor: "yellow",
            width: 24,
            height: 24,
          }}
        >
          {" "}
        </Avatar>
      </Box>
    );
  }

  return (
    <Avatar
      sx={{
        backgroundColor: "green",
        width: 24,
        height: 24,
      }}
    >
      {" "}
    </Avatar>
  );
};

export default TransformDangerLevel;
