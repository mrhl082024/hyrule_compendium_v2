function Details({ details }) {
  return (
    <>
      {details && (
        <div id="details-card">
          <h1>{details.name} </h1>
          <img src={details.image} alt="" />
          <p>{details.description} </p>
          <ul>
            common locations:
            {details.common_locations.map((location) => (
              <li>{location}</li>
            ))}
          </ul>
          <ul>
            Drops:
            {details.drops.map((drops) => (
              <li>{drops}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
export default Details;
