import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class FormComp extends Component {

    

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            confirmpassword: '',
            gender: '',
            position: '',
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

    onSubmit = () => {
        let sliderStyle = {...this.state.sliderStyle};
        sliderStyle.right = '-154px';
        this.setState({
            sliderStyle
        });
     }

    render() {
        return (
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-sm-6 text-left m-5">
                        {/* <input type="text" name="email" className="form-control" onChange={this.changeHandler} />
                        <input type="text" name="password" className="form-control" onChange={this.changeHandler} />
                        <input type="text" name="confirmpassword" className="form-control" onChange={this.changeHandler} />
                        <select className="form-control" name="place" onChange={this.changeHandler}>
                            <option value="office">office</option>
                            <option value="home">home</option>
                        </select>
                        <button type="button" onClick={this.onSubmit}>Submit</button> */}

                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.changeHandler} />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" onChange={this.changeHandler} />
                            </Form.Group>
                            <Form.Group controlId="formGroupConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" name="confirmpassword" placeholder="Password" onChange={this.changeHandler} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="d-block">Gender</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label='Male'
                                    name="gender"
                                    value="male"
                                    inline
                                    onChange={this.changeHandler}
                                />
                                <Form.Check
                                    type="radio"
                                    label='Female'
                                    name="gender"
                                    value="female"
                                    inline
                                    onChange={this.changeHandler}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGridState">
                                <Form.Label>Position</Form.Label>
                                <Form.Control as="select" name="position" onChange={this.changeHandler}>
                                    <option value="position1">Position 1</option>
                                    <option value="position2">Position 2</option>
                                    <option value="position3">Position 3</option>
                                </Form.Control>
                            </Form.Group>
                            <Button type="button" onClick={this.onSubmit}>Submit</Button>
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