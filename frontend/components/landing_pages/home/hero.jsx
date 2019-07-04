import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='big-hero'>
            <img className='green' src={window.greenURL} alt="" />
            <div className='hero-img'>
                    <ul className='hero-list'>
                        <li><h1>Your Notes</h1></li>
                        <li><h1>Organized.</h1></li>
                        <li><h1>Effortless</h1></li>
                        <li><p>Take notes anywhere. Find information faster. Share ideas with anyone. Meeting notes, web pages, projects, to-do lists—with Evernote as your note taking app, nothing falls through the cracks.</p></li>
                        <button className='hero-button'><Link to='/signup'>SIGN UP FOR FREE</Link></button>
                    </ul> 
                <img className='comp' src={window.compURL} alt="" />
            </div>
        </div>
    );
};

export default Hero;