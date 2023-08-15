import React from "react";
import { criminalsRequest } from "./requests/CriminalsRequest";

const Criminals = () => {
  useEffect(async () => {
    const tst = await criminalsRequest();
    console.log(tst)
  })
  return (
    <React.Fragment>
      <h1>Criminals</h1>
    </React.Fragment>
  );
};

export default Criminals;
function useEffect(arg0: () => void) {
  throw new Error("Function not implemented.");
}

