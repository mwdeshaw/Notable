import React from 'react';
import PropTypes from 'prop-types';
import CreateNewNotebookContainer from '../notebooks/create_new_notebook_container';

class AddNotebooksModal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
            
          <CreateNewNotebookContainer />

          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

AddNotebooksModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool,
    children: PropTypes.node
  };
  
  export default AddNotebooksModal;