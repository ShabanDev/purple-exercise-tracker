import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

import AppHeader from './components/AppHeader';
import CreateUserForm from './components/CreateUserForm';
import AddExerciseForm from './components/AddExerciseForm';
import ActivityList from './components/ActivityList';

class App extends React.PureComponent {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="column">
                        <AppHeader />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <CreateUserForm />
                    </div>
                    <div className="column">
                        <AddExerciseForm />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <ActivityList />
                    </div>
                </div>
                
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('exercise-tracker'));