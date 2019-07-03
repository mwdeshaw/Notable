import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


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
            <div className="splash-zone">
                <div className='splash-nav'>
                    <div className="splash-nav-header">
                        <h1>Notable</h1>
                        <ul className='user-nav'>
                            <li><Link id='li-signup' to='/signup'>Sign up</Link></li>
                            <li id='or'>or</li>
                            <li><Link id='li-login' to='/login'>Log In</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
          
    );
    return (
        <div className="nav-bar-parent">
            {navBar}
        </div>
    );
};

export default NavigationBar;