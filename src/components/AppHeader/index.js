import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    background: transparent;
    color: #7E6D7C;
    padding: 15px 20px;
`;

const HeaderH1 = styled.h1`
    color: #53365D;
    margin-top: 0;
 `

class AppHeader extends React.Component {
    render(){
        return (<HeaderContainer>
            <HeaderH1>Purple Activity Tracker</HeaderH1>
            <p>A purple activity tracker for tracking purple activities.</p>
            </HeaderContainer>);
    }
}

export default AppHeader;