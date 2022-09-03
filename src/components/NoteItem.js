import React from "react";
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';
import { Link } from "react-router-dom";
import parser from 'html-react-parser';
import LocaleContext from "../context/LocaleContext";

function NoteItem({id,title,createdAt,body}) {
    const { lang } = React.useContext(LocaleContext);
    return(
        <article className="Note-item" id={id}>
            <Link to={`/note/${id}`} className="Note-item__h5">{title}</Link>
            <span className="Note-item__CreatedAt">{showFormattedDate(createdAt,lang)}</span>
            <p className="Note-Item__Body">{parser(body)}</p>
        </article>
    )
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default NoteItem;