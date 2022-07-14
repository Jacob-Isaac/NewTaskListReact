export const getExampleTasks = () => {
const exampleTasks = fetch("/NewTaskListReact/exampleTasks.json")
.then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
})
.then((response) => response.json());

return exampleTasks;
};