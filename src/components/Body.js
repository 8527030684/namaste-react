import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import resList from '../utils/mockData';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4826264&lng=77.2986963&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) :  (
        <div className="body-container">
            <div className="search">
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4);
                        setListOfRestaurants(filteredList);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-conatainer">
                {
                    listOfRestaurants.map((restaurant) => {
                        return <RestaurantCard  key={restaurant?.info.id} resData={restaurant} />
                    })
                }
                {console.log(listOfRestaurants)}
            </div>
        </div>
    )
};

export default Body;

