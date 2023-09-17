import { useEffect, useState } from "react";

const User = (props) => {
    const {name, location} = props;

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    useEffect(()=>{
        // Api calls
    }, []);

    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={()=>{setCount(count + 1)}}>Count Increase</button>
            <h1>Count2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @akshaymarch7</h4>
        </div>
    )
}

export default User;