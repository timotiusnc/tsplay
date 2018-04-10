import * as React from "react";

import Hello from "./hello";
import Clock from "./clock";

interface AppProps { }

export default class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <div>
                <Hello compiler="TypeScript" framework="React" />
                <Clock />
            </div>
        );
    }
}
