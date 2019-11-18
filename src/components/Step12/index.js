import React, { useState } from "react";

export function TodoApp() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  function handleAdd(e) {
    setList([...list, text]);
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

  return (
    <div>
      <h1>TODO LIST</h1>
      <input value={text} onChange={e => handleChange(e)} />
      <button onClick={handleAdd}>Add</button>
      <ol>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <span>{item}</span>
              <button onClick={() => removeItem(index)}>Delete</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
