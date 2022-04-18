export function toggleLesson(module, lesson) {
  //This object shape is kind of a pattern of redux to deal with actions
  return {
    type: "TOGGLE_LESSON",
    module,
    lesson,
  };
}
