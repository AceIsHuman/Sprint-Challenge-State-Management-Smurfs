import axios from 'axios';

export const loadSmurfs = () => dispatch => {
  dispatch({ type: "SMURF_LOADING_START" });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res);
      dispatch({ type: "SMURFS_LOADING_SUCCESS", payload: res.data });
    })
    .catch(err => {
      console.error(err);
    })
}

export const addSmurf = smurf => dispatch => {
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(res);
    })
}