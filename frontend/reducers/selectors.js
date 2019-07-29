import Autocomplete from '../util/search_utils';

export const selectAllNotebooksByUpdated = (state) => {
    const allNotebooks = Object.values(state.entities.notebooks)
    return allNotebooks.sort((x, y) => (
        new Date(y.updated_at) - new Date(x.updated_at))
    );
};

export const selectOneNotebook = ({ notebooks }, notebookId) => {
    return notebooks[notebookId];
};

export const selectAllNotesByUpdated = (state) => {
    const allNotes = Object.values(state.entities.notes)
    return allNotes.sort((x, y) => (
    new Date(y.updated_at) - new Date(x.updated_at))
    );
};

export const selectAllNotesFromNotebooksByUpdated = (state, notebookId) => {
    const allNotes = Object.values(state.entities.notebooks[notebookId].notes)
    return allNotes.sort((x, y) => (
    new Date(y.updated_at) - new Date(x.updated_at))
    );
};

export const selectOneNote = (state, id) => {
    return state.entities.notes[id];
};

export const selectFilteredNotebooks = (notebooks, searchString) => {
    let notebookTitles = [];
    let filteredNotebooks = [];

    searchString = searchString[searchString.length - 1];

    if (notebooks && (searchString !== "" && searchString !== undefined)) {
        notebooks.map(notebook => {
            notebookTitles.push(notebook.title)
        });

        let autocomplete = new Autocomplete();
        autocomplete.addWords(notebookTitles);
        let suggestions = new Set(autocomplete.getSuggestions(searchString.searchString));
        notebooks.map(notebook => {
            if (suggestions.has(notebook.title.toUpperCase())) {
                filteredNotebooks.push(notebook)
            }
        })
        return filteredNotebooks;
    }
    return [];
};

export const selectFilteredNotes = (notes, searchString) => {
    let noteTitles = [];
    let filteredNotes = [];

    searchString = searchString[searchString.length - 1];

    if (notes && (searchString !== "" && searchString !== undefined)) {
        notes.map(note => {
            noteTitles.push(note.title)
        });

        let autocomplete = new Autocomplete();
        autocomplete.addWords(noteTitles);
        let suggestions = new Set(autocomplete.getSuggestions(searchString.searchString));
        notes.map(note => {
            if (suggestions.has(note.title.toUpperCase())) {
                filteredNotes.push(note)
            }
        })
        return filteredNotes;
    }
    return [];
};