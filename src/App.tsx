import { useState } from "react";
import ListGroup from "./components/ListGroup/ListGroup";

const items = [
  {
    name: "Nina",
    email: "NinaBobo@gmail.com",
  },
  {
    name: "Yoyok",
    email: "NinaBobo@gmail.com",
  },
  {
    name: "Sonia",
    email: "NinaBobo@gmail.com",
  },
];

function App() {
  return (
    <div>
      <ListGroup items={items} />
    </div>
  );
}

export default App;
