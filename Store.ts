import store from './Reducer'

export function getData() {
    return store.getState()
}

export function dispatchUserData(action:string, uid:string) {
    store.dispatch({
        type: action,
        uid: uid
    })
}

export function dispatchGroupData(action:string, payload:any){
    store.dispatch({
        type: action,
        payload: payload
    })
}

export function dispatchExpenseData(action:string, payload:any){
    store.dispatch({
        type: action,
        payload: payload
    })
}