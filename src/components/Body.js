import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import resList from '../utils/mockData';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    // Whenever state variable update, react triggers a reconciliation cycle(re-render the component)

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4826264&lng=77.2986963&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfRestaurants?.length === 0 ? (
        <Shimmer />
    ) :  (
        <div className="body-container">
            <div className="filter">
                <div className="search">
                    <input type="search" className="search-box"
                    value={searchText}
                    onChange={(e)=>{setSearchText(e.target.value)}}
                     />
                    <button onClick={() => {
                    const filteredRestaurant = listOfRestaurants.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}

                    >search</button>
                </div>
                <button
                        className="filter-btn"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4);
                            setFilteredRestaurant(filteredList);
                        }}>
                        Top Rated Restaurants
                </button>
            </div>
            <div className="res-conatainer">
                {
                    filteredRestaurant.map((restaurant) => {
                        return <Link key={restaurant?.info.id} to={"/restaurants/" + restaurant?.info.id}>
                                    <RestaurantCard resData={restaurant} />
                                </Link>
                    })
                }
            </div>
        </div>
    )
};

export default Body;

