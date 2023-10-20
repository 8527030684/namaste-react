import { useState } from "react";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import WithPromotedLabelTwo from "./higherOrder/withPromotedLabelTwo";


const RestaurantCard = (props) => {
    const dispatch = useDispatch();
    const {resData} = props;
    const [price, setPrice] = useState(100);
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.info;
    return (
        <div className="res-card">
            <img
            className="res-logo"
            alt="pic"
            src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} stars</h5>
            {/* <h5>₹{costForTwo/100} FOR TWO</h5> */}
            <h5>₹{price}</h5>
            <p>{deliveryTime} minutes</p>
            <button type="submit"
                onClick={(e) =>
                dispatch(addItem({ name: name, price: price }))
            }>Add to cart</button>
        </div>
    )
};


// Higher Order Component

//input - RestaurantCard ==> RestaurantCardPromoted

export const WithPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return <WithPromotedLabelTwo {...props} />
    };
};

export default RestaurantCard;

