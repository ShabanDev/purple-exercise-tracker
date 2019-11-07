import React from 'react';
import ReactDom from 'react-dom';

class App extends React.PureComponent {
    render(){
        return <h1>Hello, World!</h1>
    }
}

ReactDom.render(<App />, document.getElementById('exercise-tracker'));