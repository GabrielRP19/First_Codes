import React, { useState } from 'react';

import './AddTask.css';
import Button from './Button';

const AddTask = ({ handleTaskAddition }) => {

    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData("")
    }

    return (
        <div className='add_task-container'>
            <input
                value={inputData}
                onChange={handleInputChange}
                className='add_task-input'
                type="text"
                name="include"
                id="addText" />
            <Button onClick={handleAddTaskClick}>GET STARTED</Button>
        </div>
    );
}

export default AddTask;