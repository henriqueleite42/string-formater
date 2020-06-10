import React from "react";
import ReactDOM from "react-dom";

import Home from "./Home";
import * as serviceWorker from "./serviceWorker";

import "Config/fontawesome";

import "./index.scss";

ReactDOM.render(<Home />, document.getElementById("root"));

serviceWorker.register();
