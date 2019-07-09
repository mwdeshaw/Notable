// import React from 'react';
// import { withRouter } from 'react-router-dom';

// class CreateNoteForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: "",
//             body: "",
//             author_id: this.props.currentUser,
//             notebook_id: this.props.notebookId
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.clearErrors();
//         this.props.createNote(this.state)
//             .then(() => this.props.history.push("/notes"))
//     };

//     updateType(type) {
//         return (e) => {
//             this.setState({ [type]: e.currentTarget.value })
//         };
//     };

//     render() {
//         return (
//             <div className='note-form-container'>
//                 <h1>create a note</h1>
//                 <div className='line-div'>
//                     <hr className='line-note-form' />
//                 </div>
//                 <form className="create-note-form">
//                         <input type="text" className='note-tite' value={this.state.title} onChange={this.updateType("title")} placeholder="Title" />
//                         <textarea className='note-text' value={this.state.body} onChange={this.updateType("body")} placeholder="Start writing or choose a template"></textarea>
                    
//                     <div className='note-create-btn'>
//                             <button id='create-note' onClick={this.handleSubmit}>create</button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

// export default withRouter(CreateNoteForm);