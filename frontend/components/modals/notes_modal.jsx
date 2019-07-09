import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateNoteBookContainer from './create_notebook_container';
import EditNoteBookContainer from './edit_notebook_container';


function idRemover(str) {
    let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < str.length; i++) {
        if (nums.includes(str[i])) {
            return str.slice(0, i);
        };
    };
    return str;
};

function idMaker(str) {
    let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < str.length; i++) {
        if (nums.includes(str[i])) {
            return parseInt(str.slice(i));
        };
    };
};

function NotebooksModal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    const action = idRemover(modal);

    let component;
    switch (action) {
        case 'edit':
            component = <NoteDetailForNotebooks
            id={idMaker(modal)} 
            />;
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
