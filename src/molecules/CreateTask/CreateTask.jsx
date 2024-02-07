import React, { useState } from 'react';
import './CreateTask.css';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createTask } from '../../organisms/redux/taskActions';
import { nanoid } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { taskSelector } from '../../organisms/selectors/taskSelector';

const CreateTask = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        const object = {task: taskName, description: taskDescription, status: status, deadline: deadline, id: String(nanoid())};
        // console.log(object);
        dispatch(createTask(object));
        navigate('/');
    }

    const [taskName, setTaskName] = useState("NA");
    const [taskDescription, setTaskDescription] = useState("NA");
    const [status, setStatus] = useState("Pending");
    const [deadline, setDeadline] = useState("today");

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
                    <input type="text" placeholder={"Date"} onChange={(e) => setDeadline(e.target.value)} />
                    <button onClick={handleClick}>Add</button>
                </form> 
            </div>
        </div>
    );
}

// export default CreateTask;
const mapStateToProps = state => {
    return {
        tasks: taskSelector(state)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        createTask: (obj)=>dispatch(createTask(obj))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);