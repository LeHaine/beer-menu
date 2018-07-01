import { combineReducers } from "redux";
import {
    BEERS_HAVE_ERRORS,
    BEERS_ARE_LOADING,
    BEERS_FETCH_DATA_SUCCESS
} from "./action-types";

const defaultState = {
    beers: []
};

const beersHaveError = (state = false, action) => {
    switch (action.type) {
        case BEERS_HAVE_ERRORS:
            return action.hasError;
        default:
            return state;
    }
};

const beersAreLoading = (state = false, action) => {
    switch (action.type) {
        case BEERS_ARE_LOADING:
            return action.isLoading;
        default:
            return state;
    }
};

const beers = (state = defaultState, action) => {
    switch (action.type) {
        case BEERS_FETCH_DATA_SUCCESS:
            return action;
        default:
            return state;
    }
};

export default combineReducers({
    beers,
    beersHaveError,
    beersAreLoading
});
