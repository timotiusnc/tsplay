import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app";
import { cube } from './components/math';
import * as Logo from './images/ping.png';

console.log(cube(5));
console.log(Logo);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
