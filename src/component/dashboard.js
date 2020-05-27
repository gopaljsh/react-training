import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SidebarComp from './sidebar';
import TableComp from './table';
import Test from './test';

import './dashboard.css';

export default class Dashboard extends Component {

    render() {
        return (
            <Router>
                <SidebarComp {...this.props}/>
                <div className="dashboard-container">
                    <Switch>
                        <Route path="/dashboard/mobile" component={TableComp} />
                        <Route path="/dashboard/car" component={Test} />
                    </Switch>
                </div>
            </Router>
        )
    }
}