import React from "react";
import ReactDOM from "react-dom";
import Quotes from "./Quotes";
import "antd/dist/antd.css";

import "./styles.css";

function App() {
  return <Quotes />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
