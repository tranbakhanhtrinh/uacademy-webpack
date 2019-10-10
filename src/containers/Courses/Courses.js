import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../../components/UI/Button/Button';
import * as actionTypes from '../../store/actions';

import './Courses.scss';

class Courses extends Component {
    state = {
        course: null
    }
    componentDidMount() {
        this.props.onFetchCourses();
        const btn_tuvan = document.querySelectorAll('.btn_tuvan');
        btn_tuvan.forEach((e,index) => {
            btn_tuvan[index].addEventListener('click', () => {
                // var value = kh_popup.options[index + 1].value;
                
            },false)
        })
    }

    

    

    render(){ 
        const coursesArray = [].concat.apply([],this.props.courses);        
        const updatedCourses = coursesArray.map((arr,index) => {
            const trimmedCourseName = arr.courseName.toLowerCase().split(" ").join("-")
            return(
                <div key={index} className="col-md-4">
                    <div className="khoahoc">
                        <Link to={`${this.props.match.url}/${trimmedCourseName}`}>
                            <figure>
                                <img src={`images/${arr.img}`} alt="" className="img-fluid mx-auto d-block" />
                            </figure>
                            <p className="level_title">
                                {arr.courseName}
                            </p>
                            <p className="old_price">
                                {arr.oldPrice}
                            </p>
                            <div className="bd_gradient">
                                <div className="new_price" dangerouslySetInnerHTML= {{ __html: arr.newPrice}}></div>
                            </div>
                            <div className="list" dangerouslySetInnerHTML= {{ __html: arr.des}}></div>
                        </Link>  
                        <Button type="button" className="btn_tuvan" data_toggle="modal" data_target="#form_tuvan">NHẬN TƯ VẤN</Button>
                    </div>
                </div>
            )
        })
        
        return(
            <section id="course">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="title">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. da. 
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {updatedCourses}
                    </div>
                </div>
            </section>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        courses: state.courses.courses
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onFetchCourses: () => dispatch(actionTypes.fetchCourses())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Courses);