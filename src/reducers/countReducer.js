import initState from '../initState';
export default function countReducer(state = initState.count, action) {
  switch (action.type) {
    case 'ADD_COUNT':
      return state + 1;
    case 'SUB_COUNT':
      return state -1;
    default:
      return state;
  }
}