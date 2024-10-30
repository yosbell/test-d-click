import React from 'react';

const Task = ({ task }) => {
    const { title, duration, completed } = task;
    return (
        <div style={{border: 'solid 1px black', margin: '0px 8px 8px 8px' }}>
            <h1>{title}</h1>
            <h3>Duration: {duration} minutes</h3>
            <h3>Completed: {completed?'Yes': 'No'}</h3>
        </div>
    );
};

export default Task;