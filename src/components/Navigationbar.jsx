function Navigationbar({ categories }) {
  return (
    <>
      <div id="navigationbar-card">
        <div id="logo">
          <img src="" alt="" />
        </div>
        {categories.map((categories) => (
          <button>{categories} </button>
        ))}
      </div>
    </>
  );
}
export default Navigationbar;
