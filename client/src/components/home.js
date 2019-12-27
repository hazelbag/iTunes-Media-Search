import React from "react";
import "../App.css";
import DropDown from "./dropDown";

//This component renders a welcome message and a drop-down for the user to choose 
// which media they would like to search for

function Home() {
    return (
        <div className="drop-container">
            <h5 className="instruct-text">Click on an icon or select from the drop-down to search media</h5>
            <DropDown />
        </div>
    );
}

export default Home;