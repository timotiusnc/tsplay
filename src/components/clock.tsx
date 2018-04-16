import * as React from "react";

interface ClockProps { }

interface ClockState { date: Date; }

export class Clock extends React.Component<ClockProps, ClockState> {
  private timerID: number;

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

  render() {
    return (
      <div>
        It's now {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}
