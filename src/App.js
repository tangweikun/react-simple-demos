import React, { useState } from "react";
import "./App.css";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { Step4 } from "./components/Step4";
import { Step5 } from "./components/Step5";
import { Step6 } from "./components/Step6";
import { Step7 } from "./components/Step7";
import { Step8 } from "./components/Step8";
import { Step9 } from "./components/Step9";

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

function App() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <div className="wrapper">
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
              width: "50px",
              height: "50px",
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
      {selectedIndex === 1 && (
        <Step1 title="我是第一组件" plans={["aaa", "bbb", "ccc"]} />
      )}
      {selectedIndex === 2 && <Step2 />}
      {selectedIndex === 3 && <Step3 />}
      {selectedIndex === 4 && <Step4 />}
      {selectedIndex === 5 && <Step5 />}
      {selectedIndex === 6 && <Step6 />}

      {/* STEP7比较复杂，可以选择先跳过 */}
      {selectedIndex === 7 && <Step7 products={PRODUCTS} />}

      {selectedIndex === 8 && <Step8 />}
      {selectedIndex === 9 && <Step9 />}
    </div>
  );
}

export default App;
