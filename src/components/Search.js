import React from "react";
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

function Search({keyword, keywordChange}){
    return (
        <div className="search">
            <div className="search__icon">
                <FiSearch />
            </div>
            <input
                className="search__input"
                type='text'
                placeholder="cari berdasarkan title"
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)} />
        </div>
    )

}

Search.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default Search;