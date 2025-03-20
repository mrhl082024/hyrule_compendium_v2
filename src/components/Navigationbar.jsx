import { Link, Outlet } from "react-router-dom";
import "../styles/Navigationbar.css";

function Navigationbar({ apiCategory, setCategory, setEntryId }) {
  return (
    <>
      <div id="navigationbar-card">
        <div id="logo">
          <Link to="/">
            <img src="/public/images/zelda-botw-logo.png" alt="" />
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
                  <img
                    src="/public/images/sheikah_symbol.png"
                    alt="sheikah-symbol"
                  />
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
