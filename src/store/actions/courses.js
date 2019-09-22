import * as actionTypes from './actionTypes';

export const getCourseName = (courseName) => {
    return {
        type: actionTypes.GET_COURSE_NAME,
        courseName: courseName
    }
}

