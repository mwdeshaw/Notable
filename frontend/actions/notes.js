import * as NoteUtils from '../util/note_utils';
import { receiveErrors } from './session';

export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';


export const receiveAllNotes = notes => ({
    type: RECEIVE_ALL_NOTES,
    notes
});

export const receiveNote = note => ({
    type: RECEIVE_NOTE,
    note
});

export const removeNote = note => ({
    type: REMOVE_NOTE,
    note
});


export const fetchNotes = () => dispatch => (
    NoteUtils.fetchNotes()
        .then(notes => dispatch(receiveAllNotes(notes)))
);

export const fetchNote = noteId => dispatch => (
    NoteUtils.fetchNote(noteId)
        .then(note => dispatch(receiveNote(note)))
);

export const createNote = note => dispatch => (
    NoteUtils.createNote(note)
        .then(note => {
            dispatch(receiveNote(note))
        },
            err => (
                dispatch(receiveErrors(err.responseJSON))
            ))
);

export const updateNote = note => dispatch => (
    NoteUtils.updateNote(note)
        .then(note => {
            dispatch(receiveNote(note))
        }, err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);

export const deleteNote = noteId => dispatch => (
    NoteUtils.deleteNote(noteId)
        .then(note => dispatch(removeNote(note)))
);