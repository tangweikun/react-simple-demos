import React, { useState } from "react";

export function Step15() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  function handleAdd(e) {
    setList([
      ...list,
      {
        value: text,
        isDone: false
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
      <input value={text} onChange={e => handleChange(e)} />
      <button onClick={handleAdd}>Add</button>
      <ol>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <input type="checkbox" onChange={e => handleComplete(e, index)} />
              <span style={{ color: item.isDone ? "red" : "black" }}>
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
