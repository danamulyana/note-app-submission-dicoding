import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut, FiPlusCircle } from 'react-icons/fi'
import "../css/Navigation.css";
import ThemeContext from "../context/ThemeContext";
import { FaMoon, FaSun } from 'react-icons/fa';
import LocaleContext from "../context/LocaleContext"; 
import PropTypes from 'prop-types';
import { navigationLang } from '../utils/language';

function Navigation({ logout }){
    const { theme, ToggleTheme } = React.useContext(ThemeContext);
    const { lang, ToggleLang } = React.useContext(LocaleContext);

    if(logout){
        return(
            <nav className="Navigation">
                <div className="Navigation__items">
                    <Link to="/" className="Navigation__items-Links" >{navigationLang[lang].home}</Link>
                    <Link to="/archives" className="Navigation__items-Links">{navigationLang[lang].archive}</Link>
                    <Link to="/notes/new" className="Navigation__items-Links" ><FiPlusCircle /> {navigationLang[lang].addnote}</Link>
                    <button className="Navigation__items-Links bg-none" onClick={ToggleLang}>{lang === 'id' ? 'English' : 'Indonesia'}</button>
                    <button className="Navigation__items-Links bg-none" onClick={ToggleTheme}>{theme === 'light' ? <FaMoon /> : <FaSun />}</button>
                    <button className="Navigation__items-Links bg-none" onClick={logout}><FiLogOut /></button>
                </div>
            </nav>
        )
    }
    return(
        <nav className="Navigation">
            <div className="Navigation__items">
                <button className="Navigation__items-Links bg-none" onClick={ToggleLang}>{lang === 'id' ? 'English' : 'Indonesia'}</button>
                <button className="Navigation__items-Links bg-none" onClick={ToggleTheme}>{theme === 'light' ? <FaMoon /> : <FaSun />}</button>
            </div>
        </nav>
    )
}

Navigation.propTypes = {
    logout: PropTypes.func,
}

export default Navigation;