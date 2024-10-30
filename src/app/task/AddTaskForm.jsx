import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogContent,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Modal, Stack,
    Typography
} from "@mui/material";
// import styled from "@emotion/styled";

// const OkMark = styled('span')`
//   margin-left: 8px;
//   margin-top: 10px;
//   position: absolute;
//   color: rgb(125 200 0 / 1);
// `;


const generateId = () => {
    const taskId = `task_${Date.now()}_${Math.floor(Math.random() * 1000000000)}`;
    return taskId;
}

const AddTaskForm = ({addNewTask}) => {

    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState(1);
    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {id: generateId(), title, completed: false, userId: userId};
        addNewTask(newTask);
    }
    return (
        <Dialog open={true} aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description">
            <DialogContent>
                <Typography variant={"h2"} sx={{fontWeight: 'medium'}}>Add new task</Typography>
                <form onSubmit={handleSubmit}>
                    <Stack direction={"column"}>
                        <FormControl defaultValue="" required>
                            <InputLabel>Title</InputLabel>
                            <Input placeholder="Task title" value={title} onChange={(event) => {
                                setTitle(event.target.value);
                            }}/>
                            <FormHelperText/>
                        </FormControl>

                        <FormControl defaultValue="" required>
                            <InputLabel>User Id</InputLabel>
                            <Input placeholder="User id" inputProps={{type: 'number'}} value={userId} onChange={(event) => {
                                setUserId(event.target.value);
                            }} />
                            <FormHelperText/>
                        </FormControl>
                    </Stack>

                    <Stack direction={"row"} spacing={1}>
                        <Button variant={"outlined"}>Cancel</Button>
                        <Button variant={"contained"} type={"submit"}>Save</Button>
                    </Stack>

                </form>

            </DialogContent>

        </Dialog>
    );
};

export default AddTaskForm;