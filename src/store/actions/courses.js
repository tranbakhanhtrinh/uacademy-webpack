import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const getCoursesStart = () => {
    return {
        type:actionTypes.GET_COURSES_START
    }
}

export const getCoursesFail = (error) => {
    return {
        type:actionTypes.GET_COURSES_FAIL,
        error:error
    }
}

export const getCoursesSuccess = (courses) => {
    return {
        type: actionTypes.GET_COURSES_SUCCESS,
        courses: courses
    }
}

export const fetchCourses = () => {
    return dispatch => {
        dispatch(getCoursesStart());
        axios.get("/courses.json")
            .then(res => {
                dispatch(getCoursesSuccess(res.data))
            })
            .catch(err => {
                dispatch(getCoursesFail(err))
            })
    }
}

export const getCourse = (course) => {
    return {
        type: actionTypes.GET_COURSE,
        course: course
    }
}

export const fetchCourse = () => {
    return dispatch => {
        axios.get("/course.json")
            .then(res => {
                dispatch(getCourse(res.data))
            })
    }
}

