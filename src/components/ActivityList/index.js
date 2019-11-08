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


const ResponseTable = styled.table`
width: 50%;
margin: 0 auto;
`;

class ActivityList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userId: '',
            from: '',
            to: '',
            limit: 10,
            response: []
        };

        this.userIdChange = this.userIdChange.bind(this);
        this.fromChange = this.fromChange.bind(this);
        this.toChange = this.toChange.bind(this);
        this.limitChange = this.limitChange.bind(this);
        this.submitClick = this.submitClick.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }
    userIdChange(ev){
        this.setState({
            userId: ev.target.value
        });
    }
    fromChange(ev){
        this.setState({
            from: ev.target.value
        });
    }
    toChange(ev){
        this.setState({
            to: ev.target.value
        });
    }
    limitChange(ev){
        this.setState({
            limit: ev.target.value
        });
    }
    submitClick(){
        console.log(this.state);
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `/api/exercise/log?userId=${this.state.userId}&from=${this.state.from}&to=${this.state.to}&limit=${this.state.limit}`);
        xhr.send();
        xhr.onload = this.handleResponse;
    }
    handleResponse(ev){
        console.log('response');
        let response = JSON.parse(ev.target.response);
        console.log(response);
        this.setState({
            response
        });
    }
    render() {
        return <div>
            <h3>Activity List</h3>
            <pre><code>GET /api/exercise/log?&#123;userId&#125;[&amp;from][&amp;to][&amp;limit]</code></pre>
            <div className="row">
                <div className="column">
                    <label htmlFor="userId">User ID</label>
                    <input type="text" name="userId" placeholder="userId" id="userId" required value={this.state.userId} onChange={this.userIdChange} />
                </div>
                <div className="column">
                    <label htmlFor="date-from">From</label>
                    <input type="date" name="from" placeholder="from" id="date-from" value={this.state.from} onChange={this.fromChange}/>
                </div>
                <div className="column">
                    <label htmlFor="date-to">To</label>
                    <input type="date" name="to" placeholder="to" id="date-to" value={this.state.to} onChange={this.toChange}/>
                </div>
                <div className="column">
                    <label htmlFor="limit">Limit</label>
                    <input type="number" min="1" placeholder="limit" value={this.state.limit} onChange={this.limitChange}/>
                </div>
                <div className="column">
                    <label htmlFor="get-activities">&nbsp;</label>
                    <button id="get-activities" onClick={this.submitClick}>Get activity</button>
                </div>
            </div>
            <ResponseTable>
                <thead>
                    <tr><th>Description</th><th>Duration (min.)</th><th>Date</th></tr>
                </thead>
                <tbody>
                    {this.state.response.map((res) => {
                        return (<tr><td>{res.description}</td><td>{res.duration}</td><td>{(new Date(res.date)).toLocaleDateString()}</td></tr>);
                    })}
                </tbody>
            </ResponseTable>
        </div>
    }
}

export default ActivityList;