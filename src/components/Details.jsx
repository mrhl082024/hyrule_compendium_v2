import "../styles/Details.css";

function Details({ details }) {
  console.log(details);

  return (
    <>
      {details && (
        <div id="details-box">
          <div id="details-card">
            {details.map((data) => (
              <>
                <h1 id="name">{data.name} </h1>
                <button
                  id="prev-page"
                  onClick={() => {
                    window.history.go(-1);
                    return false;
                  }}
                >
                  {"<"}-- Prev
                </button>
                <div id="img">
                  <img src={data.image} alt="" />
                </div>
                <p id="description">{data.description} </p>
                {data.common_locations && (
                  <>
                    <ul id="locations">
                      Common Locations:
                      {data.common_locations.map((location, i) => (
                        <li key={i}>{location}</li>
                      ))}{" "}
                    </ul>
                  </>
                )}
                {data.drops && data.drops[0] && (
                  <>
                    <ul id="drops">
                      Drops:
                      {data.drops.map((drop, i) => (
                        <li key={i}>{drop}</li>
                      ))}{" "}
                    </ul>
                  </>
                )}
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default Details;
