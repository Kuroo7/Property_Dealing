import "./searchItem.css";
import { Link } from "react-router-dom";
const SearchItem = ({ item }) => {
  console.log(item)
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Buy Now
        </span>
        <span className="siFeatures">
          {item.desc}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs{item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/props/${item._id}`}>

            <button className="siCheckButton">Buy</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
