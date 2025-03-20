import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/App.css";
import Homepage from "./components/Homepage.jsx";
import Navigationbar from "./components/Navigationbar.jsx";
import Sheikah from "./components/Sheikah.jsx";
import Details from "./components/Details.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState();
  const [entryId, setEntryId] = useState();
  const [cache, setCache] = useState({});
  const [details, setDetails] = useState([]);

  const apiCategory = [
    "Creatures",
    "Equipment",
    "Materials",
    "Monsters",
    "Treasure",
  ];

  useEffect(() => {
    if (!category || !entryId) return;
    if (cache[entryId]) return;

    try {
      setLoading(true);
      fetch(
        `https://botw-compendium.herokuapp.com/api/v3/compendium/${category}/${entryId}`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setData(res.data);
          setCache({
            ...cache,
            [`${entryId}`]: res.data.toSorted((a, b) => a.id - b.id),
          });
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
        <header>
          <Navigationbar
            apiCategory={apiCategory}
            setCategory={setCategory}
            setEntryId={setEntryId}
          />
        </header>

        <main id="app-background">
          <Routes>
            {/* <Route
              path="/hyrule_compendium_v2"
              element={
                <Navigationbar
                  apiCategory={apiCategory}
                  setCategory={setCategory}
                  setEntryId={setEntryId}
                />
              }
            /> */}
            <Route
              path="/hyrule_compendium_v2"
              element={
                <Homepage
                  apiCategory={apiCategory}
                  setCategory={setCategory}
                  setEntryId={setEntryId}
                />
              }
            />
            <Route
              path="/hyrule_compendium_v2/sheikah"
              element={
                <Sheikah
                  entryId={entryId}
                  cache={cache}
                  loading={loading}
                  details={details}
                  setDetails={setDetails}
                  apiCategory={apiCategory}
                  setCategory={setCategory}
                  setEntryId={setEntryId}
                />
              }
            />
            <Route path="details" element={<Details details={details} />} />
          </Routes>
        </main>
      </BrowserRouter>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
