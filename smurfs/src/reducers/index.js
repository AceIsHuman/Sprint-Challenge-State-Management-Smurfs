const initialState = {
  isLoading: false,
  smurfs: []
};

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ("SMURFS_LOADING_START"):
      return {
        ...state,
        isLoading: true
      };
    case ("SMURFS_LOADING_SUCCESS"):
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      }
    default: 
      return state
  }
}