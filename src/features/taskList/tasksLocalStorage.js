const localStorageKey = "taskList";

export const saveTasksInLocalStorage = (taskList) =>
  localStorage.setItem(localStorageKey, JSON.stringify(taskList));

export const getTasksFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];
