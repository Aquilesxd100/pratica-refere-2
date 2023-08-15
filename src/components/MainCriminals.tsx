import { Box } from "@mui/material";
import React from "react";

const MainCriminals = () => {
  return (
    <React.Fragment>
      <Box
        display={"grid"}
        margin={"20px 20px 0 20px"}
        gridTemplateColumns="repeat(5, 1fr)"
        gap={2}
      >
        {/* {Dataa.map((criminals) => {
          return (
            <Box height="100%" gridColumn="span 1" gridRow="span 2">
              <Card sx={{ width: "100%" }}>
                <CardMedia
                  sx={{ height: 130 }}
                  image={criminals.picture.large}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {criminals.name.first}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {criminals.gender}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {criminals.location.country}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          );
        })} */}
      </Box>
    </React.Fragment>
  );
};

export default MainCriminals;
