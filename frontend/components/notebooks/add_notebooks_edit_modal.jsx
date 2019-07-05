import React from 'react';
import EditModal from './edit_modal'

class AddNotebooksEditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false,
        notebook: this.props.notebook }
        this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        
        return (
            <div className="nb-edit-btn">
                <button type="button" onClick={() => this.toggleModal()}>Edit Notebook Title</button>
                <EditModal show={this.state.isOpen} onClose={() => this.toggleModal()} notebookId={this.state.notebook.id} />
            </div>
        )
    }
}

export default AddNotebooksEditModal;