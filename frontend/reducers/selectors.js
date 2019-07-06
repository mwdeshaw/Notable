export const selectAllNotebooks = state => Object.values(state.entities.notebooks);

export const selectOneNotebook = (state, id) => Object.values(state.entities.notebooks.id);