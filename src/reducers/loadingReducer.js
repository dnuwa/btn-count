import { LOADDATA, LOAD_FAIL, GET_GOALS_SUCCESS } from "../actions"

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case LOADDATA:
            return true;

        case GET_GOALS_SUCCESS:
            return false;

        case LOAD_FAIL:
            return false;

        default:
            return state;
    }
};

export default loadingReducer;