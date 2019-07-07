import * as NotebookUtils from '../util/notebook_utils';
import { receiveErrors } from './session';

export const RECEIVE_ALL_NOTEBOOKS = 'RECEIVE_ALL_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';


export const receiveAllNotebooks = notebooks => ({
    type: RECEIVE_ALL_NOTEBOOKS,
    notebooks
});

export const receiveNotebook = notebook => ({
    type: RECEIVE_NOTEBOOK,
    notebook
});

export const removeNotebook = notebook => ({
    type: REMOVE_NOTEBOOK,
    notebook
});


export const fetchNotebooks = () => dispatch => (
    NotebookUtils.fetchNotebooks() 
        .then(notebooks => dispatch(receiveAllNotebooks(notebooks)))
);

export const fetchNotebook = id => dispatch => (
    NotebookUtils.fetchNotebook(id) 
        .then(notebook => dispatch(receiveNotebook(notebook)))
);

export const createNotebook = notebook => dispatch => (
    NotebookUtils.createNotebook(notebook) 
        .then(notebook => {
            dispatch(receiveNotebook(notebook))
        },
        err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);

export const updateNotebook = notebook => dispatch => (
    NotebookUtils.updateNotebook(notebook)
        .then(notebook => {
            dispatch(receiveNotebook(notebook))
        }, err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);

export const deleteNotebook = id => dispatch => (
    NotebookUtils.deleteNotebook(id)
        .then(notebook => dispatch(removeNotebook(notebook)))
);