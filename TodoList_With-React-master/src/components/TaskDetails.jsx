import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import './TaskDetails.css'

import Button from './Button';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    };

    return (
        <>
            <div className="back_button-container">
                <Button onClick={handleBackButtonClick}>
                    VOLTAR
                </Button>
            </div>
            <div className="task_details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla dolores qui iure maxime nesciunt voluptate repudia
                    it, hic.Consectetur natus repudiandae earum in. Magni debi
                    tis vero reprehenderit cum, libero dicta. Necessitatibus,
                    aolorem consectetur corporis dolore quibusdam fuga.
                </p>
            </div>
        </>
    );
}
 
export default TaskDetails;