import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { 
    Editor, 
    EditorState, 
    RichUtils,
    convertFromRaw,
    convertToRaw,
    DefaultDraftBlockRenderMap } from 'draft-js';

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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateType = this.updateType.bind(this);
        this.onChange = (editorState) => this.setState({ editorState });
        // this.blockRendererFn = this.blockRendererFn.bind(this)
        // this.handleKeys = command => this._handleKeys.bind(command)
        this.onTab = e => this._onTab(e)
        this.toggleBlockType = type => this._toggleBlockType(type)
        this.focus = this.focus.bind(this);

    };

    focus() {
        this.refs.editor.focus();
    };

    handleSubmit(e) {
        e.preventDefault();
        const enteredText = convertToRaw(this.state.editorState.getCurrentContent());
        const textBody = JSON.stringify(enteredText);
            const note = {
                id: this.state.id,
                title: this.state.title,
                body: textBody,
                authorId: this.state.authorId,
                notebookId: this.state.notebookId
            };
            this.props.updateNote(note);
    }


    componentWillUnmount() {
        this.autoSave()
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
            // this.props.history.push(`/notes/${this.props.note.id}`)
        });
        
        setInterval(() => {
            this.autoSave()
        }, 5000)
    }

    // _handleKeys(command) {
    //     const newState = RichUtils.handleKeyCommand(this.state.editorState, command)

    //     if (newState) {
    //         this.onChange(newState)
    //         return 'handled'
    //     }

    //     return 'not-handled'
    // }

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

    convertForEditing(note) {
        if (note.body) {
            const contentState = convertFromRaw(JSON.parse(note.body))
            debugger
            this.setState({ editorState: EditorState.createWithContent(contentState) })
        }
    }

    createBlankEditor() {
        this.setState({ editorState: EditorState.createEmpty() })
    }

    richTextEditor() {
        
        const contentState = this.state.editorState.getCurrentContent();
        let className = 'rtf-editor'

        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += 'RichEditor-hidePlaceholder'
            }
        }

        return(
                <div className={className} onClick={this.focus}>
                    <Editor
                        ref={"editor"}
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        onTab={this.onTab}
                        placeholder="Start writing or choose a template"
                        toggleBlockType={this.toggleBlockType}
                    />
                </div>
        )
    }

    // blockRendererFn(contentBlock) {
    //     if (contentBlock.getType() === CHECKABLE_LIST_ITEM) {
    //         return {
    //             component: CheckableListItem,
    //             props: {
    //                 onChangeChecked: () => this.onChange(
    //                     CheckableListItemUtils.toggleChecked(this.state.editorState, contentBlock),
    //                 ),
    //                 checked: Boolean(contentBlock.getData().get('checked'))
    //             }
    //         }
    //     }
    // }


    _onTab(e) {
        const maxDepth = 4
        this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth))
    }

    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(this.state.editorState, blockType),
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

        return(
            <div className='note-detail-page' ref="banana">
                <div className='rich-text-editor-parent'>
                    <div className='notebook-header'>
                        {this.pathSlicer(this.props.location.pathname) === "/notes/" ? titleView() : null}
                    </div>

                    <form className='edit-note-detail'>                    
                        <input type="text" className='note-detail-tite' value={this.state.title} onChange={this.updateType("title")} placeholder="Title" />
                        <br/> 
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