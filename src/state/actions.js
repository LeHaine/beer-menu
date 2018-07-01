import axios from "axios";
import {
    BEERS_HAVE_ERRORS,
    BEERS_ARE_LOADING,
    BEERS_FETCH_DATA_SUCCESS
} from "./action-types";

export const beersHaveError = bool => ({
    type: BEERS_HAVE_ERRORS,
    hasError: bool
});

export const beersAreLoading = bool => ({
    type: BEERS_ARE_LOADING,
    isLoading: bool
});

export const beersFetchDataSuccess = beers => ({
    type: BEERS_FETCH_DATA_SUCCESS,
    beers
});

export const beersFetchData = url => {
    return dispatch => {
        dispatch(beersAreLoading(true));

        axios
            .get(url)
            .then(response => {
                dispatch(beersAreLoading(false));
                return response;
            })
            .then(response => {
                dispatch(beersFetchDataSuccess(response.data));
            })
            .catch(() => dispatch(beersHaveError(true)));
    };
};
