import Navigationbar from "./Navigationbar.jsx";
import Hero from "./Hero.jsx";
import Sheikah from "./Sheikah.jsx";
import "../styles/Homepage.css";

function Homepage() {
  return (
    <>
      <div id="homepage-card">
        <Navigationbar />
        <Sheikah />
      </div>
    </>
  );
}
export default Homepage;
