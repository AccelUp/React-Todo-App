import { useState, useEffect } from "react";
import ListHeader from "./components/Home/ListHeader";
import "./components/Input/input.css";

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:5000/message")
  //     .then((res: Response) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  return (
    <>
      <div>
        <ListHeader listName={"Holiday Tick List"} />
      </div>
    </>
  );
}

export default App;
