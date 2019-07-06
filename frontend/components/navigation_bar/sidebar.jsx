import React from 'react';
import NotebookListContainer from  './notebook_list_container';
import { Link } from 'react-router-dom';

const styles = {
    searchButton: {
        margin: 10,
        cursor: 'pointer',
    }
}

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.openView = this.openView.bind(this);
        this.closeView = this.closeView.bind(this);
    }

    openView(e) {
        e.preventDefault();
        this.setState({ visible: true })
    }

    closeView(e) {
        e.preventDefault();
        this.setState({ visible: false })
    }

    render() {
        const basicView = () => (
            <div className='basic-view'>
                <div className='notebook-bar'>
                    <div className='row'><h3 className='arrow' onClick={this.openView}>▶︎&#160;&#160;&#160;</h3><Link to='/notebooks'><i className="fas fa-book"></i><h3 className='nb-header'>&#160;&#160;&#160;Notebooks</h3></Link></div>
                </div>
                <div className='tags'>
                    <div className='row'><h3><i className="fas fa-tag"></i><p className='tag-header'>&#160;&#160;&#160;Tags</p></h3></div>
                </div>


            </div>
        );

        const detailedView = () => (
             
            <div className='detail-modal'>
                <div className='notebook-bar'>
                    <div className='row'><h3 className='arrow' onClick={this.closeView}>▼&#160;&#160;&#160;</h3><Link to='/notebooks'><i className="fas fa-book-open"></i><h3 className='nb-header'>&#160;&#160;&#160;Notebooks</h3></Link></div>
                        <NotebookListContainer/>
                </div>
            </div>
        );

        return (
            <div className="sidenav">
                <div className='greeting-container'></div>
                <h1 className='greeting'><i class="fas fa-user-circle"></i>&#160;&#160;{this.props.currentUser}</h1>
                    <button className='logout-btn' onClick={this.props.logout}>Sign out {this.props.currentUser}</button>

                <div className='search-container'>
                    <input type="text" placeholder="Search all notes..." className="search-input" />
                    <span>
                        <button className='search-btn' type="submit" style={styles.searchButton}><i className="fa fa-search"></i></button>
                    </span>
                </div>

                <div className= "side-buttons">
                    <button className='new-note'><i id="icon-new" className="fas fa-plus"></i> New Note</button>
                    <div className='right'>
                        <button className='mid-half'></button>
                        <button className='other-half'><i className="fas fa-chevron-down"></i></button>
                        </div>
                </div>
                <div className='all-notes'>
                    <div className='row'><h3><i className="fas fa-file-alt"></i><p className='nb-header'>&#160;&#160;&#160;All Notes</p></h3></div>
                </div>
                <div className='dropdowns'>
                    {this.state.visible ? detailedView() : basicView() }
                </div>
            </div>
       );
    };
 };

export default Sidebar;