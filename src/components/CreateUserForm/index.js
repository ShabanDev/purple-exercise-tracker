import React from 'react';
import styled from 'styled-components';
import StyledForm from '../StyledForm'
import FormList from '../FormList';

class CreateUserForm extends React.PureComponent {
    render(){
        return <StyledForm method="POST" action="/api/exercise/new-user">
            <h3>Create a New User</h3>
            <code>POST /api/exercise/new-user</code>
            <FormList>
                <li>
                    <input type="text" name="username" placeholder="username" />
                </li>
                <li>
                    <input type="submit" value="Submit" />
                </li>
            </FormList>
        </StyledForm>
    }
}

export default CreateUserForm;