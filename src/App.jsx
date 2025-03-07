import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Homepage from "./components/Homepage.jsx";
import { useEffect, useState } from "react";
import Navigationbar from "./components/Navigationbar.jsx";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState();
  const [cache, setCache] = useState();
  const [entryId, setEntryId] = useState();

  const apiCategory = [
    "Creatures",
    "Equipment",
    "Materials",
    "Monsters",
    "Treasure",
  ];

  useEffect(() => {
    try {
      setLoading(true);
      //category = "Entry" or ["Creatures", "Equipment", "Materials", "Monsters", "Treasure"]
      const response = fetch(
        `https://botw-compendium.herokuapp.com/api/v3/compendium/${category.toLowercase()}/${entryId.toLowercase()}`
      );
      const result = response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.log("Api call went wrong!");
    } finally {
      setLoading(false);
    }
  }, [category, entryId]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Navigationbar categories={apiCategory} loading={loading} />
            }
          >
            <Route path="index" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
