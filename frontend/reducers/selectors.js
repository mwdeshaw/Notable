export const selectAllNotebooksByUpdated = (state) => {
    const allNotebooks = Object.values(state.entities.notebooks)
    return allNotebooks.sort((x, y) => (
        new Date(y.updated_at) - new Date(x.updated_at))
    );
};

export const selectOneNotebook = ({ notebooks }, id) => {
    return notebooks[id];
};

export const selectAllNotesByUpdated = (state) => {
    const allNotes = Object.values(state.entities.notes)
    return allNotes.sort((x, y) => (
    new Date(y.updated_at) - new Date(x.updated_at))
    );
};

export const selectOneNote = ({ notes }, id) => {
    return notes[id];
};


