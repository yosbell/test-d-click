import React from 'react';
import {Checkbox, FormControlLabel} from "@mui/material";

const TaskItem = ({ task, onChangeTask }) => {
    const { title, completed } = task;
    const handleChangeCompleteTask = (event) => {
        const newTask = {...task,  completed: event.target.checked};
        onChangeTask(newTask);
    }

    return (
        <div style={{border: 'solid 1px black', margin: '0px 8px 8px 8px', padding: '8px'}}>
            <h1>{title}</h1>
            {/*<h3>Duration: {duration} minutes</h3>*/}
            {/*<h3>Completed: {completed?'Yes': 'No'}</h3>*/}
            <FormControlLabel control={<Checkbox checked={completed}
                                                 onChange={handleChangeCompleteTask}/>} label="Completed"/>
        </div>
    );
};

export default TaskItem;