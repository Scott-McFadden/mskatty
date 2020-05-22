export function addSearchCriteria(item){
    return {
        type: "ADD_SEARCHCRITERIA",
        item
    };
}

export function setSelectedSwatches(item)
{
    return {
        type: "SET_SELECTED_SWATCHES",
        item
    };
}

export function removeSearchCriteria(item){
    return {
        type: "REMOVE_SEARCHCRITERIA",
        item
    };
}

export function setDisplayPanel(key)
{
    return {
        type: "SET_DISPLAY_PANEL",
        key
    }
}