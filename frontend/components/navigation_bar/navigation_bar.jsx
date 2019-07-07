import React from 'react';
import HomePageContainer from '../landing_pages/home/home_page_container'
import Sidebar from './sidebar';


class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.fetchNotebooks();
    };

    render() {
        
        if (this.props.currentUser) {
        return (
            <div className='main-nav'>
                <Sidebar
                    currentUser={this.props.currentUser.email}
                    logout={this.props.logout} />
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