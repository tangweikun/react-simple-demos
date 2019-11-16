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
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
