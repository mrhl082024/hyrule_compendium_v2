import { Link } from "react-router-dom";
import "../styles/Sheikah.css";
import Navigationbar from "./Navigationbar.jsx";
function Sheikah({ cache, loading, entryId, details, setDetails }) {
  console.log(cache);
  return (
    <>
      <Navigationbar />
      {loading === true ? (
        <p>Loading...</p>
      ) : (
        <div id="sheikah">
          {console.log(cache)}

          {cache[entryId] &&
            cache[entryId].map((data) => (
              <>
                <div id="sheikah-card">
                  <Link to="/details">
                    <div
                      id="sheikah-icon"
                      onClick={() => {
                        setDetails([data]);
                      }}
                    >
                      <div id="sheikah-img">
                        <img src={data.image} alt="Image" />
                      </div>
                      <p id="sheikah-id">{data.id} </p>
                      <p id="sheikah-name">{data.name} </p>
                    </div>
                  </Link>
                </div>
              </>
            ))}
        </div>
      )}
    </>
  );
}
export default Sheikah;
