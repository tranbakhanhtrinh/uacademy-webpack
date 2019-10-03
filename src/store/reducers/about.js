import * as actionTypes from '../actions/actionTypes';

const initialState = {
    header: null,
    hinhanhlophoc: null,
    giangvien: null
}

const getAbout = (state, action) => {
    return{
        ...state,
        header:action.header,
        hinhanhlophoc: action.hinhanhlophoc,
        giangvien: action.giangvien
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_ABOUT: return getAbout(state,action)
        default: return state;
    }
}

export default reducer;