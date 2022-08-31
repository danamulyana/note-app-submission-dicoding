import React from "react";
import { Link } from "react-router-dom";
import { FiPlusCircle } from 'react-icons/fi'
import "../css/Navigation.css";

function Navigation(){
    return(
        <nav className="Navigation">
            <div className="Navigation__items">
                <Link to="/" className="Navigation__items-Links" >Home</Link>
                <Link to="/archives" className="Navigation__items-Links">Arsip</Link>
                <Link to="/notes/new" className="Navigation__items-Links" ><FiPlusCircle /> Add Notes</Link>
            </div>
        </nav>
    )
}

export default Navigation;