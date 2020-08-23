export const ADD_ONE = "ADD_ONE";
export const MINUS_ONE = "MINUS_ONE";
export const GET_GOALS_SUCCESS = "GET_GOALS_SUCCESS"
export const LOADDATA = "LOADDATA"
export const LOAD_FAIL = "LOAD_FAIL"

const add = (value) => ({
  type: ADD_ONE,
  value,
});

const subtract = (value) => ({
  type: MINUS_ONE,
  value,
});

const getData = goals => ({
  type: GET_GOALS_SUCCESS,
  goals,
})

const loadData = () =>({
  type: LOADDATA,
})

const errorResponse = (error) => ({
  type: LOAD_FAIL,
  error,
})

export { subtract, add, errorResponse, getData, loadData };
