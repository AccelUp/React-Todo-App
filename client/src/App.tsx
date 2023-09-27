import { useState, useEffect } from "react";
import ListHeader from "./components/Home/ListHeader";
import "./components/Input/input.css";

function App() {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((backendData) => {
        setBackendData(backendData);
        console.log({ backendData });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <>
      <div>
        <ListHeader listName={"Holiday Tick List"} />
      </div>
    </>
  );
}

export default App;
