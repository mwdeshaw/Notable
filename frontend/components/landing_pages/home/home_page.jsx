import React from 'react';
import TopBar from './topbar';
import Footer from './footer';
import Hero from './hero';

const HomePage = ({ login }) => {
    return (     
        <div className='home'>
            <TopBar/>
            <Hero login={login}/>
            <Footer/>
        </div>
    );
};

export default HomePage;