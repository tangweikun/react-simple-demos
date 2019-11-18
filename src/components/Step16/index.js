import React, { useState } from "react";

export function Step16() {
  const colors = ["red", "blue", "green", "pink"];
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [theme, setTheme] = useState("red");

  function handleAdd(e) {
    setList([
      ...list,
      {
        value: text,
        isDone: false,
        theme
      }
    ]);
    setText("");
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  function removeItem(index) {
    list.splice(index, 1);

    // 这里用解构是为了生存一个新的list，让react检测到state的变化才能触发页面刷新
    setList([...list]);
  }

  function handleComplete(e, index) {
    const isChecked = e.target.checked;
    list[index].isDone = isChecked;
    setList([...list]);
  }

  return (
    <div>
      <h1>TODO LIST</h1>
      <div style={{ display: "flex" }}>
        {colors.map(item => (
          <div
            onClick={() => {
              setTheme(item);
            }}
            style={{
              background: item,
              borderColor: "yellow",
              borderStyle: "solid",
              borderWidth: theme === item ? "4px" : 0,
              color: "#fff",
              margin: "10px"
            }}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <input value={text} onChange={e => handleChange(e)} />
      <button onClick={handleAdd}>Add</button>
      <ol>
        {list.map((item, index) => {
          return (
            <li key={index} style={{ background: item.theme }}>
              <input type="checkbox" onChange={e => handleComplete(e, index)} />
              <span style={{ color: item.isDone ? "#fff" : "black" }}>
                {item.value}
              </span>
              <button onClick={() => removeItem(index)}>删除</button>
            </li>
          );
        })}
      </ol>
      <div>已完成: {list.filter(item => item.isDone).length}</div>
      <div>总任务数: {list.length}</div>
    </div>
  );
}
