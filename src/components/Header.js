import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { LOGO_URL } from "../utils/constant";

const Header = () => {

    const [btnBtnNameReact, SetBtnNameReact] = useState("Login");
    console.log("Header render");

    // If no dependency array => useEffect is called on every render
    // If dependency array is empty = [] => useEffect is called on initial render(just once)
    // If dependency array is [btnBtnNameReact] => called everytime btnBtnNameReact is updated
    useEffect(()=>{
        console.log("useEffect called");
    })

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
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