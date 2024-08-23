import React from "react";
import "./App.css";
import Army from "/Army.jpg";

export const App = () => {
    return (
        <React.Fragment>
            <img 
                src={Army} alt="Army" 
                height={"500px"} width={"auto"}
            />
        </React.Fragment>
    );
};


