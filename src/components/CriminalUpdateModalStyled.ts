import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ModalBackgroundStyled = styled(Box)({
    position: "absolute",
    top: "0",
    left: "0",
    minHeight: "100vh",
    width: "100%",
});

export const ModalBackgroundBlurStyled = styled(Box)({
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(3px)"
});

export const ModalBodyStyled = styled(Box)({
    display: "flex",
    flexxDirection: "column",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    padding: "2% 5%",
    borderRadius: "7px",
    border: "solid 4px #560716",
});