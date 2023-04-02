import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";
import "./featured.css";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/searchContext.js";

const Featured = () => {
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const { data, loading, error } = useFetch(
    "/hotel/count/cities?cities=Mysuru,Mumbai,Bengaluru"
  );
  const { dispatch } = useContext(SearchContext);
  const [destination, setDest] = useState("");
  const navigate = useNavigate();
  // const handleSearch = () => {
  //   dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
  //   navigate("/hotels", { state: { destination, dates, options } });
  // };

  return (
    <div className="featured">
      {loading ? (
        "Loading.."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mysore_Palace_Morning.jpg"
              alt=""
              className="featuredImg"
            />
            <div
              className="featuredTitles"
              onClick={() => {
                dispatch({
                  type: "NEW_SEARCH",
                  payload: { destination: "Mysuru", dates, options },
                });
                navigate("/hotels", {
                  state: { destination: "Mysuru", dates, options },
                });
              }}
            >
              <h1>Mysuru</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://yometro.com/images/places/vidhana-soudha.jpg"
              alt=""
              className="featuredImg"
            />
            <div
              className="featuredTitles"
              onClick={() => {
                dispatch({
                  type: "NEW_SEARCH",
                  payload: { destination: "Bengaluru", dates, options },
                });
                navigate("/hotels", {
                  state: { destination: "Bengaluru", dates, options },
                });
              }}
            >
              <h1>Bengaluru</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-3792f89c9d265d8686d0f295055382c9-lq"
              alt=""
              className="featuredImg"
            />
            <div
              className="featuredTitles"
              onClick={() => {
                dispatch({
                  type: "NEW_SEARCH",
                  payload: { destination: "Mumbai", dates, options },
                });
                navigate("/hotels", {
                  state: { destination: "Mumbai", dates, options },
                });
              }}
            >
              <h1>Mumbai</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
