import "../styles/Sheikah.css";
function Sheikah({ cache, loading, entryId }) {
  console.log(cache);

  return (
    <>
      {loading === true ? (
        <p>Loading...</p>
      ) : (
        <div id="sheikah-card">
          {console.log(cache)}

          {cache[entryId] &&
            cache[entryId].map((data) => (
              <>
                <div>
                  <img src={data.image} alt="Image" />
                </div>
                <p>{data.id} </p>
                <p>{data.name} </p>
              </>
            ))}
        </div>
      )}
    </>
  );
}
export default Sheikah;
