import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ currentUser, logout }) => {
    const navBar = currentUser ? (
        <div>
            <p>{currentUser.email}</p>
            <ul className='logout-dropdown'>
                <button className='logout' onClick={logout}>Sign out {currentUser.email}</button>
            </ul>
            <ul className='nav-bar-links'>
                <li>All Notes</li>
                <li>Shared with me</li>
                <li>Shared with me</li>
                <li>Tags</li>
                <li>Trash</li>
            </ul>
        </div>
    ) : (
            <div>
                <h1>Notable</h1>
                <Link to='/signup'>Sign up</Link>
                    <p>or</p>
                <Link className='btn' to='/login'>Log In</Link>
            </div>
    );

    return (
        <div className="nav-bar-parent">
            {navBar}
        </div>
    );
};

export default NavigationBar;