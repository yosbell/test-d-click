import React, {useEffect, useState} from 'react';
import TaskItem from "./TaskItem.jsx";
import AddTaskForm from "./AddTaskForm.jsx";
import {Button} from "@mui/material";

const TaskList = () => {
    const [openAddTask, setOpenAddTask] = useState();
    const [tasks, setTasks] = useState([
        {
            "id": '0001',
            "title": "hello task 0001",
            "duration": 10,
            "completed": false,
        },
        {
            "id": '0002',
            "title": "hello 0002",
            "duration": 60,
            "completed": false,
        },
        {
            "id": '0003',
            "title": "hello task 0003",
            "duration": 30,
            "completed": false,
        },
        {
            "id": '0004',
            "title": "hello task 0004",
            "duration": 50,
            "completed": false,
        },
    ]);
    useEffect(()=>{
        //get tasks
    },[])

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