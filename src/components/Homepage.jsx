import Hero from "./Hero.jsx";
import Navigationbar from "./Navigationbar.jsx";

function Homepage({ apiCategory, setCategory, setEntryId }) {
  return (
    <>
      <div id="homepage-card">
        <Navigationbar
          apiCategory={apiCategory}
          setCategory={setCategory}
          setEntryId={setEntryId}
        />
        <Hero />
      </div>
    </>
  );
}
export default Homepage;
