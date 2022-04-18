import React from "react";

//conect is a HOC High Order Component
//conect share the redux state with the component
import { connect } from "react-redux";

//import { bindActionCreators } from "redux"; //You can make your life even easier using this but for now it's already too much information to abstract

import * as CourseActions from "../../store/actions/course";

const Sidebar = ({ modules, toggleLesson }) => {
  return (
    <aside>
      {modules.map((module) => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => toggleLesson(module, lesson)}>
                  Selecionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

//Good Practice function that receive a state and returns an object
const mapStateToProps = (state) => ({
  modules: state.course.modules,
});

//Good Practice function that receive a dispatch and returns an object
const mapDispatchToProps = (dispatch) => ({
  toggleLesson: (module, lesson) =>
    dispatch(CourseActions.toggleLesson(module, lesson)),
});

//Conect receive as the 1st param a function that receives the state.
//You should return the state props from this function
//Every component that uses connect receive by default a prop called dispatch that will be used to call and action to the redux.
//The dispatched actions are listend to all the existing reducers in the application.
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
