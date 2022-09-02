import React from "react";
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

function Search({placeholder,keyword, keywordChange}){
    return (
        <div className="search">
            <div className="search__icon">
                <FiSearch />
            </div>
            <input
                className="search__input"
                type='text'
                placeholder={placeholder}
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)} />
        </div>
    )

}

Search.propTypes = {
    placeholder: PropTypes.string.isRequired,
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default Search;