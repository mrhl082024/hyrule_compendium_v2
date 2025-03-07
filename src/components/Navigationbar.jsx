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
            <button
              id="category-btn"
              onClick={() => {
                setCategory("category");
                setEntryId(categories.toLowerCase());
              }}
            >
              {categories}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
export default Navigationbar;
