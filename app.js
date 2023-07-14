import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => {
    return (
        <div className="container">
            <h1>TitleComponent component</h1>
        </div>
    )
};

const HeadingComponent = () => {
    return (
        <div className="container">
            <TitleComponent />
            <h1>Namaste react functional component</h1>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);