import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./styles/global-styles.css";

import { Home } from "./templates/Home";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);
