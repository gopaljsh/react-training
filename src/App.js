import React, { Component } from 'react';
import './App.css';

import NavbarMenu from './component/navbar';
import CarouselSlider from './component/carousel';
import Test from './component/test';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TableComp from './component/table';
import FormComp from './component/form';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [
        {
          id: 1,
          company: 'nokia',
          model: 'Lumia',
          prise: '10,000'
        },
        {
          id: 2,
          company: 'redmi',
          model: 'Note 9',
          prise: '12,000'
        },
        {
          id: 3,
          company: 'Realme',
          model: 'Nazaro',
          prise: '10,000'
        },
        {
          id: 4,
          company: 'Samsung',
          model: 'note 10s',
          prise: '10,000'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {/* <Test topictitle="Home" topics='topic 4'/> */}
        <Router>
          <NavbarMenu title="Navbar" menu={['Mobile', 'Car', 'Form']} />
          <CarouselSlider />
          <Route path="/" exact render={(props) => <TableComp {...props} arr={this.state.arr}></TableComp>}></Route>
          <Route path="/Car" exact component={Test}></Route>
          <Route path="/Form" exact component={FormComp}></Route>
        </Router>
        {/* <TableComp arr={this.state.arr} /> */}
      </div>
    )
  }
}