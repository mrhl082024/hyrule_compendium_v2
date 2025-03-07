import "../styles/Sheikah.css";
function Sheikah({ cache, loading }) {
  console.log(loading);
  console.log(cache);

  return (
    <>
      <div id="sheikah-card">
        test
        {/* {loading === true ? (
          <p>Loading...</p>
        ) : (
          cache.map((data) => (
            <>
              <div>
                <img src={data.image} alt="Image" />
              </div>
              <p>{data.id} </p>
              <p>{data.name} </p>
            </>
          ))
        )} */}
      </div>
    </>
  );
}
export default Sheikah;
