function Details({ details }) {
  return (
    <>
      {toggle === true ? (
        <div id="details-card">
          <h1>name</h1>
          <img src="" alt="" />
          <p>description</p>
          <ul>
            common locations
            <li>test</li>
          </ul>
          <ul>
            drops
            <li>test</li>
          </ul>
        </div>
      ) : (
        false
      )}
    </>
  );
}
export default Details;
