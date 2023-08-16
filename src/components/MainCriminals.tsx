import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { criminalsRequest } from "../pages/Criminals/requests/CriminalsRequest";
import { CriminalsDataType, useGlobalStateCriminals } from "../store/StateGlobal";
import TransformDangerLevel from "../utils/TransformDangerLevel";
import CriminalUpdateModal from "./CriminalUpdateModal";

const MainCriminals = () => {
  const criminals = useGlobalStateCriminals();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("policeOnline") !== "true") {
      navigate("/");
    }
    async function getResult() {
      const result = await criminalsRequest();
      criminals.set(result);
    }
    getResult();
  }, []);

  const [updateModalInfos, setUpdateModalInfos] = useState<CriminalsDataType>();

  const updateModalHandler = (criminalInfos: CriminalsDataType) => {
    setUpdateModalInfos(criminalInfos)
  }

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
                onClick={(() => { updateModalHandler(criminal) })}
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
      {updateModalInfos && <CriminalUpdateModal uuid={updateModalInfos.uuid} name={updateModalInfos.name} age={updateModalInfos.age} gender={updateModalInfos.gender} weapon={updateModalInfos.weapon} offense={updateModalInfos.offense} country={updateModalInfos.country} dangerLevel={updateModalInfos.dangerLevel}  />}
    </React.Fragment>
  );
};

export default MainCriminals;
