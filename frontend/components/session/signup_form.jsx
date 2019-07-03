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
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
        .then(() => this.props.history.push(""))
    };

    update(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        };
    };

    renderErrors() {
        if (this.props.errors) {
            
            return(
                <ul>
                    {this.props.errors.map((idx, error) => (
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
                <div className='session-header'>
                    <h1>Notable</h1>
                    <h3>Remember everything important.</h3>
                </div>
                    <form className='session-form'>
                        <input type="text" value={this.state.email} onChange={this.update("email")}/>
                        <input type="password" value={this.state.password} onChange={this.update("password")}/>
                        <h3>{this.renderErrors()}</h3>

                        <button className='submit-button' onClick={this.handleSubmit}>Continue</button>
                    </form>
                <div className='session-sentence'>Already have an account?</div>
                <h3><Link to='/login'>Sign in</Link></h3>
            </div>
        );
    };
}

export default withRouter(SignupForm);