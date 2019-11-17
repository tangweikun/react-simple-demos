import React, { useState } from "react";

export function Step10() {
  // status是一个枚举类型，总共有三个取值 'DISABLED', 'STARTED', 'STOPPED', 'READY'
  const [status, setStatus] = useState("DISABLED");

  // 倒计时⏳的时长
  const [seconds, setSeconds] = useState("");
  const [time, setTime] = useState(0);

  function onSecondsChanged(e) {
    setSeconds(e.target.value);
    setTime(e.target.value * 1000);

    if (Number(e.target.value) > 0) {
      setStatus("READY");
    } else {
      setStatus("DISABLED");
    }
  }

  function handleStart() {
    setStatus("STARTED");
  }

  function handleStop() {
    setStatus("STOPPED");
  }

  function handleReset() {
    setStatus("DISABLED");
    setSeconds("");
    setTime(0);
  }

  function formatTime(time) {
    const hour = parseInt(time / (1000 * 60 * 60));
    const minute = parseInt((time - hour * (1000 * 60 * 60)) / (1000 * 60));
    const second = parseInt(time / 1000) % 60;
    const millisecond = time % 1000;
    return `${hour}:${minute}:${second}:${millisecond}`;
  }

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
      <div style={{}}>{formatTime(time)}</div>
      <div>{`当前状态:${status}`}</div>

      {/* 设置type为number后就不能输入其他字符了 */}
      {(status === "DISABLED" || status === "READY") && (
        <input onChange={onSecondsChanged} type="number" value={seconds} />
      )}

      {(status !== "STARTED" || status !== "DISABLED") && (
        <div style={{ background: "red" }} onClick={handleStart}>
          开始
        </div>
      )}

      {status === "STARTED" && (
        <div style={{ background: "purple" }} onClick={handleStop}>
          暂停
        </div>
      )}

      <div style={{ background: "green" }} onClick={handleReset}>
        重置
      </div>
    </div>
  );
}
