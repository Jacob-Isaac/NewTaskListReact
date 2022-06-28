import React from "react";

const useTasks = () => {

    const [showOrHide, setButtonText] = React.useState(false);
    const [taskList, setTasks] = React.useState();
    // React.useEffect(() => {
    //   const array = JSON.parse(localStorage.getItem("taskList"));
    //   if (!array)
    //   {setTasks([])}
    //   if (array.isArray())
    //   {setTasks(JSON.parse(localStorage.getItem("taskList")))}
    //   else
    //   {setTasks([])}
    //    }, []);
    // zrobić sprawdzenie czy dane w storage są array (.isArray()) jesli tak to dopiero get item , jesli nie to pusta tablica 
    React.useEffect(() => {
        localStorage.setItem("taskList", JSON.stringify(taskList));
         }, [taskList]);

    // const addNewTask = (newTask) => {
    //     if (newTask === "")  
    //      return null 
    //        setTasks(taskList => [...taskList,
    //        {
    //          id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
    //          content: newTask,
    //          done: false
    //        },
    //        ]);
    //    };
     
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
       return {taskList, showOrHide, doneAllTasks, removeTask, tickTask}
};

export default useTasks;