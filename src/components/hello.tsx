import * as React from "react";
import '../styles/style.css';

interface HelloProps { compiler: string; framework: string; children: (something: string) => JSX.Element }

//   export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <div>
      <h1 className='hello'>Hello from {this.props.compiler} and {this.props.framework}!</h1>
      {this.props.children("kamoe")}
    </div>
  }
}
