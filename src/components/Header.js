import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slices/cartSlice";

const Header = () => {
    const items = useSelector(getItemsSelector);
    const total = items.reduce((a, b) => a + b.price, 0);

    const [btnBtnNameReact, SetBtnNameReact] = useState("Login");

    // If no dependency array => useEffect is called on every render
    // If dependency array is empty = [] => useEffect is called on initial render(just once)
    // If dependency array is [btnBtnNameReact] => called everytime btnBtnNameReact is updated
    useEffect(()=>{
        console.log("useEffect called");
    })

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "True" : "False"}</li>
                    <li>Item count: {items.length}, Total price: {total}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login"
                    onClick={() =>
                        {
                            btnBtnNameReact === "Login"
                            ? SetBtnNameReact("Logout")
                            : SetBtnNameReact("Login")
                        }}>
                        {btnBtnNameReact}
                    </button>
            </ul>
        </div>
        </div >
    )
};

export default Header;