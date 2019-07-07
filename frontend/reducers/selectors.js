export const selectAllNotebooks = state => Object.values(state.entities.notebooks);

export const selectOneNotebook = ({ notebooks }, id) => {
    return notebooks[id];
};