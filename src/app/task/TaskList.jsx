import React, { useEffect, useState } from 'react';
import TaskItem from "./TaskItem.jsx";
import AddTaskForm from "./AddTaskForm.jsx";
import {Box, Button, Grid2, Stack, Typography} from "@mui/material";

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

    const onAddTask = (task) => {
        setTasks([...tasks, task]);
        setOpenAddTask(false);
    }

    const onCancelAddTask = () => {
        setOpenAddTask(false);
    }

    return (
        <div>
            <Box sx={{ width: "100%" }}>
                <Typography variant={"h1"} sx={{textAlign: 'center', fontWeight: 'medium'}}>Tasks</Typography>
                <Stack spacing={2} direction={"row"} sx={{ justifyContent: "end", marginBottom: 2, marginRight: 15 }}>
                    <Button onClick={handleOpenAddTask} variant="contained">Add Task</Button>
                </Stack>
                <Grid2 spacing={2} container direction={"row"} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                    {tasks.map(task=><TaskItem task={task} key={`task_${task.id}`} onChangeTask={onChangeTask} onDeleteTask={onDeleteTask}/>)}
                </Grid2>
                <Stack></Stack>
            </Box>

            {openAddTask && <AddTaskForm addTask={onAddTask} onCancel={onCancelAddTask} />}
        </div>
    );
};

export default TaskList;