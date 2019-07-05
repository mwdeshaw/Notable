import React from 'react';
import { Link, Route } from 'react-router-dom';

const NotebookIndexItem = ({ notebook, author, openModal, deleteNotebook }) => {
    function sliceIdx(name) {
        const idx = author.indexOf("@");
        return idx;
    };
    
    return(
            <tr>
                <th><Link to={`/notebooks/${notebook.id}`}>{notebook.title}</Link></th>
                <th><Link to={`/notebooks/${notebook.id}`}>{author.slice(0, sliceIdx(author))}</Link></th>
                <th><Link to={`/notebooks/${notebook.id}`}>{notebook.updated_at.slice(0, 10)}</Link></th>
                <th>
                <button onClick={() => deleteNotebook(notebook.id)}>Delete Notebook</button>
                {/* <button onClick={() => openModal('edit')}>Edit Notebook Title</button> */}
                </th> 
            </tr>
    );
};

export default NotebookIndexItem;