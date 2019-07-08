import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Notebooks from './notebooks/notebooks';
import NotesContainer from './notes/notes_container';
import NotebookShowPageContainer from './notebooks/notebook_show_page_container';
import NoteDetailContainer from './notes/note_detail_container';

const App = () => (
    <div>
       <Switch>
            <Route exact path="/" component={NavigationBarContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <ProtectedRoute path="/notes" component={NotesContainer} />
            <ProtectedRoute path="/notebooks/:notebookId" component={NotebookShowPageContainer} />
            <ProtectedRoute path="/notebooks/:notebookId/notes/:noteId" component={NoteDetailContainer} />
            <ProtectedRoute path="/notebooks" component={Notebooks} />
        </Switch>
    </div>
);

export default App;