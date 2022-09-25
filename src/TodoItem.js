import React from "react";

function TodoItem(props) {
    return(
        <React.Fragment>
            <p>{props.text}</p>
        </React.Fragment>
    );
}

export {TodoItem};