import React from 'react';
import "./TaskView.css";
import AddButton from '../Buttons/AddButton';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../../redux/taskActions';

const TaskView = () => {
    const {tasks} = useSelector((state) => state);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (index) => {
        dispatch(deleteTask(index));
    };

    const handleClick = (index) => {
        navigate(`/edit-task/${index}`);
    }

    let alltasks = tasks?.map((element, index) => {
        return (
            <tr className='task-items' key={index}>
                <td>{element?.task}</td>
                <td onClick={() => handleClick(index)}>{element?.description}</td>
                <td>{element?.status}</td>
                <td>{element?.deadline}</td>
                <td><button className='delete-btn' onClick={() => handleDelete(index)}>x</button></td>
            </tr>
        )
    });
    return (
        <div className='home-container'>
                <AddButton/>
            <div className='taskview-container'>
                <table className='taskview-table'>
                    <thead className='taskview-head'>
                        <tr>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Deadline</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='taskview-body'>
                    {alltasks?.length ? alltasks : <p>No tasks to show</p>}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TaskView;
