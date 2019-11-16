// 这个组件主要考核点
// 1. props
// 2. 对象解构
// 3. 列表渲染

import React from "react";

export function Step1(props) {
  const {
    title = "这是默认的title",
    name = "这是默认的姓名",
    plans = []
  } = props;

  return (
    <div>
      <div>{title}</div>
      <div>{name}</div>
      <ul>
        {plans.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
