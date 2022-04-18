const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando com React",
      lessons: [
        { id: 1, title: "Primeira Aula" },
        { id: 2, title: "Segunda Aula" },
      ],
    },
    {
      id: 2,
      title: "Aprendendo Redux",
      lessons: [
        { id: 3, title: "Terceira Aula" },
        { id: 4, title: "Quarta Aula" },
      ],
    },
  ],
};

//Thats the function that return the initial state
// It returns how our state is going to look like at the beginning of the application
// Basically it shapes the state that we are going to use
// Reducer is called automatically by redux
// Reducer store and manippulates states
// Reducer also receive as args the previous state of the application and the action object the was dispatched
export default function course(state = INITIAL_STATE, action) {
  console.log(action);
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }
  return state;
}
