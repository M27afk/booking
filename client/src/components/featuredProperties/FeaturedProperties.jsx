import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const navigate = useNavigate();
  const { data, loading, error, reFetch } = useFetch("/hotel/fetch?limit=5");
  return (
    <div className="fp">
      {data.map((item) => (
        <div
          className="fpItem"
          onClick={() => {
            navigate(`/hotels/${item._id}`);
          }}
        >
          <img src={item.photos[0]} alt="" className="fpImg" />
          <span className="fpName">{item.title}</span>
          <span className="fpCity">{item.city}</span>
          <span className="fpPrice">Starting from ₹{item.cheapestPrice}</span>
          <div className="fpRating">
            <button>{item.rating}</button>
            <span>Excellent</span>
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
