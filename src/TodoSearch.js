import React from "react";
import "./TodoSearch.css";
import { Search } from "react-bootstrap-icons";

function TodoSearch() {
    return(
        <div className="TodoSearch">
            <input className="todo-search-input" placeholder="Clean my room"/>
            <Search className="todo-search-icon"/>
        </div>
    );
}

export {TodoSearch};