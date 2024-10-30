import React from 'react';
import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";

const TaskItem = ({ task, onChangeTask, onDeleteTask }) => {
    const { title, completed } = task;
    const handleChangeCompleteTask = (event) => {
        const newTask = {...task,  completed: event.target.checked};
        onChangeTask(newTask);
    }

    const handleDeleteTask = () => {
        onDeleteTask(task);
    }

    return (
        <div style={{border: 'solid 1px black', margin: '0px 8px 8px 8px', padding: '8px', width: '400px'}}>
            <Typography variant={"subtitle1"} sx={{fontWeight: 'medium', textTransform: 'capitalize'}}
                        noWrap={true}>{title}</Typography>
            <FormControlLabel control={<Checkbox checked={completed}
                                                 onChange={handleChangeCompleteTask}/>} label="Completed"/>
            <Button onClick={handleDeleteTask}>X</Button>
        </div>
    );
};

export default TaskItem;