import { createRoot } from "react-dom/client";
import { App } from "./App";
import React from "react";

const container : any = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);