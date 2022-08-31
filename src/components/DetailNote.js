import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';
import '../css/DetailNote.css';
import { FiArchive, FiTrash } from 'react-icons/fi'
import parser from 'html-react-parser';

function DetailNote({ id,title,createdAt,body,archived,onArsip,onDelete }) {
  return (
    <div className='Detail-Note__container' id={id}>
        <div className='Detail-Note__header'>
            <h2 className='Detail-Note__title'>{title}</h2>
            <div>
                <button className='btn' onClick={() => onArsip()}><FiArchive /></button>
                <button className='btn' onClick={() => onDelete()}><FiTrash /></button>
            </div>
        </div>
        <span className='Detail-Note__createdAt'>{showFormattedDate(createdAt)}</span>
        <p className='Detail-Note__body'>{parser(body)}</p>
    </div>
  );
}

DetailNote.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onArsip: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default DetailNote;