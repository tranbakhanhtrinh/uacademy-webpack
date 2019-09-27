import * as actionTypes from '../actions/actionTypes';

const initialState = {
    header: null
}

const getHeader = (state,action) => {
    return{
        ...state,
        header:action.header
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_HEADER: return getHeader(state,action)
        default: return state;
    }
}

export default reducer;