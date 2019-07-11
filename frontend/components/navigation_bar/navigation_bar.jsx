import React from 'react';
import HomePageContainer from '../landing_pages/home/home_page_container'
import Sidebar from './sidebar';


class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        if (this.props.currentUser) {
        this.props.fetchNotebooks();
        }
    };

    render() {
        if (this.props.currentUser) {
        return (
            <div className='main-nav'>
                <Sidebar
                    currentUser={this.props.currentUser}
                    notebooks={this.props.notebooks}
                    createNote={this.props.createNote}
                    openModal={this.props.openModal}
                    fetchNotes={this.props.fetchNotes}
                    logout={this.props.logout} 
                    lastNote={this.props.lastNote}
                />
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