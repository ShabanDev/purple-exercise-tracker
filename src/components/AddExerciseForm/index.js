import React from 'react';
import styled from 'styled-components';
import StyledForm from '../StyledForm';
import FormList from '../FormList';

class AddExerciseForm extends React.PureComponent {
    render(){
        return (<form method="POST" action="/api/exercise/add">
            <h3>Add Exercises</h3>
            <pre><code>POST /api/exercise/add</code></pre>
            <FormList>
                <li>
                    <input type="text" name="userId" placeholder="*userId" required />
                </li>
                <li>
                    <input type="text" name="description" placeholder="*description" required />
                </li>
                <li>
                    <input type="number" min="1" name="duration" placeholder="*duration (mins.)" required />
                </li>
                <li>
                    <input type="date" name="date" placeholder="date (yyyy-mm-dd)" />
                </li>
                <li>
                    <input type="submit" value="Submit" />
                </li>
            </FormList>
        </form>);
    }
}

export default AddExerciseForm;