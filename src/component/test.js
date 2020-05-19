import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export default class Test extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          arr: [
            {
              id: 1,
              company: 'Maruti',
              model: 'Maruti 800',
              prise: '4,00,000'
            },
            {
              id: 2,
              company: 'Hyundai',
              model: 'Creta',
              prise: '12,00,000'
            },
            {
              id: 3,
              company: 'Honda',
              model: 'Amaze',
              prise: '9,00,000'
            },
            {
              id: 4,
              company: 'Tata',
              model: 'Nexon',
              prise: '10,00,000'
            }
          ]
        }
      }

    componentDidMount() {
        // let topics = [...this.state.topics];
        // topics.push(this.props.topics);
        // this.setState({
        //     topictitle: this.props.topictitle,
        //     topics: topics
        // })
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
                                {this.state.arr.map((mobile, index) => (
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
                </div>
            </div>
        )
    }
}
