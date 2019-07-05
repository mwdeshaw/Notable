import React from 'react';
import { withRouter } from 'react-router-dom';

class EditNotebook extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.notebook

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearErrors();
        this.props.updateNotebook(this.state)
            .then(() => this.props.history.push("/notebooks"))
    };

    update(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        };
    };

    handleClose(e) {
        e.preventDefault();
        this.props.history.push("/notebooks")
    };

    componendDidMount() {
        this.props.fetchNotebook(this.match.params.id)
    };

    componentDidUpdate(prevProps) {
        if (prevProps.notebook.id != this.props.match.param.id) {
            this.props.fetchNotebook(this.props.match.param.id)
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
        debugger
        if (!notebook) {
            return null
        }
        return (
            <div className='edit-notebook'>
                <form className="notebook-form">
                    <h1 className='notebook-title'>Edit notebook</h1>
                    <i className="fas fa-times" onClick={this.handleClose}></i>
                    <label>Name
                        <input type="text" className='notebook-input' value={this.state.title} onChange={this.update("title")} placeholder="Notebook name" />
                    </label>
                    {this.renderErrors()}
                    <div className='new-nb-btns'>
                        <button className='cancel' onClick={this.handleClose}>Cancel</button>
                        <button className='continue' onClick={this.handleSubmit}>Continue</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(EditNotebook);