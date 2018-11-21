import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Prompt } from 'react-router-dom';
import RouterThird from "./RouterThird";
import RouterOne from "./RouterOne";
import RouterSecond from "./RouterSecond";

export default class RouterBox extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className='header'>这是头部</div>
          <ul className='menu'>
            <li><Link to='/routerOne'>RouterOne</Link></li>
            <li><Link to='/routerSecond'>RouterSecond</Link></li>
            <li><Link to='/routerThird'>RouterThird</Link></li>
          </ul>
          {/*<Prompt when={true} message='????' />*/}
          <Route path='/routerOne' component={RouterOne}/>
          <Route path='/routerSecond' component={RouterSecond}/>
          <Route path='/routerThird' component={RouterThird}/>
        </div>
      </Router>
    )
  }
}
