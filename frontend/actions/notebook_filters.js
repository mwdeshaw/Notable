export const FILTER = "FILTER";
export const RESET_FILTER = "RESET_FILTER";


export const setSearchFilter = searchString => ({
    type: FILTER,
    searchString: searchString
});

export const resetSearchFilter = () => ({
    type: RESET_FILTER
});