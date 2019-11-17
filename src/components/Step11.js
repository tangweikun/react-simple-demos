import React from "react";

export class Step11 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "DISABLED",
      seconds: "",
      time: 0
    };
  }

  onSecondsChanged = e => {
    this.setState({
      seconds: e.target.value,
      time: e.target.value * 1000
    });

    if (Number(e.target.value) > 0) {
      this.setState({ status: "READY" });
    } else {
      this.setState({ status: "DISABLED" });
    }
  };

  handleStart = () => {
    this.setState({ status: "STARTED" });
    this.interval = setInterval(() => {
      this.setState(preState => ({ time: preState.time - 16 }));
    }, 16);
  };

  handleStop = () => {
    this.setState({ status: "STOPPED" });
    clearInterval(this.interval);
  };

  handleReset = () => {
    this.setState({ status: "DISABLED", seconds: "", time: 0 });
    clearInterval(this.interval);
  };

  formatTime = time => {
    const hour = parseInt(time / (1000 * 60 * 60));
    const minute = parseInt((time - hour * (1000 * 60 * 60)) / (1000 * 60));
    const second = parseInt(time / 1000) % 60;
    const millisecond = time % 1000;
    return `${hour}:${minute}:${second}:${millisecond}`;
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { status, seconds, time } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "200px",
          width: "200px",
          justifyContent: "space-between"
        }}
      >
        <div style={{}}>{this.formatTime(time)}</div>
        <div>{`当前状态:${status}`}</div>

        {/* 设置type为number后就不能输入其他字符了 */}
        {(status === "DISABLED" || status === "READY") && (
          <input
            onChange={this.onSecondsChanged}
            type="number"
            value={seconds}
          />
        )}

        {(status !== "STARTED" || status !== "DISABLED") && (
          <div style={{ background: "red" }} onClick={this.handleStart}>
            开始
          </div>
        )}

        {status === "STARTED" && (
          <div style={{ background: "purple" }} onClick={this.handleStop}>
            暂停
          </div>
        )}

        <div style={{ background: "green" }} onClick={this.handleReset}>
          重置
        </div>
      </div>
    );
  }
}
