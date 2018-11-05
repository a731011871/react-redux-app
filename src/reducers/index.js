import { combineReducers } from 'redux';
import _ from 'lodash';
import { initState } from '../initState';

function countReducer(state = initState.count, action) {
  switch (action.type) {
    case 'ADD_COUNT':
      return state + 1;
    case 'SUB_COUNT':
      return state - 1;
    default:
      return state;
  }
}
function listReducer(state = initState.list, action) {
  switch (action.type) {
    case 'PUSH_LIST':
      return state.concat([1]);
    case 'SUB_LIST':
      return _.slice(state,0,state.length - 1);
    default:
      return state;
  }
}

export default combineReducers({
  count: countReducer,
  list: listReducer,
})