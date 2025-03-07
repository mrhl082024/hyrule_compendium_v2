import "../styles/Sheikah.css";
function Sheikah({ cache, loading }) {
  console.log(loading);
  console.log("sheikah cache" + cache);

  return (
    <>
      <div id="sheikah-card">
        test
        {loading === false ? (
          cache.map((data) => {
            <div>
              <div>
                <img src={data.image} alt="image" />
              </div>
              <p>{data.id}</p>
              <p>{data.name}</p>
            </div>;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
export default Sheikah;
