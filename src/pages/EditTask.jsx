import React, { useState } from 'react';
import './EditTask.css';
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import {editTask} from '../redux/taskActions';
import { useDispatch, useSelector } from 'react-redux';

const EditTask = () => {
    const {tasks} = useSelector((state) => state);
    const {id} = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        const object = {task: taskName, description: taskDescription, status: status, deadline: deadline};
        dispatch(editTask(id, object));
        navigate('/');
    }

    const [taskName, setTaskName] = useState(tasks[id].task);
    const [taskDescription, setTaskDescription] = useState(tasks[id].description);
    const [status, setStatus] = useState(tasks[id].status);
    const [deadline, setDeadline] = useState(tasks[id].deadline);

    return (
        <div className='create-task-container'>
            <div className='create-task-header'>Edit Task</div>
            <div className="create-task-form">
                <form>
                    <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                    <input type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
                    <select defaultValue={"Pending"} onChange={(e) => setStatus(e.target.value)}>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                    <button onClick={handleClick}>Edit</button>
                </form> 
            </div>
        </div>
    );
}

export default EditTask;