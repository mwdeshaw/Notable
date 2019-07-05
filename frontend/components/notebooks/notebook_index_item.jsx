import React from 'react';
import { Link, Route } from 'react-router-dom';
import EditNotebookFormContainer from './edit_notebook_form_container';

const NotebookIndexItem = ({ notebook, author }) => {
    function sliceIdx(name) {
        const idx = author.indexOf("@");
        return idx;
    };
    return(

        <tr>
            <th><Link to={`/notebooks/${notebook.id}`}>{notebook.title}</Link></th>
            <th><Link to={`/notebooks/${notebook.id}`}>{author.slice(0, sliceIdx(author))}</Link></th>
            <th><Link to={`/notebooks/${notebook.id}`}>{notebook.updated_at.slice(0, 10)}</Link></th>
            {/* <th><Route path={`/notebooks/${notebook.id}/edit`} component={EditNotebookFormContainer}/>...</th> */}
        </tr>
    );
};

export default NotebookIndexItem;