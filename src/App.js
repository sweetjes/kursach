import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState(['Angular','jQuery','Polymer','React','Vue.js']);
  const del = (i) => {
    setState((prev) => {
      return prev.filter((value, index) => index !== i);
    });
  };
  return (
    <div className="App">
      {state.map((date, i) => (
        <div className="Chip" key={i}>
          {date}
          <button className="Button" onClick={() => del(i)}>&times;</button>
        </div>
      ))}
    </div>
  );
}
