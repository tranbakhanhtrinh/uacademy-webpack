import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swiper from 'react-id-swiper';

import * as actionTypes from '../../../store/actions/';
import Button from '../../../components/UI/Button/Button';

import './Course.scss';

class Course extends Component {
    componentDidMount(){
        this.loadData();
    }
    loadData = () => {
        if(this.props.match.params.course){
            this.props.onFetchCourses();
            this.props.onFetchCourse();
        }
    }
    render(){
        const coursesTitle = [].concat.apply([],this.props.courses);
        const course = [].concat.apply([],this.props.course);
        let updatedCourseName = null;
        const params = {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            loop:true,
            spaceBetween: 30,
        }
        // coursesTitle.map( (t,title_index) => {  
        //     const trimmedCourseName = t.courseName.trim().toLowerCase().split(" ").join("-")
        //     if(this.props.match.params.course === trimmedCourseName){
        //         return updatedCourseName = (
        //                 <p className="level_title">
        //                     {t.courseName}
        //                 </p>
        //             );
        //     }
        //     return true;
        // })
        course.map( (c,course_index) => {
            const img = Object.values({...c.hinhanhlophoc});
            const updatedImg = c.hinhanhlophoc.map( (a,index) => {
                return(
                    <div key={index}>
                        <figure>
                            <img src={`/images/${a}`} alt="" className="img-fluid d-block mx-auto" />
                        </figure>
                    </div>
                )
            })
            coursesTitle.map( (t,title_index) => {  
                const trimmedCourseName = t.courseName.trim().toLowerCase().split(" ").join("-")
                if(this.props.match.params.course === trimmedCourseName && course_index === title_index){
                    return updatedCourseName = (
                            <div className="bd_detail">
                                <div className="row">
                                    <div className="col-md-3 ">
                                        <figure>
                                            <img src={`/images/${c.img}`} alt="" className="img-fluid mx-auto d-block" />
                                        </figure>
                                    </div>
                                    <div className="col-md-4 bd_right">
                                        <p className="level_title">
                                            {t.courseName}
                                        </p>
                                        <p>
                                            Ngày khai giảng dự kiến: <br />
                                            {c.start_date}<br />
                                            Ngày và giờ học dự kiến:<br />
                                            {c.start_date_studying}<br />
                                            <br />
                                            <span className="thoiluong">Thời lượng: {c.duration}</span>
                                        </p>
                                    </div>
                                    <div className="col-md-4">
                                        <fieldset>
                                            <legend>HỌC PHÍ</legend>
                                            <p className="old_price">
                                                {c.oldPrice}
                                            </p>
                                            <div className="new_price">
                                                {c.newPrice}
                                            </div>
                                        </fieldset>
                                        <Button type="button" className="btn_tuvan" data_toggle="modal" data_target="#form_tuvan">
                                            Nhận tư vấn miễn phí ngay
                                        </Button>
                                    </div>
                                </div>
                                <hr />
                                <div className="block_content">
                                    <p className="level_title">
                                        THAM GIA KHÓA HỌC BẠN SẼ:
                                    </p>
                                    <ul dangerouslySetInnerHTML={{__html: c.advantage}}>
                                        
                                    </ul>
                                </div>
                                <div className="block_content">
                                    <p className="level_title">
                                        NỘI DUNG KHÓA HỌC
                                    </p>
                                    <p className="sub_title">
                                        OVERVIEW
                                    </p>
                                    <ul dangerouslySetInnerHTML={{__html: c.content.overview}}>
                                       
                                    </ul>
                                    <p className="sub_title">PERFORMANCE MEDIA</p>
                                    <ul dangerouslySetInnerHTML={{__html: c.content.performance_media}}>
                                        
                                    </ul>
                                    
                                    <p className="sub_title">ANALYTICS & OPTIMIZATION</p>
                                    <ul dangerouslySetInnerHTML={{__html: c.content.analytics_optimization}}>
                                        
                                    </ul>
                                    <p className="sub_title">CONTENT, MEDIA PLAN & PROPOSAL</p>
                                    <ul dangerouslySetInnerHTML={{__html: c.content.proposal}}>
                                        
                                    </ul>
                                </div>
                                <div className="block_content">
                                    <p className="level_title">
                                        HÌNH ẢNH LỚP HỌC
                                    </p>
                                    {img.length > 0 ? 
                                    <Swiper {...params}>
                                        {updatedImg}        
                                    </Swiper> : null
                                }
                                </div>
                                <div className="block_content">
                                    <p className="level_title">
                                        ƯU ĐÃI
                                    </p>
                                    <div className="row">
                                        <div className="col-md-10 offset-md-1">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <figure className="uudai_hinh">
                                                        <img src={`/images/${c.uudai[0].img}`} alt="" className="img-fluid d-block mx-auto" />
                                                    </figure>                    
                                                    <p className="uudai">
                                                        <span className="gach">Học phí: {c.uudai[0].oldPrice} / khóa</span> <br />
                                                        <span className="bold">Còn: {c.uudai[0].newPrice}/ khoá</span>
                                                    </p>
                                                </div>
                                                <div className="col-md-4">
                                                    <figure className="uudai_hinh">
                                                        <img src={`/images/${c.uudai[1].img}`} alt="" className="img-fluid d-block mx-auto" />
                                                    </figure>                    
                                                    <p className="uudai">
                                                        <span className="bold">{c.uudai[1].bold}</span> <br />
                                                        <span className="break">{c.uudai[1].txt} </span>
                                                    </p>
                                                </div>
                                                <div className="col-md-4">
                                                    <figure className="uudai_hinh">
                                                        <img src={`/images/${c.uudai[2].img}`} alt="" className="img-fluid d-block mx-auto" />
                                                    </figure>                    
                                                    <p className="uudai">
                                                        <span className="bold">{c.uudai[2].bold}</span> <br />
                                                        <span className="break">{c.uudai[2].txt}</span>
                                                        
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                                <div className="block_content">
                                    <p className="level_title">
                                        GIẢNG VIÊN
                                    </p>
                                    <div className="gv d-none d-sm-flex">
                                        <div className="bg_gv">
                                            <figure>
                                                <img src="/images/gv2.png" alt="" className="img-fluid d-block mx-auto" />
                                            </figure>
                                            <p className="gv_name">
                                                Mr. Trọng Nguyễn
                                            </p>
                                            <p className="position">
                                                Media Manager at 
                                                <span className="break">Ureka Media</span>
                                            </p>
                                            <button type="button" className="xemthem" data-toggle="modal" data-target="#gv_trong">
                                                <i>Xem thêm >>></i>
                                            </button>
                                        </div>
                                        <div className="bg_gv">
                                            <figure>
                                                <img src="/images/gv1.png" alt="" className="img-fluid d-block mx-auto" />
                                            </figure>
                                            <p className="gv_name">
                                                Mr. Hưng Võ
                                            </p>
                                            <p className="position">
                                                Head of Marcom at 
                                                <span className="break">Ureka Media</span>
                                            </p>
                                            <button type="button" className="xemthem" data-toggle="modal" data-target="#gv_hung">
                                                <i>Xem thêm >>></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-block d-sm-none">
                                        <Swiper {...params}>
                                                <div>
                                                    <div className="bg_gv">
                                                        <figure>
                                                            <img src="/images/gv1.png" alt="" className="img-fluid d-block mx-auto" />
                                                        </figure>
                                                        <p className="gv_name">
                                                            Mr. Hưng Võ
                                                        </p>
                                                        <p className="position">
                                                            Head of Marcom at <wbr />
                                                            Ureka Media
                                                        </p>
                                                        <button type="button" className="xemthem" data-toggle="modal" data-target="#gv_hung">
                                                            <i>Xem thêm >>></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="bg_gv">
                                                        <figure>
                                                            <img src="/images/gv2.png" alt="" className="img-fluid d-block mx-auto" />
                                                        </figure>
                                                        <p className="gv_name">
                                                            Mr. Trọng Nguyễn
                                                        </p>
                                                        <p className="position">
                                                            Media Manager at <wbr />
                                                            Ureka Media
                                                        </p>
                                                        <button type="button" className="xemthem" data-toggle="modal" data-target="#gv_trong">
                                                            <i>Xem thêm >>></i>
                                                        </button>
                                                    </div>
                                                </div>
                                        </Swiper>
                                    </div>
                                </div>
                                <Button type="button" className="btn_tuvan" data_toggle="modal" data_target="#form_tuvan">
                                    Nhận tư vấn miễn phí ngay
                                </Button>
                            </div>
                        );
                }
                return true;
            })
        })
        return(
            <section id="course_detail" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {updatedCourseName}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        courses: state.courses.courses,
        course: state.courses.course
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onFetchCourses: () => dispatch(actionTypes.fetchCourses()),
        onFetchCourse: () => dispatch(actionTypes.fetchCourse())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Course);