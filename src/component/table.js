import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export default class TableComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             jsonData: []
        }
    }

    async componentDidMount() {
        let response = await this.handleResponse(); 
        this.setState({
            jsonData: response
        });
    }

    async handleResponse() {
        return await fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(json => {
                    return json;
                });
    }
    
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Company</th>
                                    <th>Model</th>
                                    <th>Prise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.arr.map((mobile, index) => (
                                    <tr key={index}>
                                        <td>{mobile.id}</td>
                                        <td>{mobile.company}</td>
                                        <td>{mobile.model}</td>
                                        <td>{mobile.prise}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <div className="col-sm-12">
                        {this.state.jsonData.map((data, index) => <h2 key={index}>{data.completed.toString() + ' ' + data.title}</h2>)}
                    </div>
                </div>
            </div>
        )
    }
}
