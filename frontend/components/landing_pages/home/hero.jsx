import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

const Hero = () => {
    function handleSignup() {
        <Redirect to="/signup"/> //manage this button
    };

    return (
        <div className='hero-img'>
            <ul className='hero-list'>
                <li><h1>Your Notes</h1></li>
                <li><h1>Organized.</h1></li>
                <li><h1>Effortless</h1></li>
                <li><h4>Take notes anywhere. Find information faster. Share ideas with anyone. Meeting notes, web pages, projects, to-do lists—with Evernote as your note taking app, nothing falls through the cracks.</h4></li>
                <button onClick={handleSignup}>Sign up</button>
            </ul>
        </div>
    );
};

export default Hero;