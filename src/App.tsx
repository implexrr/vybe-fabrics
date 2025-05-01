// App.jsx

import { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("Magnificent Monkeys");

  const clickHandler = () => {
    setHeading("Radical Rhinos");
  };

  return (
    <>
      <button onClick={clickHandler} type="button">
        Click Me
      </button>
      <h1>{heading}</h1>
    </>
  );
};

export default App;
