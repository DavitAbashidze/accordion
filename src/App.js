import React from "react";
import Accordion from "./Accordion";

const App = () => {
  const accordionItems = [
    {
      title: "Section 1",
      content: "Content for Section 1...",
    },
    {
      title: "Section 2",
      content: "Content for Section 2...",
    },
  ];

  return (
    <div className="App">
      <h1>Accordion Example</h1>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default App;
