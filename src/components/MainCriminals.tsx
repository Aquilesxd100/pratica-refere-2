import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { criminalsRequest } from "../pages/Criminals/requests/CriminalsRequest";
import { useGlobalState } from "../store/CriminalsData";
import TransformDangerLevel from "../utils/TransformDangerLevel";
import CriminalUpdateModal from "./CriminalUpdateModal";

const MainCriminals = () => {
  const criminals = useGlobalState();

  useEffect(() => {
    async function getResult() {
      const result = await criminalsRequest();
      criminals.set(result);
    }
    getResult();
  }, []);

  return (
    <React.Fragment>
      <Box
        display={"grid"}
        margin={"20px 20px 0 20px"}
        gridTemplateColumns="repeat(5, 1fr)"
        gap={2}
      >
        {criminals.get() ? (
          criminals.get().map((criminal, index) => {
            return (
              <Box
                height="100%"
                gridColumn="span 1"
                gridRow="span 2"
                key={criminal.name + index}
              >
                <Card sx={{ width: "100%" }}>
                  <CardMedia sx={{ height: 120 }} image={criminal.img} />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {criminal.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {criminal.country}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {criminal.weapon}
                    </Typography>
                    <Box display={"flex"} alignItems={"center"} gap={0.5}>
                      <Typography variant="body2" color="text.secondary">
                        Danget level:
                      </Typography>
                      {TransformDangerLevel(criminal.dangerLevel)}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            );
          })
        ) : (
          <p>Não deu n</p>
        )}
      </Box>
      <CriminalUpdateModal/>
    </React.Fragment>
  );
};

export default MainCriminals;
