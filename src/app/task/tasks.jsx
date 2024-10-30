import React, {useEffect, useState} from 'react';
import Task from "./task.jsx";

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            "id": '0001',
            "title": "hello",
            "duration": 10,
            "completed": false,
        },
        {
            "id": '0002',
            "title": "hello yos",
            "duration": 60,
            "completed": false,
        },
    ]);
    useEffect(()=>{
        //get tasks
    },[])

    return (
        <div>
            <h1>Tasks</h1>
            {tasks.map(task=><Task task={task} />)}
        </div>
    );
};

export default Tasks;