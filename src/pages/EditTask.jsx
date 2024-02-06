import React, { useState } from 'react';
import './EditTask.css';
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import {editTask} from '../redux/taskActions';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { taskSelector } from '../selectors/taskSelector';
// import { createSelector } from 'reselect';

const EditTask = (props) => {
    const tasks = props.tasks[0];
    const {id} = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        const object = {task: taskName, description: taskDescription, status: status, deadline: deadline, id: id};
        dispatch(editTask(id, object));
        navigate('/');
    }

    function findTask(t, id){
        return t.id === id
    }

    let taskFound = tasks.find(t => findTask(t, id));

    const [taskName, setTaskName] = useState(taskFound.task);
    const [taskDescription, setTaskDescription] = useState(taskFound.description);
    const [status, setStatus] = useState(taskFound.status);
    const [deadline, setDeadline] = useState(taskFound.deadline);

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
                    <input type="text" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                    <button onClick={handleClick}>Edit</button>
                </form> 
            </div>
        </div>
    );
}

// export default EditTask;

const mapStateToProps = state => {
    return {
        tasks: taskSelector(state)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        editTask: (id, object)=>dispatch(editTask(id, object))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);