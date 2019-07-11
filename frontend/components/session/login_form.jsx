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


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formSwitch = this.formSwitch.bind(this);
        this.initiateDemo = this.initiateDemo.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearErrors();
        this.props.login(this.state)
            .then(() => {
                this.props.history.push("/notes")
            });
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

    initiateDemo(e) {
        e.preventDefault();
        const email = 'DemoUser@notable.com';
        const password = 'ILoveNotable';
        for (let i = 0; i < email.length; i++) {
            setTimeout(() => this.setState({
                email: email.slice(0, i + 1)
            }, () => (i * 100)))
        };

        for (let j = 0; j < password.length; j++) {
            setTimeout(() => this.setState({
                password: password.slice(0, j + 1)
            }, () => ((j + 13) * 100)))
        };
        
        const demoUser = { email, password }

        setTimeout(() => {
            this.props.login(demoUser)
                .then(() => {
                    this.props.history.push("/notes")
        })
        }, 1500);
    };

    renderErrors() {
        if (this.props.errors) {
            return (
                    this.props.errors.map((error, idx) => (
                        <li key={`error-${idx}`}>
                            {error}
                        </li>
                    ))
            );
        };
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
                    <form className='session-form' >
                        <input type="text" value={this.state.email} onChange={this.update("email")} placeholder="Email address" />
             
                        <input type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password" />
                        <ul className='errors'>
                            {this.renderErrors()}
                        </ul>
                        
                         <div className='buttons'>
                            <button className='submit-button' onClick={this.handleSubmit}>Sign in</button>
                            <button className='demo-user-button' onClick={this.initiateDemo}>Demo User</button>
                        </div> 
                    </form>
                    <div className='form-base'>
                        <p className='session-sentence'>Don't have an account?</p>
                        <h3 onClick={this.formSwitch}><Link to='/signup'>Create account</Link></h3>
                    </div>
                </div>
            </div>
        );
    };
};

export default withRouter(LoginForm)