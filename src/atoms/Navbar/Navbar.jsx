import React from 'react';
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('haa');
        navigate('/');
    }

    return (
        <nav className='navbar-container'>
            <div className='navbar-brand'>
                <div className='brand-name' onClick={handleClick}>Task Manager</div>
            </div>
            <div className='navbar-user'>@kushagranageshwar_</div>
        </nav>
    );
}

export default Navbar;