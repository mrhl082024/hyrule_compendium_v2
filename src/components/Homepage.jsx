import Hero from "./Hero.jsx";
import Navigationbar from "./Navigationbar.jsx";

function Homepage({ apiCategory, setCategory, setEntryId }) {
  return (
    <>
      <div id="homepage-card">
        <Hero />
      </div>
    </>
  );
}
export default Homepage;
