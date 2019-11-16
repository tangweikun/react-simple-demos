import React, { useState } from "react";

export function Step9() {
  // status是一个枚举类型，总共有三个取值 'DISABLED', 'STARTED', 'STOPPED'
  const [status, setStatus] = useState("DISABLED");

  // 倒计时⏳的时长
  const [seconds, setSeconds] = useState("");
  const [time, setTime] = useState(0);

  function onSecondsChanged(e) {
    setSeconds(e.target.value);
    setTime(e.target.value * 1000);
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
    <div>
      <div>{formatTime(time)}</div>

      {/* 设置type为number后就不能输入其他字符了 */}
      <input onChange={onSecondsChanged} type="number" value={seconds} />
      <div>{`当前状态:${status}`}</div>

      <div>
        <div onClick={handleStart}>开始</div>
        <div onClick={handleStop}>暂停</div>
        <div onClick={handleReset}>重置</div>
      </div>
    </div>
  );
}
