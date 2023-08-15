import { Box } from "@mui/material";
import React from "react";

const Login = async () => {
  try {
    const result = await fetch("https://randomuser.me/api?results=10").then(
      (response) => response.json()
    );

    console.log(result.results);
  } catch (error) {
    console.log("ERRO");
  }
  return (
    <React.Fragment>
      <h1>Login</h1>
      <Box>oi</Box>
    </React.Fragment>
  );
};

export default Login;
