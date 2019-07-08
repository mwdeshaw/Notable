import React from 'react';
import NavigationBarContainer from '../navigation_bar/navigation_bar_container';


class NotebookShowPage extends React.Component {

    // componentDidMount() {
    //     this.props.fetchNotebook((this.props.match.params.notebookId))
    //     .then(() => this.props.history.push(`/notebooks/${this.props.notebook.id}/notes/${this.props.notebook.notes[0].noteId}`))
    // }
        
    render() {
        const { notebook } = this.props;
        if (!notebook) {
            return (
                <div>Loading...</div>
            )
        }
        
        return(
            <div className='nb-show-parent'>
                <div className='notebook-header'>
                    {/* <h1>{notebook.title}</h1> */}
                </div>
                <NavigationBarContainer />
            </div>
        );
    }
};

export default NotebookShowPage;