import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as countActions from '../actions/countActions';
import * as listActions from '../actions/listActions';
import RouterBox from './RouterBox';

class App extends Component{
  static propTypes = {
    count: PropTypes.number,
    list: PropTypes.array,
    countActions: PropTypes.object,
    listActions: PropTypes.object,
  }

  render() {
    return (
      <div className='reactApp'>
        <h1>React</h1>
        <h1 onClick={this.props.countActions.addCount}>ADD COUNT</h1>
        <h1 onClick={this.props.countActions.subCount}>SUB COUNT</h1>
        <h1 onClick={this.props.listActions.pushList}>PUSH LIST</h1>
        <h1 onClick={this.props.listActions.subList}>SUB LIST</h1>
        <h1 onClick={this.props.listActions.getList}>GET LIST</h1>
        <h2>{this.props.count}</h2>
        <h2>{this.props.list.length}</h2>
        <div  style={{ background: 'red' }}>{this.props.list.map((item, index) => {
          return (
            <div>{item}</div>
          )
        })}</div>
        <RouterBox />
      </div>
    )
  }
}
function initMapDispatchToProps(dispatch) {
  return {
    countActions: bindActionCreators(countActions, dispatch),
    listActions: bindActionCreators(listActions, dispatch),
  }
}
export default connect((state) => state, initMapDispatchToProps)(App)