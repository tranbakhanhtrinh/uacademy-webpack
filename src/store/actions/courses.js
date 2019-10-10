import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const getCourses = (courses) => {
    return {
        type: actionTypes.GET_COURSES,
        courses: courses
    }
}

export const fetchCourses = () => {
    return dispatch => {
        axios.get("/courses.json")
            .then(res => {
                dispatch(getCourses(res.data))
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

