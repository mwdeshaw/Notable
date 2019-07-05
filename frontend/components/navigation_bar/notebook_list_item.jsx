import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const NotebookListItem = ({ notebook }) => {

    return (
        <li>
            <Link to={`/notebooks/${notebook.id}`}>{notebook.title}</Link>
        </li >              
    );
};

export default withRouter(NotebookListItem);