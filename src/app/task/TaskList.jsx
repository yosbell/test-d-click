import React, {useEffect, useState} from 'react';
import TaskItem from "./TaskItem.jsx";
import AddTaskForm from "./AddTaskForm.jsx";
import {Button} from "@mui/material";

const TaskList = () => {
    const [openAddTask, setOpenAddTask] = useState();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(tasks => {
            setTasks(tasks);
        });
    }, []);

    const handleOpenAddTask = () => {
        setOpenAddTask(true);
    }

    const onChangeTask = (taskUpdate) => {
        setTasks(tasks.map(task=>task.id === taskUpdate.id? taskUpdate: task));
    }

    return (
        <div>
            <h1>Tasks</h1>
            <div style={{paddingBottom: '8px', display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'end'}}>
                <Button onClick={handleOpenAddTask} variant="contained">Add Task</Button>
            </div>

            {tasks.map(task=><TaskItem task={task} onChangeTask={onChangeTask}/>)}
            {openAddTask && <AddTaskForm />}
        </div>
    );
};

export default TaskList;