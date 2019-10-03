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
                // const abc = [].concat.apply(res.data);
                // const courses = abc.map( c => {
                //     return {...c};
                // });
                // console.log(typeof(abc));
                dispatch(getCourses(res.data))
            })
    }
}

