import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from '../utils/mockData';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className="body-container">
            <div className="search">
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(res => res.data.avgRating > 4);
                        setListOfRestaurants(filteredList);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-conatainer">
                {
                    listOfRestaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    })
                }
            </div>
        </div>
    )
};

export default Body;

