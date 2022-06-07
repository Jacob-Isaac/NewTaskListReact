import React from "react";

const useTasks = () => {

    const [showOrHide, setButtonText] = React.useState(false);
    const [taskList, setTasks] = React.useState(JSON.parse(localStorage.getItem("taskList")) || []);

    React.useEffect(() => {
        localStorage.setItem("taskList", JSON.stringify(taskList));
         }, [taskList]);

    const addNewTask = (newTask) => {
        if (newTask === "")  
         return null 
           setTasks(taskList => [...taskList,
           {
             id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
             content: newTask,
             done: false
           },
           ]);
       };
     
       const doneAllTasks = () => {
         setButtonText(showOrHide => !showOrHide)
         setTasks(taskList => taskList.map(task => {
           if (showOrHide === false) {
             return { ...task, done: true };
           }
           return { ...task, done: false };
         }));
       };
     
       const removeTask = (id) => {
         setTasks(taskList => taskList.filter(task => task.id !== id));
       };
     
       const tickTask = (id) => {
         setTasks(taskList => taskList.map(task => {
           if (task.id === id) {
             return { ...task, done: !task.done };
           }
           return task;
         }));
       };
       
       return {taskList, showOrHide, addNewTask, doneAllTasks, removeTask, tickTask}
};

export default useTasks;