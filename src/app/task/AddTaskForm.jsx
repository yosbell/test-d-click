import React, {useState} from 'react';
import { Button, Dialog, DialogContent, Stack, TextField, Typography } from "@mui/material";

const generateId = () => {
    const taskId = `task_${Date.now()}_${Math.floor(Math.random() * 1000000000)}`;
    return taskId;
}

const AddTaskForm = ({addTask, onCancel}) => {

    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState(1);
    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {id: generateId(), title, completed: false, userId: userId};
        addTask(newTask);
    }

    const titleError = !title || title.length === 0;
    return (
        <Dialog open={true} aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description">
            <DialogContent>
                <Typography variant={"h2"} sx={{fontWeight: 'medium'}}>Add new task</Typography>
                <form onSubmit={handleSubmit}>
                    <Stack direction={"column"} spacing={2} sx={{marginBottom: 2}}>
                        <TextField error={titleError}
                                   label={"Task Title"}
                                   value={title}
                                   onChange={(event) => {
                                       setTitle(event.target.value)
                                   }}
                                   helperText={titleError ? "Title cannot be empty" : ""}

                        />
                        <TextField label={"User Id"}
                                   value={userId}
                                   // InputProps={{type: 'number'}}
                                   type={"number"}
                                   onChange={(event) => {
                                       setUserId(+event.target.value)
                                   }}
                        />
                    </Stack>

                    <Stack direction={"row"} spacing={1} sx={{justifyContent: 'end'}}>
                        <Button variant={"outlined"} onClick={onCancel}>Cancel</Button>
                        <Button variant={"contained"} type={"submit"} disabled={titleError}>Save</Button>
                    </Stack>

                </form>

            </DialogContent>

        </Dialog>
    );
};

export default AddTaskForm;