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
        console.log(this.props);
        let course_name = ""; 
        let course_name_params = "" ;
        const btn_tuvan = document.querySelectorAll('.btn_tuvan');
        // const kh_popup = document.querySelector('#khoahoc_popup');
        const khoahoc = document.querySelectorAll('.khoahoc');
        const level_title = document.querySelectorAll('.level_title');
        btn_tuvan.forEach((e,index) => {
            btn_tuvan[index].addEventListener('click', () => {
                // var value = kh_popup.options[index + 1].value;
                
            },false)
        })
        khoahoc.forEach((e,index) => {
            khoahoc[index].addEventListener('click', () => {
                course_name = level_title[index].innerHTML.trim();
                course_name_params = course_name.toLowerCase().split(" ").join("-");
                this.setState({course:course_name_params});
                this.props.onGetCourseName(course_name);
            },false)
        })
    }
    render(){
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
                        <div className="col-md-4">
                            <div className="khoahoc">
                                <Link to={`/${this.state.course}`}>
                                    <figure>
                                        <img src="images/level_img1.png" alt="" className="img-fluid mx-auto d-block" />
                                    </figure>
                                    <p className="level_title">
                                        Digital Performance Marketing
                                    </p>
                                    <p className="old_price">
                                        10.000.000 VNĐ
                                    </p>
                                    <div className="bd_gradient">
                                        <div className="new_price">
                                            <span style={{color:'#ffa617'}}>6</span><span style={{color:'#ff970c'}}>.</span><span style={{color:'#ff8701'}}>0</span><span style={{color:'#ff7d01'}}>0</span><span style={{color:'#ff7201'}}>0</span><span style={{color:'#ff6901'}}>.</span><span style={{color:'#ff5f00'}}>0</span><span style={{color:'#ff5d00'}}>0</span><span style={{color:'#ff5a00'}}>0</span> <span className="vnd">VNĐ</span>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer </li> 
                                        <li>Lorem ipsum dolor sit amet, consectetuer dolor </li>
                                        <li>Lorem ipsum dolor sit amet</li>
                                    </ul>
                                </Link>
                                <Button type="button" className="btn_tuvan" data_toggle="modal" data_target="#form_tuvan">NHẬN TƯ VẤN</Button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="khoahoc">
                                <Link to={`/${this.state.course}`}>
                                    <figure>
                                        <img src="images/level_img1.png" alt="" className="img-fluid mx-auto d-block" />
                                    </figure>
                                    <p className="level_title">
                                        Intermediate Level
                                    </p>
                                    <p className="old_price">
                                        10.000.000 VNĐ
                                    </p>
                                    <div className="bd_gradient">
                                        <div className="new_price">
                                            <span style={{color:'#ffa617'}}>6</span><span style={{color:'#ff970c'}}>.</span><span style={{color:'#ff8701'}}>0</span><span style={{color:'#ff7d01'}}>0</span><span style={{color:'#ff7201'}}>0</span><span style={{color:'#ff6901'}}>.</span><span style={{color:'#ff5f00'}}>0</span><span style={{color:'#ff5d00'}}>0</span><span style={{color:'#ff5a00'}}>0</span> <span className="vnd">VNĐ</span>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer </li> 
                                        <li>Lorem ipsum dolor sit amet, consectetuer dolor </li>
                                        <li>Lorem ipsum dolor sit amet</li>
                                    </ul>
                                </Link>
                                <Button type="button" className="btn_tuvan" data_toggle="modal" data_target="#form_tuvan">NHẬN TƯ VẤN</Button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="khoahoc">
                                <Link to={`/${this.state.course}`}>
                                    <figure>
                                        <img src="images/level_img1.png" alt="" className="img-fluid mx-auto d-block" />
                                    </figure>
                                    <p className="level_title">
                                        Advance Level
                                    </p>
                                    <p className="old_price">
                                        10.000.000 VNĐ
                                    </p>
                                    <div className="bd_gradient">
                                        <div className="new_price">
                                            <span style={{color:'#ffa617'}}>6</span><span style={{color:'#ff970c'}}>.</span><span style={{color:'#ff8701'}}>0</span><span style={{color:'#ff7d01'}}>0</span><span style={{color:'#ff7201'}}>0</span><span style={{color:'#ff6901'}}>.</span><span style={{color:'#ff5f00'}}>0</span><span style={{color:'#ff5d00'}}>0</span><span style={{color:'#ff5a00'}}>0</span> <span className="vnd">VNĐ</span>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer </li> 
                                        <li>Lorem ipsum dolor sit amet, consectetuer dolor </li>
                                        <li>Lorem ipsum dolor sit amet</li>
                                    </ul>
                                </Link>
                                <Button type="button" className="btn_tuvan" data_toggle="modal" data_target="#form_tuvan">NHẬN TƯ VẤN</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        courseName: state.courseName.course
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onGetCourseName: (course) => dispatch(actionTypes.getCourseName(course))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Courses);