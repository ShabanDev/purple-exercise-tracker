import React from 'react';
import styled from 'styled-components';

const InlineForm = styled.div`
display: flex;
justify-content: space-around;
`;

const StyledDiv = styled.div`
box-sizing: border-box;
border-radius: 5px;
background: #674E6B;
color: #FFF;
padding: 5px 15px;
width: 60%;
min-width: 800px;
max-width: 1200px;
margin: 2px auto;
`;

class ActivityList extends React.Component {
    render() {
        return <StyledDiv>
            <h3>Activity List</h3>
            <code>GET /api/exercise/log?&#123;userId&#125;[&amp;from][&amp;to][&amp;limit]</code>
            <InlineForm>
                <input type="text" name="userId" placeholder="userId" required/>
                <input type="date" name="from" placeholder="from" />
                <input type="date" name="to" placeholder="to" />
                <input type="number" min="1" placeholder="limit" />
                <button>Get activity</button>
            </InlineForm>
            <table>
                <thead>
                    <tr><th>Description</th></tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </StyledDiv>
    }
}

export default ActivityList;