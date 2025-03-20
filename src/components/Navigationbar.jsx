import { Link, useNavigate } from "react-router-dom";
import "../styles/Navigationbar.css";
import btnimg from "/images/sheikah_symbol.png";
import zeldalogo from "/images/zelda-botw-logo.png";

function Navigationbar({ apiCategory, setCategory, setEntryId }) {
  const navigate = useNavigate();
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
            // <Link to="/hyrule_compendium_v2/sheikah">
            <button
              id="category-btn"
              onClick={() => {
                setCategory("category");
                setEntryId(categories.toLowerCase());
                navigate("/hyrule_compendium_v2/sheikah");
              }}
            >
              <div id="button-img">
                <img src={btnimg} alt="" />
              </div>
              {categories}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
export default Navigationbar;
