import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/App.css";
import Homepage from "./components/Homepage.jsx";
import Navigationbar from "./components/Navigationbar.jsx";
import Sheikah from "./components/Sheikah.jsx";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState();
  const [entryId, setEntryId] = useState();
  const [cache, setCache] = useState();

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
      fetch(
        `https://botw-compendium.herokuapp.com/api/v3/compendium/${category}/${entryId}`
      )
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        });
      console.log("Api called");
    } catch (error) {
      throw new Error(`Api call went wrong: ${error}`);
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
              <Navigationbar
                apiCategory={apiCategory}
                setCategory={setCategory}
                setEntryId={setEntryId}
              />
            }
          >
            <Route path="index" element={<Homepage />} />
            <Route
              path="Sheikah"
              element={<Sheikah />}
              cache={cache}
              loading={loading}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
