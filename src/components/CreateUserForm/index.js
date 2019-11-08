import React from 'react';
import styled from 'styled-components';
import StyledForm from '../StyledForm'
import FormList from '../FormList';

class CreateUserForm extends React.PureComponent {
    render(){
        return <form method="POST" action="/api/exercise/new-user">
            <h3>Create a New User</h3>
            <pre><code>POST /api/exercise/new-user</code></pre>
            <FormList>
                <li>
                    <input type="text" name="username" placeholder="username" />
                </li>
                <li>
                    <input type="submit" value="Submit" />
                </li>
            </FormList>
        </form>
    }
}

export default CreateUserForm;