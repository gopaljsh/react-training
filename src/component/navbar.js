import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class NavbarMenu extends Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
                <Nav className="ml-auto">
                    {/* {this.props.menu.map((menu, index) => {
                        return <Nav.Link href={'#'+menu} key={index}>{menu}</Nav.Link> 
                    })} */}
                    {/* <Link to="/">Home</Link>
                    <Link to="/test">Test</Link> */}

                    {/* <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/test" className="nav-link">Test</Link>
                        </li>
                    </ul> */}
                    <ul className="navbar-nav">
                        {this.props.menu.map((menu, index) => {
                            return <li className="nav-item" key={index}>
                                        <Link to={menu === 'Mobile' ? '/' : `/${menu}` } className="nav-link">{menu}</Link>
                                    </li>
                        })}
                    </ul>

                </Nav>
            </Navbar>
        )
    }
}
