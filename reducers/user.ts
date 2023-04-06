export default function userReducer(state = "", action:any) {
    switch (action.type) {
        case 'ADD_USER': 
            return state.concat(action.uid);
        case 'DELETE_USER':
            return state = "";
        default:
            return state;
    }
}