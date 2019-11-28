import * as actionTypes from '../actions/actionTypes';

const initialState = {
    courses: null,
    course: null,
    loading: false
}

const getCourseStart = (state,action) => {
    return {
        ...state,
        loading: true
    }
}

const getCoursesSuccess = (state,action) => {
    return{
        ...state,
        courses:action.courses,
        loading : false
    }
}

const getCourseFail = (state,action) => {
    return {
        ...state,
        loading: false
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
        case(actionTypes.GET_COURSES_START): return getCourseStart(state,action)
        case(actionTypes.GET_COURSES_SUCCESS): return getCoursesSuccess(state,action)
        case(actionTypes.GET_COURSES_FAIL): return getCourseFail(state,action)
        case(actionTypes.GET_COURSE): return getCourse(state,action)
        default: return state
    }
    
}

export default reducer;