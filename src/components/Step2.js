import React from "react";

export function Step2() {
  return (
    <div>
      <div>我是第二个组件</div>
      <Foo />
      <Bar title="我是BAR----1" />
      <Bar title="我是bar----2" />
      <Bar />
    </div>
  );
}

function Foo() {
  return <div style={{ color: "red" }}>哈哈哈</div>;
}

function Bar(props) {
  const { title = "忘记设置title啦" } = props;

  return <div style={{ color: "green" }}>{title}</div>;
}
