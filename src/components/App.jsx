import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
// import './App.less';

class App extends Component {
  static propTypes = {
    count: PropTypes.number,
    list: PropTypes.array,
    Actions: PropTypes.object,
  }
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className='App'>
        <h1 >React</h1>
        <div onClick={this.props.Actions.Add}>增加count</div>
        <div onClick={this.props.Actions.Sub}>减少count</div>
        <div onClick={this.props.Actions.PushList}>增加 List</div>
        <div onClick={this.props.Actions.SubList}>减少 List</div>
        <h2 >{this.props.count}</h2>
        <h3>{this.props.list.length}</h3>
      </div>
    )
  }
}
function initMapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(Actions, dispatch),
  };
};

export default connect((state) => state, initMapDispatchToProps)(App);
