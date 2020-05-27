import React, {Component} from 'react'

import './sidebar.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import auth from './auth'
 
export default class SidebarComp extends Component {

  render() {
      return (
          <div className="sidebar navbar navbar-dark bg-dark" style={{flexFlow: 'column', alignItems: 'flex-start'}}>
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link to="/dashboard/mobile" className="nav-link">Mobile</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/dashboard/car" className="nav-link">Car</Link>
                  </li>
              </ul>
              <div className="d-block">
                  <Button type="submit" onClick={() => {
                      auth.logout(() => {
                        this.props.history.push('/');
                      });
                  }}>Sign Out</Button>
              </div>
          </div>
      )
  }   
}