import React from "react";
import "./TodoCounter.css";

/*const estilos = {
    color: "red",
    backgroundColor: "yellow"
};*/

function TodoCounter() {
    return(
        <React.Fragment>
            <h2>You've completed 2 out of 3 TODOs!</h2>
        </React.Fragment>
    );
}

export {TodoCounter};