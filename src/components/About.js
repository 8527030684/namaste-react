import User from "./user";
import UserClass from "./userClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is namaste react series.</h2>
            {/* <User name={"Akshay Saini (function)"} location={"Dehradun"} /> */}
            <UserClass name={"First"} location={"Dehradun"} />
            <UserClass name={"Second"} location={"US"} />
        </div>
    )
}

export default About;