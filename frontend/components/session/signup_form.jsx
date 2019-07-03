import React from 'react';
import { withRouter, Link } from 'react-router-dom';

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
        .then(() => this.props.history.push(""))
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
                <ul>
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
                        <h1>Notable</h1>
                        <p className="tagline">Remember everything important.</p>
                    </div>
                        <form className='session-form'>
                        <input type="text" value={this.state.email} onChange={this.update("email")} placeholder="Email address"/>
                        <input type="password" value={this.state.password} onChange={this.update("password")} placeholder="password"/>
                            <h3>{this.renderErrors()}</h3>
                            <button className='submit-button' onClick={this.handleSubmit}>Sign in</button>
                        </form>
                    <div className='session-sentence'>Already have an account?</div>
                    <h3><Link to='/login' onClick={this.formSwitch}>Sign in</Link></h3>
                </div>
            </div>
        );
    };
}

export default withRouter(SignupForm);