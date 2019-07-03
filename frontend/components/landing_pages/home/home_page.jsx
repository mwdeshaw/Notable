import React from 'react';
import TopBar from './topbar';
import Footer from './footer';

const HomePage = () => {
    return (
        <div className='home'>
            <TopBar/>
            <div className='hero-img'>
                <div className='hero-text'>
                    <h1>Your Notes. Organized. Effortless.</h1>
                    <h4>Take notes anywhere. Find information faster. Share ideas with anyone. Meeting notes, web pages, projects, to-do lists—with Evernote as your note taking app, nothing falls through the cracks.</h4>
                    <div className='hero-btn'>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;