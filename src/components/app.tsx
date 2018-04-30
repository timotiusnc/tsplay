import * as React from "react";
import { Hello } from "./hello";
import { Clock } from "./clock";
import * as Logo from '../images/ping.png';
import '../styles/style.css';

interface AppProps { }

console.log(Logo);

export default class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div className='hello'>
        <Hello compiler="TypeScript" framework="React">
          {(something: String) => <div>Hello {something}</div>}
        </Hello>
        <Clock />
        <img src={Logo} alt="PING Icon" />
      </div>
    );
  }
}
