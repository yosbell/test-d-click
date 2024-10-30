import React, { useEffect, useState } from 'react';
import TaskItem from "./TaskItem.jsx";
import AddTaskForm from "./AddTaskForm.jsx";
import { Box, Button, Stack, Typography } from "@mui/material";

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

    const onDeleteTask = (taskToDelete) => {
        const newTasks = tasks.filter(task=>task.id !== taskToDelete.id);
        setTasks(newTasks);
    }

    return (
        <div>
            <Typography variant={"h1"}>Tasks</Typography>
            <Box sx={{ width: "100%" }}>
                <Stack spacing={2} direction={"row"} sx={{ justifyContent: "end", marginBottom: 1 }}>
                    <Button onClick={handleOpenAddTask} variant="contained">Add Task</Button>
                </Stack>
                <Stack spacing={2} direction={"row"} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                    {tasks.map(task=><TaskItem task={task} key={`task_${task.id}`} onChangeTask={onChangeTask} onDeleteTask={onDeleteTask}/>)}
                </Stack>
            </Box>

            {openAddTask && <AddTaskForm />}
        </div>
    );
};

export default TaskList;