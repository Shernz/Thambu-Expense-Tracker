export function groupsReducer(state = {},  action:any) {
    switch (action.type) {
        case 'ADD_GROUP': 
            return state = { ...state, ...action.payload };
        default:
            return state;
    }
}

export function expensesReducer(state = {}, action:any) {
    switch (action.type) {
        case 'ADD_EXPENSE' : 
            return state = { ...state, ...action.payload };
        default: 
            return state;
    }
}