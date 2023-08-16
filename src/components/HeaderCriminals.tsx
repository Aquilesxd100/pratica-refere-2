import { Box, Typography } from "@mui/material";
import React from "react";

const HeaderCriminals = () => {
  return (
    <Box
      height={"10vh"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        background: "linear-gradient(#aa2e59,#a30e29)",
      }}
    >
      <Typography variant="h3">
        <strong>Dangerous Criminals</strong>
      </Typography>
    </Box>
  );
};

export default HeaderCriminals;
