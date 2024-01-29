import React, { useState } from 'react';
import './CreateTask.css';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createTask } from '../redux/taskActions';

const CreateTask = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        const object = {task: taskName, description: taskDescription, status: status, deadline: deadline};

        dispatch(createTask(object));
        navigate('/');
    }

    const [taskName, setTaskName] = useState("NA");
    const [taskDescription, setTaskDescription] = useState("NA");
    const [status, setStatus] = useState("Pending");
    const [deadline, setDeadline] = useState();

    return (
        <div className='create-task-container'>
            <div className='create-task-header'>Add a New Task</div>
            <div className="create-task-form">
                <form>
                    <input type="text" placeholder={"Task Title"} onChange={(e) => setTaskName(e.target.value)} />
                    <input type="text" placeholder={"Task Description"} onChange={(e) => setTaskDescription(e.target.value)} />
                    <select defaultValue={"Pending"} onChange={(e) => setStatus(e.target.value)}>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <input type="date" placeholder={"Date"} onChange={(e) => setDeadline(e.target.value)} />
                    <button onClick={handleClick}>Add</button>
                </form> 
            </div>
        </div>
    );
}

export default CreateTask;
