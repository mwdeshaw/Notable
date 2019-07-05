// import React from 'react';
// import { withRouter } from 'react-router-dom';

// class CreateNewNotebook extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: "",
//             author_id: this.props.currentUser
//         };

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleClose = this.handleClose.bind(this);
//     }

//     handleSubmit(e) {
//         e.preventDefault();  
//         this.props.clearErrors();
//         this.props.createNotebook(this.state)
//         .then(() => this.props.history.push("/notebooks"))
//     };

//     update(title) {
//         return (e) => {
//             this.setState({ [title]: e.currentTarget.value })
//         };
//     };

//     handleClose(e) {
//         e.preventDefault();
//         this.props.history.push("/notebooks")
//     };

//     renderErrors() {

//         if (this.props.errors) {
//             return (
//                 <ul className='errors'>
//                     {this.props.errors.map((error, idx) => (
//                         <li key={`error-${idx}`}>
//                             {error}
//                         </li>
//                     ))}
//                 </ul>
//             );
//         };
//     };

//     render() {
//         return(
//             <div className='new-notebook'>
//                 <form className="notebook-form">
//                     <h1 className='notebook-title'>Create new notebook</h1>
//                     <i className="fas fa-times" onClick={this.handleClose}></i>
//                     <p className='notebook-phrase'>Notebooks are useful for grouping notes around a common topic.</p>
//                     <label>Name 
//                         <input type="text" className='notebook-input' value={this.state.title} onChange={this.update("title")} placeholder="Notebook name"/>
//                     </label>
//                     {this.renderErrors()}
//                     <div className='new-nb-btns'>
//                         <button className='cancel' onClick={this.handleClose}>Cancel</button>
//                         <button className='continue' onClick={this.handleSubmit}>Continue</button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

// export default withRouter(CreateNewNotebook);