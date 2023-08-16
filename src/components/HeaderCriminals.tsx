import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderCriminals = () => {
  const [logout, setLogout] = useState<string | null>();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("policeOnline") !== "true") {
      navigate("/");
    }

    setLogout(localStorage.getItem("policeOnline"));
  }, [logout]);

  const isLogout = () => {
    localStorage.setItem("policeOnline", "false");
    setLogout("false");
  };

  return (
    <Box
      height="10vh"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: "linear-gradient(#aa2e59,#a30e29)",
      }}
    >
      <Typography variant="h3">
        <strong>Dangerous Criminals</strong>
      </Typography>

      <Box
        width="40px"
        height="40px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="50%"
        position="absolute"
        top="15px"
        right="15px"
        sx={{ cursor: "pointer", backgroundColor: "red" }}
        onClick={() => {
          isLogout();
        }}
      >
        <LogoutIcon />
      </Box>
    </Box>
  );
};

export default HeaderCriminals;
