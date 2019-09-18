import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';

import './Course.scss';

class Course extends Component {
    componentDidMount() {
        console.log(this.props);
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
                                <a href="course_detail.html" className="link_to_details">
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
                                </a>
                                <Button type="button" className="btn_tuvan" data_toggle="modal" data_target="#form_tuvan">NHẬN TƯ VẤN</Button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="khoahoc">
                                <a href="course_detail.html" className="link_to_details">
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
                                </a>
                                <Button type="button" className="btn_tuvan" data_toggle="modal" data_target="#form_tuvan">NHẬN TƯ VẤN</Button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="khoahoc">
                                <a href="course_detail.html" className="link_to_details">
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
                                </a>
                                <Button type="button" className="btn_tuvan" data_toggle="modal" data_target="#form_tuvan">NHẬN TƯ VẤN</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Course;