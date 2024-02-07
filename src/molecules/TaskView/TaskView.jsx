import React, { useEffect } from 'react';
import "./TaskView.css";
import AddButton from '../../atoms/Buttons/AddButton';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTask, fetchTasks } from '../../organisms/redux/taskActions';
import {taskSelector} from '../../organisms/selectors/taskSelector'

const TaskView = (props) => {
    const tasks = props?.tasks[0];
    const navigate = useNavigate();

    useEffect(()=>{
        props.fetchTasks();
    }, []);

    const handleDelete = (index) => {
        props.deleteTask(index);
        navigate('/');
    };

    const handleClick = (index) => {
        navigate(`/edit-task/${index}`);
    }

    let alltasks = tasks?.map((element, index) => {
        return (
            <tr className='task-items' key={index}>
                <td>{element?.task}</td>
                <td onClick={() => handleClick(element?.id)}>{element?.description}</td>
                <td>{element?.status}</td>
                <td>{element?.deadline}</td>
                <td><button className='delete-btn' onClick={() => handleDelete(element?.id)}>x</button></td>
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
                    {alltasks?.length ? alltasks : <tr><td>"No tasks to show"</td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        tasks: taskSelector(state)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTasks: ()=>dispatch(fetchTasks()),
        deleteTask: (index)=>dispatch(deleteTask(index))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskView);