import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const styles = {
    header: {
        backgroundColor: "white",
    },
    topBarContainer: {
        display: 'flex',
        height: 127,
        alignItems: "center",
        justifyContent: 'space-between',
        gridTemplateColumns: "auto auto",
        paddingTop: "5px",
        paddingRight: "20px",
        paddingBottom: "5px",
        paddingLeft: "20px"
        // paddingLeft: "5%", 
        // paddingRight: "5%",
    },
    topBarContainerItem1: {
        gridColumn: 1,
    },
    topBarContainerItem2: {
        gridColumn: 2,
    },
    logoText: {
        fontSize: "2em",
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        gridTemplateColumns: "auto auto auto",
    },
    logoContainerItem1: {
        gridColumn: 1,
        justifySelf: 'center'
    },
    leftContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gridTemplateColumns: "auto auto",
    },
    leftContainerItem1: {
        gridColumn: 1
    },
    leftContainerItem2: {
        gridColumn: 2,
        paddingLeft: "1em"
    },
    signupLoginContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
        gridTemplateColumns: "auto auto auto",

    },
    signupItem: {
        gridColumn: 1
    },
    loginItem: {
        gridColumn: 3
    },
    logoIcon: {
        fontSize: "4em",
        color: "#04a82e",
    },
    link: {
        backgroundColor: 'transparent',
        border: 'none',
        textAlign: 'center',
        fontSize: "1em",
        textDecoration: 'none',
        fontFamily: 'sans-serif',
        cursor: 'pointer',
    },
    linkHover: {
        backgroundColor: 'transparent',
        border: 'none',
        textAlign: 'center',
        fontSize: "1em",
        textDecoration: 'none',
        fontFamily: 'sans-serif',
        cursor: 'pointer',
        color: 'green'
    },
    loginButton: {
        backgroundColor: 'white',
        border: "2px solid green",
        textAlign: 'center',
        fontSize: "1em",
        textDecoration: 'none',
        fontFamily: 'sans-serif',
        cursor: 'pointer',
        color: 'green',
        padding: "0.75em",
        borderRadius: "1em",
        margin: "1em"
    },
    signupButton: {
        backgroundColor: 'transparent',
        border: 'none',
        textAlign: 'center',
        fontSize: "1em",
        textDecoration: 'none',
        fontFamily: 'sans-serif',
        cursor: 'pointer',
        color: 'green',
        padding: "1em"
    }

}

const TopBar = () => {

    const [hoverStyleAbout, setHoverStyleAbout] = useState(styles.link);
    const [hoverAbout, setHoverAbout] = useState(false);
    const [hoverStyleContact, setHoverStyleContact] = useState(styles.link);
    const [hoverContact, setHoverContact] = useState(false);
    const [signupRedirect, setSignupRedirect] = useState(false);
    const [loginRedirect, setLoginRedirect] = useState(false);

    useEffect(() => {
        if (hoverAbout) {
            setHoverStyleAbout(styles.linkHover);
        } else {
            setHoverStyleAbout(styles.link);
        } if (hoverContact) {
            setHoverStyleContact(styles.linkHover);
        } else {
            setHoverStyleContact(styles.link);
        }

    });

    function handleLogin() {
        setLoginRedirect(true);
    }

    function handleSignup() {
        setSignupRedirect(true);
    }
    return (
        loginRedirect ? (
            <Redirect to="/login" />
        ) :
            (
                signupRedirect ? (
                    <Redirect to="/signup" />
                ) : (
                        <div className='header'>
                            <div className="grid-container" style={styles.topBarContainer}>
                                <div style={styles.topBarContainerItem1}>
                                    <div className="grid-container" style={styles.leftContainer}>
                                        <div style={styles.leftContainerItem1}>
                                            <div className="grid-container" style={styles.logoContainer}>
                                                <div style={styles.logoContainerItems}><i className="material-icons" style={styles.logoIcon}>create</i></div>
                                                <div style={styles.logoContainerItems}><span style={styles.logoText}>NOTABLE</span></div>
                                            </div>
                                        </div>
                                        <div style={styles.leftContainerItem2}>
                                            <a href="https://en.wikipedia.org/wiki/Potato">
                                                <button style={hoverStyleAbout} onMouseEnter={() => setHoverAbout(true)} onMouseLeave={() => setHoverAbout(false)}>ABOUT</button>
                                            </a>
                                            <a href="http://potatoesusa.com/us-potato-industry/us-grower-profiles">
                                                <button style={hoverStyleContact} onMouseEnter={() => setHoverContact(true)} onMouseLeave={() => setHoverContact(false)}>CONTACT</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div style={styles.topBarContainerItem2}>
                                    <div style={styles.signupLoginContainer} className="grid-container">
                                        <button style={styles.signupButton} onClick={handleSignup}>Sign up</button>
                                        <h5 style={{ fontFamily: 'sans-serif' }}>or</h5>
                                        <button style={styles.loginButton} onClick={handleLogin}>Log in</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            )
    );
};

export default TopBar;