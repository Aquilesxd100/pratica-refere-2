import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { criminalsRequest } from "../pages/Criminals/requests/CriminalsRequest";
import TransformDangerLevel from "../pages/Criminals/utils/TransformDangerLevel";
import {
  CriminalsDataType,
  useGlobalStateCriminals,
} from "../store/StateGlobal";
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

  const [updateModalInfos, setUpdateModalInfos] = useState<CriminalsDataType>();

  const updateModalHandler = (criminalInfos: CriminalsDataType) => {
    setUpdateModalInfos(criminalInfos);
  };

  return (
    <React.Fragment>
      <Box
        maxWidth={"100%"}
        display={"grid"}
        width={"100%"}
        padding={"20px"}
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
              <Card sx={{ backgroundColor: "#e8e5e5" }}>
                <CardMedia
                  sx={{ height: "180px", borderRadius: "0 0 20px  20px" }}
                  image={criminal.img}
                />
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
                    Weapon:{" "}
                    <span style={{ textDecoration: "underline" }}>
                      {criminal.weapon}
                    </span>
                  </Typography>
                  <Box display={"flex"} alignItems={"center"} gap={0.5}>
                    <Typography variant="body2" color="text.secondary">
                      Danger level:
                    </Typography>
                    {TransformDangerLevel(criminal.dangerLevel)}
                  </Box>
                  <Box
                    onClick={() => {
                      updateModalHandler(criminal);
                    }}
                    marginTop="10px"
                    width="50px"
                    height="30px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="5px"
                    left="80%"
                    position="relative"
                    sx={{
                      cursor: "pointer",
                      backgroundColor: "#efe5c7",
                      transition: "0.6s cubic-bezier(0.25, 1, 0.5, 1)",
                      "&:hover": { backgroundColor: "#d1a822" },
                    }}
                  >
                    <DriveFileRenameOutlineIcon />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Box>
      {updateModalInfos && (
        <CriminalUpdateModal
          uuid={updateModalInfos.uuid}
          name={updateModalInfos.name}
          age={updateModalInfos.age}
          gender={updateModalInfos.gender}
          weapon={updateModalInfos.weapon}
          offense={updateModalInfos.offense}
          country={updateModalInfos.country}
          dangerLevel={updateModalInfos.dangerLevel}
        />
      )}
    </React.Fragment>
  );
};

export default MainCriminals;
