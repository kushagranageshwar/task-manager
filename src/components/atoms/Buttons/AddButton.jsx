import React from 'react';
import "./AddButton.css"
import { useNavigate } from 'react-router-dom';

const AddButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/create-task');
    }

    return (
        <div className='btn-container'>
            <button className='add-btn' onClick={handleClick}>
                + Add Task
            </button>
        </div>
    );
}

export default AddButton;
