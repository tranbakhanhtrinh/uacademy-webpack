import * as actionTypes from '../actions/actionTypes';

const initialState = {
    courses: null
}

const getCourses = (state,action) => {
    return{
        ...state,
        courses:action.courses
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.GET_COURSES): return getCourses(state,action)
        default: return state
    }
    
}

export default reducer;