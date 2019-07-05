import React from 'react';
import HomePageContainer from '../landing_pages/home/home_page_container'
import NotebooksModal from '../modals/notebooks_modal';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    };

    // componentDidMount() {
    //     const {currentUser, fetchNotebooks, logout } = this.props;
    //     if (this.props.currentUser) {
    //         this.props.fetchNotebooks();
    //         this.setState({ notebooks: fetchNotebooks() })
    //     };
    // };

    render() {
        if (this.props.currentUser) {
            // this.props.fetchNotebooks();
        return (
            <div>
                <p>{this.props.currentUser.email}</p>
                <ul className='logout-dropdown'>
                    <button className='logout' onClick={this.props.logout}>Sign out {this.props.currentUser.email}</button>
                </ul>
                <div className='nav-bar-items'>All Notes
                    <div className='new-notes'>
                        Create new note
                    </div>
                    <div className='notebooks-modal'>  
                        {/* <NotebooksModal/> */}
                    </div>
                    <div className='shared'>
                        Shared with me
                    </div>
                    <div className='tags'>
                        Tags
                    </div>
            
                </div>
            </div>
            );
        } else {
            return(
            <HomePageContainer/>
            );
        }
    };
}

export default NavigationBar;