import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NoteDetaiContainer from '../notes/note_detail_container';
import NoteDetaiContainerForNotebooks from '../notes/note_detail_container_for_notebooks';

function idRemover(str) {
    let nums = [',', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < str.length; i++) {
        if (nums.includes(str[i])) {
            return str.slice(0, i);
        };
    };
    return str;
};

function dataExtractorOne(str) {
    let newStr = str.slice(14);
    let newArr = newStr.split(",");
    let results = [];
    for (let i = 0; i < newArr.length; i++) {
        results.push(parseInt(newArr[i]));
    };
    return results;
};
function dataExtractorTwo(str) {
    let newStr = str.slice(16);
    let newArr = newStr.split(",");
    let results = [];
    for (let i = 0; i < newArr.length; i++) {
        results.push(parseInt(newArr[i]));
    };
    return results;
};

function NotesModal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    const action = idRemover(modal);

    let component;
    switch (action) {
        case 'nbNotesUpdate':
            const ids = dataExtractorOne(modal);
            if (isNaN(ids[0])) {
                break;
            }
            const noteId = ids[0];
            const notebookId = ids[1];

            component = <NoteDetaiContainer  
                noteId={noteId} 
                notebookId={notebookId} 
            />
            break;
        case 'nbNotesUpdateNb':
            const otherIds = dataExtractorTwo(modal);
            if (isNaN(otherIds[0])) {
                break;
            }

            component = <NoteDetaiContainerForNotebooks  
                noteId={otherIds[0]} 
                    notebookId={otherIds[1]} 
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(NotesModal);
