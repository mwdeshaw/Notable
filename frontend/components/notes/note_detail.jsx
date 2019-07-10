import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { 
    Editor, 
    EditorState, 
    RichUtils,
    convertFromRaw,
    convertToRaw,
} from 'draft-js';

// import '../../../node_modules/draft-js/dist/Draft.css';

    // const styleMap = {
    //     code: {
    //         backgroundColor: 'rgba(0, 0, 0, 0.05)',
    //         fontFamily: 'Consolas, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New',
    //         whiteSpace: 'pre',
    //         fontSize: '12'
    //     },
    //     strikethrough: {
    //         textDecoration: 'line-through'
    //     },
    //     highlight: {
    //         backgroundColor: 'rgba(204, 255, 0, 1)'
    //     }
    // };

class NoteDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.note.id,
            title: this.props.note.title,
            body: this.props.note.body,
            authorId: this.props.note.author_id,
            notebookId: this.props.note.notebook_id,
            editorState: EditorState.createEmpty()
        } 
        this.updateType = this.updateType.bind(this);
        this.onChange = (editorState) => this.setState({ editorState });
        this.focus = this.focus.bind(this);
        this._onClick = this._onClick.bind(this);
    };

    focus() {
        this.refs.editor.focus();
    };

    _onClick(e) {
        e.preventDefault();
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, e.target.name));
    }

    updateType(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    };

    componentDidMount() {
        this.props.fetchNote(this.props.note.id)
        .then(() => {
            this.convertForEditing(this.props.note)
        });
        
        setInterval(() => {
            this.autoSave()
        }, 5000)
    }

    componentWillUnmount() {
        this.autoSave()
    }

    autoSave() {
        if (!this.props.note.title || !this.props.note.body) {
            return null
        }
        const enteredText = convertToRaw(this.state.editorState.getCurrentContent());
        const textBody = JSON.stringify(enteredText);
        if ((this.state.title !== this.props.note.title) || (textBody !== this.props.note.body)) {
            const note = {
                id: this.state.id,
                title: this.state.title,
                body: textBody,
                authorId: this.state.authorId,
                notebookId: this.state.notebookId
            };
            this.props.updateNote(note);
        };
    };

    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    convertForEditing(note) {
        if (note.body) {
            const contentState = convertFromRaw(JSON.parse(note.body))
            this.setState({ editorState: EditorState.createWithContent(contentState) })
        }
    }

    richTextEditor() {
        return(
            <div className="rtf-editor" onClick={this.focus}>
                    <Editor
                        ref={"editor"}
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        placeholder="Start writing..."
                        handleKeyCommand={this.handleKeyCommand}
                    />
                </div>
        )
    }

    pathSlicer(path) {
        let count = 0;
        for(let i = 0; i < path.length; i++) {
            if (path[i] === "/") {
                count += 1;
            }
            if (count === 2) {
                return path.slice(0, i + 1)
            }
        }
    }

    render() {
        const titleView = () => (
            <div className='notebook-title'>
                <label>Notebook:
                        <Link to={`/notebooks/${this.props.notebook.id}/notes/${this.props.note.id}`}>{this.props.notebook.title}</Link>
                </label>
            </div>
        );
        
        const styles = ["BOLD", "UNDERLINE", "ITALIC", "CODE"];
        const buttonImg = [<i className="fas fa-bold"></i>, <i className="fas fa-italic"></i>, 
            <i className="fas fa-underline"></i>, <i className="fas fa-strikethrough"></i>, 
            <i className="fas fa-highlighter"></i>, <i className="fas fa-code"></i>];
        const buttons = styles.map((style, idx) => {
            return (
                    <button
                        key={style}
                        name={style}
                        className="btn"
                        onMouseDown={this._onClick}>
                        {buttonImg[idx]}
                    </button>
                );
            });
    
            return(
            <div className='note-detail-page'>
                <div className='rich-text-editor-parent'>
                    <div className='notebook-header'>
                        {this.pathSlicer(this.props.location.pathname) === "/notes/" ? titleView() : null}
                    </div>
                    <div className='toolbar-parent'>
                        {buttons} 
                    </div>

                    <form className='edit-note-detail'> 
                        <input type="text" className='note-detail-tite' value={this.state.title} onChange={this.updateType("title")} placeholder="Title" />         
                        {this.richTextEditor()}
                        <div className='note-create-btn'>
                            <button id='create-note' onClick={this.handleSubmit}>update</button>
                        </div>
                    
                        <div className='note-delete-btn'>
                            <button id='delete-note' onClick={() => this.props.deleteNote(this.props.note.id)}>delete</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(NoteDetail);