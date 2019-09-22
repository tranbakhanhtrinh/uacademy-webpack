import * as actionTypes from '../actions/actionTypes';

const initialState = {
    course: ''
}

const getCourseName = (state,action) => {
    return{
        ...state,
        course:action.courseName
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.GET_COURSE_NAME): return getCourseName(state,action)
    }
    return state;
}

export default reducer;