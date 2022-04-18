import { createStore } from "redux";

//Get all mixed reducers
import rootReducer from "./reducers";

//createStore is called here to create the global state
const store = createStore(rootReducer); //The reducer needs to be passed in createStore

export default store;
