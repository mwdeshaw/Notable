import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateNoteBookContainer from './create_notebook_container';
import EditNoteBookContainer from './edit_notebook_container';

function NotebooksModal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) { //modal .type
        case 'create': //object with type, and payload, make it an object, type key: 
            component = <CreateNoteBookContainer />;
            break;
        case 'edit':
            // component = <EditNoteBookContainer id={modal.id}/>;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksModal);
