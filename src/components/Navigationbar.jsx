import { Link, Outlet } from "react-router-dom";
import "../styles/Navigationbar.css";
import btnimg from "/public/sheikah_symbol.png";
import zeldalogo from "/images/zelda-botw-logo.png";

function Navigationbar({ apiCategory, setCategory, setEntryId }) {
  return (
    <>
      <div id="navigationbar-card">
        <div id="logo">
          <Link to="/hyrule_compendium_v2/">
            <img src={zeldalogo} alt="" />
          </Link>
        </div>
        <div id="category-btns">
          {apiCategory.map((categories) => (
            <Link to="/sheikah">
              <button
                id="category-btn"
                onClick={() => {
                  setCategory("category");
                  setEntryId(categories.toLowerCase());
                }}
              >
                <div id="button-img">
                  <img src={btnimg} alt="" />
                </div>
                {categories}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default Navigationbar;
