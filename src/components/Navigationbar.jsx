import { Link } from "react-router-dom";
import "../styles/Navigationbar.css";

function Navigationbar({ apiCategory, setCategory, setEntryId }) {
  return (
    <>
      <div id="navigationbar-card">
        <div id="logo">
          <img src="public/images/zelda-botw-logo.png" alt="" />
        </div>
        <div id="category-btns">
          {apiCategory.map((categories) => (
            <Link to="/Sheikah">
              <button
                id="category-btn"
                onClick={() => {
                  setCategory("category");
                  setEntryId(categories.toLowerCase());
                }}
              >
                {categories}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export default Navigationbar;
