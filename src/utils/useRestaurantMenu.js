import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const UseRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect( () => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json);
    };

    return resInfo;
}

export default UseRestaurantMenu;