import React from 'react';
import TopBar from './topbar';
import Footer from './footer';
import Hero from './hero';

const HomePage = () => {
    return (
            
        <div className='home'>
                <TopBar/>
                <Hero/>
                <Footer/>
        </div>
    );
};

export default HomePage;