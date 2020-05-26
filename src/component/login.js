import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import auth from './auth';

export default class Login extends Component {

    onSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('email', e.target.email.value);
        localStorage.setItem('password', e.target.password.value);
        auth.login(() => {
            this.props.history.push('/dashboard/mobile');
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-sm-4 text-left">
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" />
                            </Form.Group>
                            <Button type="submit">Login</Button>
                        </Form>
                    </div>
                </div>
                {/* <button onClick={() => {
                    auth.login(() => {
                        this.props.history.push('/app')
                    })
                }}>Login</button> */}
            </div>
        )
    }
}