import _ from 'lodash';

const initalState = {
    displayPanel: "none",
    oldDisplayPanel: "none",
    searchCriteria: [],
    selectedSwatches: [],

};

export default function searchCriteriaReducer(state = initalState, action) {
    let items;
    let found = false;
    let newState = {};


  // console.log("action: ", action )
    switch(action.type) {

        case "SET_DISPLAY_PANEL":

            newState = _.cloneDeep(state);
            newState.displayPanel = action.key;
            newState.oldDisplayPanel  = state.displayPanel;
            return newState;


        case "ADD_SEARCHCRITERIA":
            items =  [];
            action.item.forEach((i) => {
                found = false;
                for (var a = 0; a < items.length; a++) {
                    if (items[a] === i)
                        found = true;
                }
                if (!found)
                    items.push(i);
            });

            newState = _.cloneDeep(state);
            newState.searchCriteria = _.cloneDeep(items);
            return newState;


        case "REMOVE_SEARCHCRITERIA":
            items =  _.clone(state.searchCriteria);
            for(var a=0; a< items.length;a++)
                if (items[a] === action.item)
                    items.splice(a,1);
            newState = _.cloneDeep(state);
            newState.searchCriteria = _.cloneDeep(items);
            return newState;


        case "SET_SELECTED_SWATCHES":

            newState = _.cloneDeep(state);
            newState.selectedSwatches = _.cloneDeep(action.item);
            return newState;





        default:
            return state;
    }
}