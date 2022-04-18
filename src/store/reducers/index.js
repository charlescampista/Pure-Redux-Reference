//combineReducers is used to group together all differet reducers we have in out aplication.
//cause basically each app feature has its own reducer.
import { combineReducers } from "redux";

import course from "./course";

//It mix all the reducers in application result in a single one for redux to handle it.
export default combineReducers({
  course,
});

//Use Example
//course: { modules: [], activeLesson:{}, activeModule:{} }
//user: { name: '', avatar: ''};
