import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

import AppHeader from './components/AppHeader';
import CreateUserForm from './components/CreateUserForm';
import AddExerciseForm from './components/AddExerciseForm';
import ActivityList from './components/ActivityList';

const FormsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 60%;
    min-width: 800px;
    max-width: 1200px;
    margin: 0 auto;
`;

class App extends React.PureComponent {
    render(){
        return (
            <div>
                <AppHeader />
                <FormsContainer>
                    <CreateUserForm />
                    <AddExerciseForm />
                </FormsContainer>
                <ActivityList />
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('exercise-tracker'));