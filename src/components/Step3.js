import React from "react";

export function Step3() {
  return (
    <div>
      <div>我是第三个组件</div>
      <FooBar title="aaaa" name="666" />
      <FooBar color="purple" name="777" />
    </div>
  );
}

function FooBar(props) {
  const { title, color, name } = props;

  return (
    <div>
      <Foo color={color} name={name} />
      <Bar title={title} />
    </div>
  );
}

function Foo(props) {
  const { color = "red", name } = props;

  return <div style={{ color }}>{"name:" + name}</div>;
}

function Bar(props) {
  const { title = "忘记设置title啦" } = props;

  return <div>{"title:" + title}</div>;
}
