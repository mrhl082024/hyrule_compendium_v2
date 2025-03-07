import "../styles/Sheikah.css";
function Sheikah({ cache, loading, entryId }) {
  console.log(loading);
  console.log(cache);

  return (
    <>
      <div id="sheikah-card">
        {cache[entryId].map((data) => (
          <>
            <div>
              <img src={data.image} alt="Image" />
            </div>
            <p>{data.id} </p>
            <p>{data.name} </p>
          </>
        ))}
      </div>
    </>
  );
}
export default Sheikah;
