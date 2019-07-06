import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const NotebookListItem = ({ notebook }) => {

    return (
        <li>
            <Link to={`/notebooks/${notebook.id}`}><i className="fas fa-book"></i>&#160;&#160;&#160;{notebook.title}</Link>
        </li >              
    );
};

export default withRouter(NotebookListItem);
