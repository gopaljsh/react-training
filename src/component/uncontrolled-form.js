import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class UncontrolFormComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: 'bbc@bbc.com',
            password: 'abc',
            confirmpassword: 'abc',
            gender: 'female',
            position: 'position2',
            sliderStyle: {
                position: 'absolute',
                right: '-100%',
                top: '50px',
                width: '419px',
                border: '1px solid #ccc',
                textAlign: 'left',
                padding: '10px',
                background: '#fff',
                transition: 'all .3s ease'
            }
        }

        this.form = React.createRef();
    }


    changeHandler = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'email':
                this.setState({ [name]: value })
                break;
            case 'password':
                this.setState({ [name]: value })
                break;
            case 'confirmpassword':
                this.setState({ [name]: value })
                break;
            case 'gender':
                this.setState({ [name]: value })
                break;
            case 'position':
                this.setState({ [name]: value })
                break;
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        let sliderStyle = {...this.state.sliderStyle};
        sliderStyle.right = '-154px';
        this.setState({
            sliderStyle
        });

       const postData = {
            'email': this.form.email.value,
            'password': this.form.password.value,
            'confirmpassword': this.form.confirmpassword.value,
            'gender': this.form.gender.value,
            'position': this.form.position.value
        }

        axios.post('https://jsonplaceholder.typicode.com/posts', postData)
            .then(res => console.log(res.data));
     }

    render() {
        const {email, password, confirmpassword, gender, position} = this.state;
        return (
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-sm-6 text-left m-5">
                        <Form onSubmit={this.onSubmit} ref={form => this.form = form}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" defaultValue={email} onChange={this.changeHandler} />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" defaultValue={password} onChange={this.changeHandler} />
                            </Form.Group>
                            <Form.Group controlId="formGroupConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" name="confirmpassword" placeholder="Password" defaultValue={confirmpassword} onChange={this.changeHandler} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="d-block">Gender</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label='Male'
                                    name="gender"
                                    value="male"
                                    checked={gender === "male"}
                                    inline
                                    onChange={this.changeHandler}
                                />
                                <Form.Check
                                    type="radio"
                                    label='Female'
                                    name="gender"
                                    value="female"
                                    checked={gender === "female"}
                                    inline
                                    onChange={this.changeHandler}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGridState">
                                <Form.Label>Position</Form.Label>
                                <Form.Control as="select" name="position" defaultValue={position} onChange={this.changeHandler}>
                                    <option value="position1">Position 1</option>
                                    <option value="position2">Position 2</option>
                                    <option value="position3">Position 3</option>
                                </Form.Control>
                            </Form.Group>
                            <Button type="submit">Submit</Button>
                        </Form>

                    </div>
                </div>
                    <div style={this.state.sliderStyle}> 
                        Email : {this.state.email} <br />
                        Password : {this.state.password} <br />
                        confirm-password : {this.state.confirmpassword} <br />
                        Gender : {this.state.gender} <br />
                        Position : {this.state.position}
                    </div>
            </div>
        )
    }
}