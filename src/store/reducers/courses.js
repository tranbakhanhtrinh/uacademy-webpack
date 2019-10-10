import * as actionTypes from '../actions/actionTypes';

const initialState = {
    courses: null,
    course: null
}

const getCourses = (state,action) => {
    return{
        ...state,
        courses:action.courses
    }
}
const getCourse = (state,action) => {
    return{
        ...state,
        course:action.course
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.GET_COURSES): return getCourses(state,action)
        case(actionTypes.GET_COURSE): return getCourse(state,action)
        default: return state
    }
    
}

export default reducer;