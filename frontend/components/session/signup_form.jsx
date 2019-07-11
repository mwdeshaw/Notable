import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const styles = {
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
    logoIcon: {
        fontSize: "4em",
        color: "#04a82e",
    }
};

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formSwitch = this.formSwitch.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearErrors();
        this.props.createNewUser(this.state)
            .then(() => {
                this.props.history.push("/notebooks")
            })
    };

    formSwitch(e) {
        e.preventDefault();
        this.props.clearErrors();
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        };
    };

    renderErrors() {
        if (this.props.errors) {
            return(
                <ul className='errors'>
                    {this.props.errors.map((error, idx) => (
                        <li key={`error-${idx}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }
    };

    render() {
        return (
            <div className='session'>
                
                <div className='session-box'>
                    <div className='session-header'>
                        <div style={styles.logoContainerItems}><i className="material-icons" style={styles.logoIcon}>create</i></div>
                        <h1 className='logo-text'>Notable</h1>
                        <p className="tagline">Remember everything important.</p>
                    </div>
                    <div className='line-div'>
                        <hr className='line' />
                    </div>  
                        <form className='session-form'>
                            <input className='email' type="text" value={this.state.email} onChange={this.update("email")} placeholder="Email address"/>

                            <input className='password' type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password"/>
                            {this.renderErrors()}
                            
                            <div className='buttons'>
                                <button className='submit-button' onClick={this.handleSubmit}>Sign up</button>
                            </div>
                        </form>
                    <div className='form-base'>
                        <p className='session-sentence'>Already have an account?</p>
                        <h3 onClick={this.formSwitch}><Link to='/login'>Log in</Link></h3>
                    </div>
                </div>
            </div>
        );
    };
}

export default withRouter(SignupForm);