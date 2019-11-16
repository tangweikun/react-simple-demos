import React, { useState } from "react";
import "./App.css";

function App() {
  const list = [1, 2, 3, 4, 5, 6];
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <div className="App">
      {/* 根据list渲染出6个元素，点击元素可以改变selectedIndex的值 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "60px"
        }}
      >
        {list.map(item => (
          <div
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid gray"
            }}
            onClick={() => setSelectedIndex(item)}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>

      {/* 根据当前的selectedIndex来显示不同组件 */}
      {selectedIndex === 1 && <div>TODO:我是第1个组件</div>}
      {selectedIndex === 2 && <div>TODO:我是第2个组件</div>}
      {selectedIndex === 3 && <div>TODO:我是第3个组件</div>}
      {selectedIndex === 4 && <div>TODO:我是第4个组件</div>}
      {selectedIndex === 5 && <div>TODO:我是第5个组件</div>}
      {selectedIndex === 6 && <div>TODO:我是第6个组件</div>}
    </div>
  );
}

export default App;
