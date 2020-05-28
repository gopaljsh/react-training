import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';

export default class Addform extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.form = React.createRef();
    }
    

    onSubmit = () => {

        let valueobj = {
            id: this.props.length + 1,
            company: this.form.company.value,
            model: this.form.model.value,
            price: this.form.price.value
        }
        
        this.props.addvalue(valueobj);

        this.form.company.value = '';
        this.form.model.value = '';
        this.form.price.value = '';
    }

    render() {
        return (
            <div>
                <Form ref={ref => this.form = ref}>
                    <Form.Row>
                        <Col>
                            <Form.Control type="text" name="company" placeholder="Company" />
                        </Col>
                        <Col>
                            <Form.Control type="text" name="model" placeholder="Model" />
                        </Col>
                        <Col>
                            <Form.Control type="text" name="price" placeholder="Price" />
                        </Col>
                        <Col>
                            <Button type="button" onClick={this.onSubmit}>Add</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}
