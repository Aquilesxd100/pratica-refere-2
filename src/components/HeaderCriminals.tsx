import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const HeaderCriminals = () => {
  const [logout, setLogout] = useState();

  // useEffect(() => {
  //   setLogout(localStorage.getItem)
  // }, [logout]);

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

      <Button
        variant="contained"
        color="error"
        sx={{ position: "absolute", top: "20px", right: "10px" }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default HeaderCriminals;
