import React from 'react';
import { withRouter } from 'react-router-dom';

class EditNotebookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.notebook;
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateNotebook(this.state).then(() => {
            this.props.clearErrors()
            this.props.closeModal()
        })
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
                <form className="notebook-form">
                    <div className='notebook-form-header'>
                        <h1 className='notebook-title'>Rename notebook&#160;&#160;&#160;&#160;&#160;<i id='close' className="fas fa-times" onClick={this.props.closeModal}></i></h1>
                    </div>
                    <label id="name">Name
                        <br/>
                        <br/>
                        <input type="text" className='notebook-input' value={this.state.title} onChange={this.updateTitle("title")} placeholder="Notebook name" />
                    </label>
                    {this.renderErrors()}

                    <div className='line-div'>
                        <hr className='line-new' />
                    </div>  

                    <div className='new-nb-btns'>
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

export default withRouter(EditNotebookForm);