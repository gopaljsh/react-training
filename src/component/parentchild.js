import React, { Component, Children } from 'react';
import Table from 'react-bootstrap/Table';

export default class ParentchildComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            arr: [
                {
                    id: 1,
                    company: 'samsung',
                    model: 's20',
                    price: '10,000'
                },
                {
                    id: 2,
                    company: 'redmi',
                    model: 'k20',
                    price: '15,000'
                },
                {
                    id: 3,
                    company: 'realme',
                    model: 'nazaro',
                    price: '20,000'
                },
                {
                    id: 4,
                    company: 'iPhone',
                    model: 's2',
                    price: '40,000'
                },
            ]
        }
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
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.arr.map((mobile, index) => (
                                    <tr key={index}>
                                        <td>{mobile.id}</td>
                                        <td>{mobile.company}</td>
                                        <td>{mobile.model}</td>
                                        <td>{mobile.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}
