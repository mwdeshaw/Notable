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
        paddingLeft: "20px",
        marginLeft: "128px",
        marginRight: "125px",

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
        color: '#04a82e'
    },
    linkHover: {
        backgroundColor: 'transparent',
        border: 'none',
        textAlign: 'center',
        fontSize: "1em",
        textDecoration: 'none',
        fontFamily: 'sans-serif',
        cursor: 'pointer',
        color: '#04a82e'
    },
    linkHover2: {
        backgroundColor: 'transparent',
        border: 'none',
        textAlign: 'center',
        fontSize: "1em",
        textDecoration: 'none',
        fontFamily: 'sans-serif',
        cursor: 'pointer',
        color: '#b2e4c1'
    },
    loginButton: {
        backgroundColor: 'white',
        border: "2px solid #04a82e",
        textAlign: 'center',
        fontSize: "1em",
        textDecoration: 'none',
        fontFamily: 'sans-serif',
        cursor: 'pointer',
        color: '#04a82e',
        borderRadius: "7px",
        margin: "1em",
        height: "40px",
        minWidth: "120px"
    }
}

const TopBar = () => {

    const [hoverStyleContact, setHoverStyleContact] = useState(styles.link);
    const [hoverContact, setHoverContact] = useState(false);
    const [signupRedirect, setSignupRedirect] = useState(false);
    const [loginRedirect, setLoginRedirect] = useState(false);

    useEffect(() => {
        if (hoverContact) {
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
                                            <a href="mailto:mwdeshaw@gmail.com">
                                                <button style={hoverStyleContact} onMouseEnter={() => setHoverContact(true)} onMouseLeave={() => setHoverContact(false)}>CONTACT</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div style={styles.topBarContainerItem2}>
                                    <div style={styles.signupLoginContainer} className="grid-container">
                                        <button className="signup-btn" 
                                        onClick={handleSignup}>Sign up</button>
                                        {/* <button className="signup-btn" style={styles.signupButton} onClick={handleSignup}>Sign up</button> */}
                                        <h5 className="or" style={{ fontFamily: 'sans-serif', fontWeight: '400' }}>or</h5>
                                        {/* <button className="top-btn" style={styles.loginButton} onClick={handleLogin}>Log in</button> */}
                                        <button className="login-btn" onClick={handleLogin}>Log in</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            )
    );
};

export default TopBar;