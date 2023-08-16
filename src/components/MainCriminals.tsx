import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { criminalsRequest } from "../pages/Criminals/requests/CriminalsRequest";
import { useGlobalStateCriminals } from "../store/StateGlobal";
import TransformDangerLevel from "../utils/TransformDangerLevel";
import CriminalUpdateModal from "./CriminalUpdateModal";

const MainCriminals = () => {
  const criminals = useGlobalStateCriminals();

  useEffect(() => {
    async function getResult() {
      const result = await criminalsRequest();
      criminals.set(result);
    }
    getResult();
  }, []);

  return (
    <React.Fragment>
      <Box display={"flex"} maxWidth={"100%"}>
        <Box
          maxWidth={"100%"}
          display={"grid"}
          width={"100%"}
          padding={"20px 20px 0 20px"}
          gridTemplateColumns="repeat(5, 1fr)"
          gap={3}
        >
          {criminals.get().map((criminal, index) => {
            return (
              <Box
                gridColumn="span 1"
                gridRow="span 2"
                key={criminal.name + index}
              >
                <Card>
                  <CardMedia sx={{ height: "200px" }} image={criminal.img} />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      textAlign={"center"}
                      fontFamily={"fantasy"}
                    >
                      {criminal.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {criminal.country}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Weapon: {criminal.weapon}
                    </Typography>
                    <Box display={"flex"} alignItems={"center"} gap={0.5}>
                      <Typography variant="body2" color="text.secondary">
                        Danger level:
                      </Typography>
                      {TransformDangerLevel(criminal.dangerLevel)}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Box>
      <CriminalUpdateModal />
    </React.Fragment>
  );
};

export default MainCriminals;
