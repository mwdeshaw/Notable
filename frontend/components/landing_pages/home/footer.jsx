import React from 'react';

const Footer = () => {
    return( 
    <div className='footer-container'>
        <div className='footer-cw'>
            <p className='p-thing'>© 2019 Notable. All rights reserved</p> 
        </div>
        <div className='icons'>
                <a href="https://github.com/mwdeshaw"><i className="fab fa-github fa-2x"></i></a>
            &#160;&#160;&#160;&#160;&#160;
            <a href="https://www.linkedin.com/in/matthew-deshaw-b629a0ba/"><i className="fab fa-linkedin fa-2x"></i></a>
        </div>
    </div>
    );
};

export default Footer;