import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateNotebookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author_id: this.props.currentUser
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearErrors();
        this.props.createNotebook(this.state).then(this.props.closeModal);
    };

    updateTitle(title) {
        return (e) => {
            this.setState({ [title]: e.currentTarget.value })
        };
    };

    renderErrors() {

        if (this.props.errors) {
            return (
                <ul className='errors'>
                    {this.props.errors.map((error, idx) => (
                        <li key={`error-${idx}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        };
    };

    render() {
        return (
            <div className='notebook-form-container'>
                <form className="create-notebook-form">
                    <h1 className='notebook-title'>Create new notebook&#160;&#160;&#160;&#160;&#160;<i id='close' className="fas fa-times" onClick={this.props.closeModal}></i></h1>
                    <p className='notebook-phrase'>Notebooks are useful for grouping notes around a common topic.</p>
                    <label id="name">Name
                        <br />
                        <br />
                        <input type="text" className='notebook-input' value={this.state.title} onChange={this.updateTitle("title")} placeholder="Notebook name" />
                    </label>
                    {this.renderErrors()}

                    <div className='line-div'>
                        <hr className='line-new' />
                    </div>  

                    <div className='new-nb-btns-create'>
                        <span>
                            <button id='cancel' onClick={this.props.closeModal}>Cancel</button>
                             &#160;&#160;&#160;
                            <button id='continue' onClick={this.handleSubmit}>Continue</button>
                        </span>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(CreateNotebookForm);