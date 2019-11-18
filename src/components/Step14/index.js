import React, { useState } from "react";

export function Step14() {
  const [list, setList] = useState([]);
  const [removedList, setRemovedList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [text, setText] = useState("");

  function handleAdd(e) {
    setList([...list, text]);
    setText("");
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  function removeItem(index) {
    const currentItem = list[index];
    list.splice(index, 1);
    // 这里用解构是为了生存一个新的list，让react检测到state的变化才能触发页面刷新
    setList([...list]);
    setRemovedList([...removedList, currentItem]);
  }

  function handleComplete(index) {
    const currentItem = list[index];
    list.splice(index, 1);
    setList([...list]);
    setCompletedList([...completedList, currentItem]);
  }

  function removeAll() {
    setRemovedList([...removedList, ...list]);
    setList([]);
  }

  function completeAll() {
    setCompletedList([...completedList, ...list]);
    setList([]);
  }

  return (
    <div>
      <h1>TODO LIST</h1>
      <input value={text} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={removeAll}>删除全部</button>
      <button onClick={completeAll}>完成全部</button>
      <ol>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <span>{item}</span>
              <button onClick={() => removeItem(index)}>删除</button>
              <button onClick={() => handleComplete(index)}>完成</button>
            </li>
          );
        })}
      </ol>

      <h2>已完成列表</h2>
      <ol>
        {completedList.map((item, index) => {
          return (
            <li key={index}>
              <span>{item}</span>
            </li>
          );
        })}
      </ol>

      <h2>已删除列表</h2>
      <ol>
        {removedList.map((item, index) => {
          return (
            <li key={index}>
              <span>{item}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
