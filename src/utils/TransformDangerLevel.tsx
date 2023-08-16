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
            backgroundColor: "#ffe600",
            width: 24,
            height: 24,
          }}
        >
          {" "}
        </Avatar>
        <Avatar
          sx={{
            backgroundColor: "#ffe600",
            width: 24,
            height: 24,
          }}
        >
          {" "}
        </Avatar>
        <Avatar
          sx={{
            backgroundColor: "#d9d7d7",
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
    <Box display={"flex"} gap={0.2}>
      <Avatar
        sx={{
          backgroundColor: "green",
          width: 24,
          height: 24,
        }}
      >
        {" "}
      </Avatar>
      <Avatar
        sx={{
          backgroundColor: "#d9d7d7",

          width: 24,
          height: 24,
        }}
      >
        {" "}
      </Avatar>
      <Avatar
        sx={{
          backgroundColor: "#d9d7d7",

          width: 24,
          height: 24,
        }}
      >
        {" "}
      </Avatar>
    </Box>
  );
};

export default TransformDangerLevel;
