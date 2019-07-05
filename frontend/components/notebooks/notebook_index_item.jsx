import React from 'react';
import { Link, Route } from 'react-router-dom';
import EditNotebookFormContainer from './edit_notebooks_container';
import AddNotebooksEditModal from './add_notebooks_edit_modal'

const NotebookIndexItem = ({ notebook, author, updateNotebook,  }) => {
    function sliceIdx(name) {
        const idx = author.indexOf("@");
        return idx;
    };
    
    return(
            <tr>
                <th><Link to={`/notebooks/${notebook.id}`}>{notebook.title}</Link></th>
                <th><Link to={`/notebooks/${notebook.id}`}>{author.slice(0, sliceIdx(author))}</Link></th>
                <th><Link to={`/notebooks/${notebook.id}`}>{notebook.updated_at.slice(0, 10)}</Link></th>
            {/* <th><AddNotebooksEditModal notebook={notebook} updateNotebook={updateNotebook} fetchNotebook={fetchNotebook} /></th> */}
            {/* <th><AddNotebooksEditModal /></th> */}
            </tr>
    );
};

export default NotebookIndexItem;