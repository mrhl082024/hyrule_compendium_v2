import "../styles/Sheikah.css";
function Sheikah({ cache, loading, entryId, setDetails }) {
  console.log(cache);

  return (
    <>
      {loading === true ? (
        <p>Loading...</p>
      ) : (
        <div
          id="sheikah-card"
          onClick={() => {
            setDetails();
          }}
        >
          {console.log(cache)}

          {cache[entryId] &&
            cache[entryId].map((data) => (
              <>
                <div id="sheikah-icon">
                  <div id="sheikah-img">
                    <img src={data.image} alt="Image" />
                  </div>
                  <p id="sheikah-id">{data.id} </p>
                  <p id="sheikah-name">{data.name} </p>
                </div>
              </>
            ))}
        </div>
      )}
    </>
  );
}
export default Sheikah;
