import * as actionTypes from './actionTypes';

import axios from '../../axios';

export const getAbout = (header,hinhanh,gv) => {
    return {
        type: actionTypes.GET_ABOUT,
        header:header,
        hinhanhlophoc: hinhanh,
        giangvien: gv
    }
}


export const fetchAbout = () => {
    return dispatch => {
        axios.get("/aboutus.json")
            .then(res => {
                // dispatch(getHeader(res.data.header));
                // dispatch(getHinhAnh(res.data.hinhanh))
                dispatch(getAbout(res.data.header,res.data.hinhanh,res.data.giangvien))
            })
    }
}