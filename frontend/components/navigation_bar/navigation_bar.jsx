import React from 'react';
import HomePageContainer from '../landing_pages/home/home_page_container'

const NavigationBar = ({ currentUser, logout }) => {
    if (currentUser) {
    return (
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
        );
    } else {
        return(
        <HomePageContainer/>
        )
    }
};

export default NavigationBar;