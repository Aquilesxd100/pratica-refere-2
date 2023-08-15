import React from "react";
import HeaderCriminals from "../../components/HeaderCriminals";
import MainCriminals from "../../components/MainCriminals";
import { criminalsRequest } from "./requests/CriminalsRequest";

const Criminals = () => {
  useEffect(async () => {
    const tst = await criminalsRequest();
    console.log(tst);
  });
  return (
    <React.Fragment>
      <HeaderCriminals />
      <MainCriminals />
    </React.Fragment>
  );
};

export default Criminals;
function useEffect(arg0: () => void) {
  throw new Error("Function not implemented.");
}
