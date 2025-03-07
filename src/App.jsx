import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Homepage from "./components/Homepage.jsx";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState();

  useEffect(async () => {
    try {
      setLoading(true);
      //category = "Entry" or ["Creatures", "Equipment", "Materials", "Monsters", "Treasure"]
      const response = await fetch(
        `https://botw-compendium.herokuapp.com/api/v3/compendium/${category}/${id}`
      );
      const result = response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.log("Api call went wrong!");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
