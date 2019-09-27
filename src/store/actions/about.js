import * as actionTypes from './actionTypes';

import axios from '../../axios';

export const getHeader = (header) => {
    return {
        type: actionTypes.GET_HEADER,
        header:header
    }
}

export const fetchHeader = () => {
    return dispatch => {
        axios.get("/aboutus.json")
            .then(res => {
                // console.log(res.data.header);
                dispatch(getHeader(res.data.header))
            })
    }
}