import _ from 'lodash';
import initState from '../initState';
export default function listReducer(state = initState.list, action) {
  switch (action.type) {
    case 'PUSH_LIST':
      return state.concat([1]);
    case 'SLICE_LIST': {
      if (state.length > 1) {
        return _.slice(state, 0, state.length -1);
      }
      return state;
    }
    case 'GET_LIST':
      return action.value;
    case 'GET_LIST_ERROR':
      return [action.value]
    default:
      return state;
  }
}