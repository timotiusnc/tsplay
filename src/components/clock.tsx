import * as React from "react";

interface ClockProps { }

interface DjarumProps { }

interface ClockState { date: Date; }

export class Clock extends React.Component<ClockProps, ClockState> {
  private timerID: number = -1;

  constructor(props: ClockProps) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = window.setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  asu() {
    return class extends React.Component<{}> {
      render() {
        return (
          <div>asu</div>
        );
      }
    }
  }

  render() {
    return (
      <div>
        <Clock.Djarum />
        It's now {this.state.date.toLocaleTimeString()}
      </div>
    );
  }

  // Inner class
  static Djarum = class extends React.Component<DjarumProps> {
    constructor(props: DjarumProps) {
      super(props);
    }

    render() {
      return (
        <h1>Djarum</h1>
      );
    }
  }
}
