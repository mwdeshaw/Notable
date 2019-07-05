import React from 'react';
import PropTypes from 'prop-types';
import EditNotebooksContainer from './edit_notebooks_container';

class AddNotebooksModal extends React.Component {
    
    render() {
        if (!this.props.show) {
            return null;
        }
        
        return (
            <div className="edit-backdrop">
                <div className="modal">

                    <EditNotebooksContainer/>

                    <div className="footer">
                        <button onClick={this.props.onClose}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNotebooksModal;