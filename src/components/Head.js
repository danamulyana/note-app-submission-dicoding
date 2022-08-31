import React from "react";
import PropTypes from 'prop-types';
import "../css/Head.css";

function Head({ title, subtitle }) {
  return (
    <div className="Head">
        <div className="Head__content">
            <h2 className="Head__content-h2">{title}</h2>
            <span className="Head_content-span">{subtitle}</span>
        </div>
        <img src="image/stickynote.png" alt="head" width="400" height="300" className="Head__img"></img>
    </div>
  );
}

Head.propType = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default Head;