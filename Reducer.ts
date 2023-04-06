import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";
import { groupsReducer, expensesReducer } from "./reducers/groups";

const store =  configureStore({
    reducer: {
        user: userReducer,
        groups: groupsReducer,
        expenses: expensesReducer
    }
})

export default store;