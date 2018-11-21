import axios from 'axios';
export function pushList() {
  return { type: 'PUSH_LIST' };
}
export function subList() {
  return { type: 'SLICE_LIST' };
}
export function getList() {
  return (dispatch, getState) => {
    axios.get('https://api.douban.com/v2/book/search?q= "百年孤独"')
      .then((data) => {
        dispatch({ type: 'GET_LIST', value: data });
      })
      .catch((error) => {
        dispatch({ type: 'GET_LIST_ERROR', value: error.message });
      })

  }
}