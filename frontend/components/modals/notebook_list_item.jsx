import React from 'react';
import { Link } from 'react-router-dom';

const NoteBookListItem = ({ nBook }) => (
    <Link to={`/notebooks/${nBook.id}`}>nBook.title</Link>
);

export default NoteBookListItem;