import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = {

}

export const store = createStore(rootReducer, composeWithDevTools(thunk))