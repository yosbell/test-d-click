import React from 'react';
import {Button, Checkbox, FormControlLabel, Grid2, Typography} from "@mui/material";
import {makeStyles} from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            border: 'solid 1px black',
            margin: '0px 8px 8px 8px !important',
            padding: '8px',
            borderRadius: '5px',
            position: "relative",
        },
        deleteTask: {
            display: 'inline-block',
            float: 'right',
            margin: '5px 5px 0 0',
            position: 'absolute',
            top: 0,
            right: 0,
            '&:hover': {
                cursor: "pointer",
            }
        }
    };
});


const TaskItem = ({task, onChangeTask, onDeleteTask}) => {
    const {title, completed} = task;
    const {classes} = useStyles();
    const handleChangeCompleteTask = (event) => {
        const newTask = {...task, completed: event.target.checked};
        onChangeTask(newTask);
    }

    const handleDeleteTask = () => {
        onDeleteTask(task);
    }

    return (
        <Grid2 size={{ xs: 12, sm: 5, md: 3, xl: 2 }} className={classes.root}>
            <Typography variant={"subtitle1"} sx={{fontWeight: 'medium', textTransform: 'capitalize'}}
                        noWrap={true}>{title}</Typography>
            <FormControlLabel control={<Checkbox checked={completed}
                                                 onChange={handleChangeCompleteTask}/>} label="Completed"/>
            <span className={classes.deleteTask} onClick={handleDeleteTask}>X</span>
        </Grid2>
    );
};

export default TaskItem;