function Details({ details }) {
  console.log(details);

  return (
    <>
      {details && (
        <div id="details-card">
          {details.map((data) => (
            <>
              <h1>{data.name} </h1>
              <img src={data.image} alt="" />
              <p>{data.description} </p>
              {console.clear()}
              {console.log(data.drops)}
              {data.common_locations && (
                <>
                  <p>common locations:</p>
                  <ul>
                    {data.common_locations.map((location, i) => (
                      <li key={i}>{location}</li>
                    ))}{" "}
                  </ul>
                </>
              )}

              {data.drops && data.drops[0] && (
                <>
                  <p>Drops:</p>
                  <ul>
                    {data.drops.map((drop, i) => (
                      <li key={i}>{drop}</li>
                    ))}{" "}
                  </ul>
                </>
              )}
            </>
          ))}
        </div>
      )}
    </>
  );
}
export default Details;
