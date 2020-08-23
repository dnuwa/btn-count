import { LOADDATA, LOAD_FAIL, GET_GOALS_SUCCESS } from '../actions';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case LOAD_FAIL:
            return action.error;
        case LOADDATA:
        case GET_GOALS_SUCCESS:
            return null;

        default:
            return state;
    }
};

export default errorReducer;
