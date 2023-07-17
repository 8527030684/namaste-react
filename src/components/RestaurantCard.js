import { CDN_URL } from "../utils/constant";


const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data;
    return (
        <div className="res-card">
            <img
            className="res-logo"
            alt="pic"
            src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} stars</h5>
            <h5>₹{costForTwo/100} FOR TWO</h5>
            <p>{deliveryTime} minutes</p>
        </div>
    )
};

export default RestaurantCard;

