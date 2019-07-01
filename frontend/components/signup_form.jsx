import React from 'react';

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
        .then(() => this.props.history.push("/"))
    };

    update(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    };

    render() {
        return (
            <div className='signup-form'>
                <h1>Notable</h1>
                <h3>Remember everything important.</h3>
                <form>
                    <input type="text" value={this.state.email} onChange={this.update("email")}/>
                    <input type="password" value={this.state.password} onChange={this.update("password")}/>

                    <button className='submit-button' onClick={this.handleSubmit}>Continue</button>
                </form>
            </div>
        );
    }
}

export default SignupForm;