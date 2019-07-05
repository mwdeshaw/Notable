// import React from 'react';
// import NotebookListItem from './notebook_list_item';
// import { Link } from 'react-router-dom';

// class NotebooksModal extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { open: false };
//         this.manageClicks = this.manageClicks.bind(this);
//     };

//     componentDidMount() {
//         this.props.fetchNotebooks()
//     };

//     manageClicks() {
        
//         if (this.state.open === false) {
//             this.setState({ open: true }) 
//         } else {
//             this.setState({ open: false }) 
//         }
//     };

//     render() {

//         const detailedView = () => (
//             <div classsName='detail-modal'>
//                 <h3 className='down-arrow' onClick={this.manageClicks}>▼</h3>
//                 <Link to='/notebooks'><h3>Notebooks</h3></Link>
//                 <ul className='notebooks-list'>
//                     <NotebookListItem/>
//                 </ul>
//             </div>
//         );

//         const basicView = () => (
//             <div className='basic-view'>
//                 <h3 className='down-arrow' onClick={this.manageClicks}>▶︎</h3>
//                 <Link to='/notebooks'><h3>Notebooks</h3></Link>
//             </div>
//         );

//         return this.state.open ? detailedView() : basicView()
//     }
// }

// export default NotebooksModal;