import axios from 'axios';

export const loadSmurfs = dispatch => {
  dispatch({ type: "SMURF_LOADING_START" });
  axios
    .get('http://localhost:3333')
    .then(res => {
      console.log(res);
      dispatch({ type: "SMURF_LOADING_SUCCESS", payload: res.data });
    })
    .catch(err => {
      console.error(err);
    })
}