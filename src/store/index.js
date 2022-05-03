import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {todosReducer} from "./todos";
import {usersReducer} from "./users";

const rootReducer = combineReducers({
    todos: todosReducer,
    users: usersReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))