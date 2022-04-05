import React from "react";
import { useState } from "react/cjs/react.production.min";

const EvenAndOdd = (props) => {
    const evenArray = useState([]);
    const oddArray = useState([]);
    const userInput = useState("");

    return (
        <div className="even-and-odds">
            <h4>Even and Odd</h4>
            <div className="puzzleBox"></div>
            <input className="inputLine"></input>
            <button className="confirmationButton"></button>
            <span className="resultBox"></span>
            <span className="resultBox"></span>
        </div>
    );
};

export default EvenAndOdd;
