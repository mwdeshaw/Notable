import React from 'react';
import EditModal from './edit_modal'
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { fetchNotebook, updateNotebook } from '../../actions/notebooks';
import EditNotebook from './edit_notebook';


class AddNotebooksEditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            // isOpen: false,
            title: this.props.notebook.title,
            id: this.props.notebook.id
        };

        this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    toggleModal() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        // this.props.clearErrors();
        this.props.updateNotebook(this.state.title)
            .then(() => this.props.history.push("/notebooks"))
    };

    update(title) {
        return (e) => {
            this.setState({ [title]: e.currentTarget.value })
        };
    };

    handleClose(e) {
        e.preventDefault();
        this.props.history.push("/notebooks")
    };

    componendDidMount() {
        this.props.fetchNotebook(this.state.id)
    };

    // componentDidUpdate(prevProps) {
    //     debugger
    //     if (prevProps.notebook.id != this.state.notebook.id) {
    //         this.props.fetchNotebook(this.state.notebook.id)
    //     };
    // };

    // renderErrors() {

    //     if (this.props.errors) {
    //         return (
    //             <ul className='errors'>
    //                 {this.props.errors.map((error, idx) => (
    //                     <li key={`error-${idx}`}>
    //                         {error}
    //                     </li>
    //                 ))}
    //             </ul>
    //         );
    //     };
    // };


    render() {
        if (!this.state.title) {
            return "...loading"
        };

        return (
            <div className="nb-edit-btn">
                <button type="button" onClick={() => this.toggleModal()}>Edit Notebook Title</button>
                    <form className="notebook-form">
                        <h1 className='notebook-title'>Edit notebook title</h1>
                        <i className="fas fa-times" onClick={this.handleClose}></i>
                        <p className='notebook-phrase'>Notebooks are useful for grouping notes around a common topic.</p>
                        <label>Name
                        <input type="text" className='notebook-input' value={this.state.title} onChange={this.update("title")} placeholder="Notebook name" />
                        </label>
                        {/* {this.renderErrors()} */}
                        <div className='new-nb-btns'>
                            <button className='cancel' onClick={this.handleClose}>Cancel</button>
                            <button className='continue' onClick={this.handleSubmit}>Continue</button>
                        </div>
                    </form>
                </div>

        );
    }
};




export default (AddNotebooksEditModal);