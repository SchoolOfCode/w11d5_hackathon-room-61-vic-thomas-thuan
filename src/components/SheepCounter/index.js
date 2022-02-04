import React from "react";
import useCounter from "../../hooks/useCounter";
import sheep from "./sheep.svg";

export default function SheepCounter() {
  const { count, decrement, increment } = useCounter();
  return (
    <div>
      <h4>Sheep Counter</h4>
      <button onClick={decrement}>- 1</button>
      <button onClick={increment}>+ 1</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {Array(count)
          .fill()
          .map((_, i) => {
            return (
              <img
                src={sheep}
                key={i}
                alt={`sheep number ${i + 1}`}
                style={{ width: "50px" }}
              />
            );
          })}
      </div>
    </div>
  );
}
