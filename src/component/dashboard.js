import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import SidebarComp from './sidebar';
import TableComp from './table';
import Test from './test';
import ParentchildComp from './parentchild';

import './dashboard.css';

class Dashboard extends Component {

    render() {
        return (
            <Router>
                <SidebarComp {...this.props} />
                <div className="dashboard-container">
                    <Switch>
                        <Route path="/dashboard/mobile" component={TableComp} />
                        <Route path="/dashboard/car" component={Test} />
                        <Route path="/dashboard/parentchild" component={ParentchildComp} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default withRouter(Dashboard);