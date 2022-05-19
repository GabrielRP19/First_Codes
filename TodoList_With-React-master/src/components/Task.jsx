import React from 'react';
import { CgClose } from 'react-icons/cg'
import { CgInfo } from 'react-icons/cg'
import { useHistory } from 'react-router-dom'

import './Task.css';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    };

    return (
        <div
            className='task_container'
            style={task.completed ? { borderLeft: "6px solid #FF0000" } : {}}
        >
            <div className="task_title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className='task_-buttons-container'>
                <button
                    className='remove_task-button'
                    onClick={() => handleTaskDeletion(task.id)}
                >
                    <CgClose />
                </button>
                <button
                    className='see_task-detailsButon'
                    onClick={handleTaskDetailsClick}
                >
                    <CgInfo />
                </button>
            </div>
        </div>
    );
}

export default Task;

