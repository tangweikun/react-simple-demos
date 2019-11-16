import React, { useState } from "react";

export function Step4() {
  const [count, setCount] = useState(0);

  function handleCount() {
    if (count % 2 === 1) {
      setCount(count * 2);
    } else if (count > 7) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <div>
      <div
        style={{
          width: "100px",
          lineHeight: "100px",
          textAlign: "center",
          border: "solid",
          fontSize: "30px"
        }}
        onClick={handleCount}
      >
        {count}
      </div>
    </div>
  );
}
