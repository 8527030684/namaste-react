import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";
import UseRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = UseRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer /> ;

    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item) => (
                    <li key={item.card?.info?.id}>{item.card?.info?.name} - {item.card?.info?.price/100 || item.card?.info?.defaultPrice/100}</li>
                ))}
            </ul>
        </div>
    )
};

export default RestaurantMenu;

