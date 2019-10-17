import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { connect } from "react-redux";

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Select from '../../components/UI/Select/Select';
import * as actionTypes from '../../store/actions'

import './AboutUs.scss';

class AboutUs extends Component {
    state = {
        form: {
            fullname: {
                elementType: 'input',
                elementConfig: {
                    type:'text',
                    placeholder: 'Họ và tên',
                    name: 'fullname'    
                },
                value: ''
            },
            email:{
                elementType: 'input',
                elementConfig: {
                    type:'text',
                    placeholder: 'Email',
                    name: 'email'    
                },
                value: ''
            },
            phone:{
                elementType: 'input',
                elementConfig: {
                    type:'text',
                    placeholder: 'Số điện thoại',
                    name: 'phone'    
                },
                value: ''
            },
        }
    }

    componentDidMount(){
        // this.props.onFetchHeader(this.props.header);
        // this.props.onFetchHinhAnhLopHoc(this.props.hinhanhlophoc);
        this.props.onFetchAbout(this.props.header,this.props.hinhanhlophoc,this.props.giangvien)
    }

    inputChangedHandler = (event,inputIdentifier) => {
        const updatedForm = {...this.state.form}
        const updatedFormElement = {...updatedForm[inputIdentifier]}
        updatedFormElement.value = event.target.value;
        updatedForm[inputIdentifier] = updatedFormElement;
        this.setState({form: updatedForm})
    }

    render(){
        let registerForm = (
            <form>
                <Select placeholder='Chọn khoá học'/>
                <Input  elementType={this.state.form.fullname.elementType} 
                        elementConfig = {this.state.form.fullname.elementConfig}
                        value={this.state.form.fullname.value}  
                        changed={(event) =>this.inputChangedHandler(event,Object.keys(this.state.form)[1])}
                />
                <div className="row">
                  <div className="col-md-6">
                    <Input  elementType={this.state.form.email.elementType} 
                            elementConfig = {this.state.form.email.elementConfig}
                            value={this.state.form.email.value}  
                            changed={(event) =>this.inputChangedHandler(event,Object.keys(this.state.form)[2])}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input  elementType={this.state.form.phone.elementType} 
                            elementConfig = {this.state.form.phone.elementConfig}
                            value={this.state.form.phone.value}  
                            changed={(event) =>this.inputChangedHandler(event,Object.keys(this.state.form)[3])}
                    />
                  </div>
                </div>
                <Button type='button' className="btn_register">Nhận khoá học</Button>
            </form>
        );
        
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

        const {abHeader,abHinhAnhLopHoc,abGiangVien} = {
            abHeader:{...this.props.header},
            abHinhAnhLopHoc: {...this.props.hinhanhlophoc},
            abGiangVien: {...this.props.giangvien}
        }

        const img = Object.values({...abHinhAnhLopHoc.img});
        const updatedImg = img.map( (a,index) => {
            return(
                <div key={index}>
                    <figure>
                        <img src={`/images/${a}`} alt="" className="img-fluid d-block mx-auto" />
                    </figure>
                </div>
            )
        })


        return(
            <div className="aboutus">
                <header id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="title">
                                    {abHeader.title}
                                </p>
                                <p>
                                    {abHeader.des}
                                </p>
                                <div className="header_form">
                                    <div className="d-flex align-items-center">
                                        <p>
                                            Nhận tư vấn khóa học miễn phí
                                        </p>
                                        <figure className="mr-0 ml-auto">
                                            <img src="/images/may_bay_giay.png" alt="" className="img-fluid mx-auto d-block" />
                                        </figure>
                                    </div>
                                    {registerForm}
                                </div>
                            </div>
                            <div className="col-md-6 my-auto">
                                <figure>
                                    <img src={`/images/${abHeader.img}`} alt="" className="img-fluid mx-auto d-block" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Hình ảnh lớp học */}
                <section id="class_img">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-block d-sm-none">
                                    <p className="title">
                                        {abHinhAnhLopHoc.title}
                                    </p>
                                    <p>
                                        {abHinhAnhLopHoc.des}
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-7">
                                {img.length > 0 ? 
                                    <Swiper {...params}>
                                        {updatedImg}        
                                    </Swiper> : null
                                }
                            </div>
                            <div className="col-md-5 my-auto">
                                <div className="d-none d-sm-block">
                                <p className="title">
                                    {abHinhAnhLopHoc.title}
                                </p>
                                <p>
                                    {abHinhAnhLopHoc.des}
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Giảng viên */}
                <section id="giangvien">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 my-auto">
                                <p className="title">
                                    {abGiangVien.title}
                                </p>
                                <p>
                                    {abGiangVien.des}
                                </p>
                                <Button type='button' className="btn_register d-none d-sm-block" data_toggle="modal" data_target="#form_tuvan">Nhận tư vấn</Button>
                            </div>
                            <div className="col-md-6">
                                <div className="d-none d-sm-block">
                                    <div className="row">
                                        <div className="col-md-4 my-auto">
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
                                                <Button type="button" className="xemthem" data_toggle="modal" data_target="#gv_hung">
                                                    <i>Xem thêm >>></i>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
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
                                                <Button type="button" className="xemthem" data_toggle="modal" data_target="#gv_trong">
                                                    <i>Xem thêm >>></i>
                                                </Button>
                                            </div>
                                            <div className="bg_gv">
                                                <figure>
                                                    <img src="/images/gv3.png" alt="" className="img-fluid d-block mx-auto" />
                                                </figure>
                                                <p className="gv_name">
                                                    Mr. Nam Lê
                                                </p>
                                                <p className="position">
                                                    Head of Account at <wbr />
                                                    Ureka Media
                                                </p>
                                                <Button type="button" className="xemthem" data_toggle="modal" data_target="#gv_trong">
                                                    <i>Xem thêm >>></i>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="col-md-4 my-auto">
                                            <div className="bg_gv">
                                                <figure>
                                                    <img src="/images/gv3.png" alt="" className="img-fluid d-block mx-auto" />
                                                </figure>
                                                <p className="gv_name">
                                                    Mr. Nam Lê
                                                </p>
                                                <p className="position">
                                                    Head of Account at <wbr />
                                                    Ureka Media
                                                </p>
                                                <Button type="button" className="xemthem" data_toggle="modal" data_target="#gv_trong">
                                                    <i>Xem thêm >>></i>
                                                </Button>
                                            </div>
                                        </div>
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
                                                <Button type="button" className="xemthem" data_toggle="modal" data_target="#gv_hung">
                                                    <i>Xem thêm >>></i>
                                                </Button>
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
                                                <Button type="button" className="xemthem" data_toggle="modal" data_target="#gv_trong">
                                                    <i>Xem thêm >>></i>
                                                </Button>
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
                                                <Button type="button" className="xemthem" data_toggle="modal" data_target="#gv_trong">
                                                    <i>Xem thêm >>></i>
                                                </Button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bg_gv">
                                                <figure>
                                                    <img src="/images/gv3.png" alt="" className="img-fluid d-block mx-auto" />
                                                </figure>
                                                <p className="gv_name">
                                                    Mr. Nam Lê
                                                </p>
                                                <p className="position">
                                                    Head of Account at <wbr />
                                                    Ureka Media
                                                </p>
                                                <Button type="button" className="xemthem" data_toggle="modal" data_target="#gv_trong">
                                                    <i>Xem thêm >>></i>
                                                </Button>
                                            </div>
                                        </div>
                                    </Swiper>
                                </div>
                                <Button type="button" className="btn_tuvan d-block d-sm-none" data_toggle="modal" data_target="#form_tuvan">
                                    Nhận tư vấn
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Modal Giảng Viên */}
                <div className="modal fade" id="gv_hung">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <figure className="close_pop bob">
                                    <img src="/images/arrow_up.png" alt="" className="img-fluid mx-auto d-block" />
                                </figure>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-5 col-sm-5 col-12 gv_left_img">
                                        <span className="helper"></span>
                                        <img src="/images/quochung.png" alt="" className="img-fluid d-none  d-sm-none d-md-block" />
                                        <img src="/images/quochung-mb.png" alt="" className="img-fluid d-block d-sm-block d-md-none" />
                                    </div>
                                    <div className="col-md-7 col-sm-7 col-12 gv_right_content">
                                        <div className="content">
                                            <p className="title_name">MR <span>QUỐC HƯNG (HUGH)</span></p>
                                            <div className="hr_modal_gv"></div>
                                            <p className="position">HEAD OF MARCOM</p>
                                            <p className="company">at Ureka Media</p>
                                            <p className="description_gv">
                                                Phụ trách hoạt động marketing, internal communication & external communication cho Ureka Media. Anh tham gia ngành Truyền thông Quảng cáo 
                                                từ năm 2008 tại agency, đã có cơ hội làm việc với các nhãn hàng như: Dutch Lady, Bia 333 chai - Beer Saigon, Nagaworld Resort Cambodia, 
                                                Resort World Sentosa, VinPearl Land, OPV, ... Bắt đầu tiếp cận tiếp thị trực tuyến từ 2012 và làm việc tại Ureka Media từ 2015, 
                                                hiện tại ngoài bằng cử nhân CNTT & chứng chỉ Chuyên viên Quảng cáo Tiếp thị Tích hợp (IMC); thì anh còn có nhiều chứng chỉ trực tuyến 
                                                được cấp bởi AppNexus (Microsoft), Google, Facebook.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="gv_trong">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <figure className="close_pop bob">
                                    <img src="/images/arrow_up.png" alt="" className="img-fluid mx-auto d-block" />
                                </figure>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-5 col-sm-5 col-12 gv_left_img">
                                        <span className="helper"></span>
                                        <img src="/images/Trong.png" alt="" className="img-fluid d-none  d-sm-none d-md-block" />
                                        <img src="/images/trong-mb.png" alt="" className="img-fluid d-block d-sm-block d-md-none" />
                                    </div>
                                    <div className="col-md-7 col-sm-7 col-12 gv_right_content">
                                        <div className="content">
                                            <p className="title_name">MR <span>NGUYỄN BÁ TRỌNG</span></p>
                                            <div className="hr_modal_gv"></div>
                                            <p className="position">MANAGER OF MEDIA</p>
                                            <p className="company">at Ureka Media</p>
                                            <p className="description_gv">
                                                Tốt nghiệp cử nhân Kinh tế Đối ngoại Đại học Ngoại Thương, bắt đầu tham gia lĩnh vực Digital Marketing từ 2012, Trọng Nguyễn có hơn 6 năm kinh nghiệm làm việc tại Agency, Client, Publishers và Startup. Anh đã tham gia tư vấn và thực thi chiến lược marketing trên nền tảng kỹ thuật số cho nhiều nhãn hàng như BIDV, Gamuda Land, Techcombank, Mercedes Benz, Grab... Hiện anh đang làm việc tại Ureka Media với vị trí Manager of Media Innovation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal form nhận tư vấn */}
                <div className="modal fade" id="form_tuvan">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <figure className="close_pop bob">
                                <img src="/images/arrow_up.png" alt="" className="img-fluid mx-auto d-block" />
                                </figure>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="header_form">
                                            <div className="d-flex align-items-center">
                                                <p>
                                                    Nhận tư vấn khóa học miễn phí
                                                </p>
                                                <figure className="mr-0 ml-auto">
                                                    <img src="/images/may_bay_giay.png" alt="" className="img-fluid mx-auto d-block" />
                                                </figure>
                                            </div>
                                            {registerForm}
                                        </div> 
                                    </div>                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal gọi dt */}
                <div className="modal fade" id="call_confirmation">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <figure className="close_pop bob">
                                    <img src="/images/arrow_up.png" alt="" className="img-fluid mx-auto d-block" />
                                </figure>
                            </div>
                            <div className="modal-body">
                                BẠN CÓ MUỐN THỰC HIỆN CUỘC GỌI ?
                            </div>
                            <div className="modal-footer">
                                <a href="tel:+84899971919"> 
                                    <img src="/images/phone_popup.png" alt="" className="img-fluid mx-auto"  width="50" />
                                </a>
                                <button data-dismiss="modal">
                                    <img src="/images/close_popup.png" alt="" className="img-fluid mx-auto" width="50" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        header: state.about.header,
        hinhanhlophoc: state.about.hinhanhlophoc,
        giangvien: state.about.giangvien
    }
}

const mapDispatchToProps = dispatch => {
    return {    
        onFetchAbout: (header, hinhanh, gv) => dispatch(actionTypes.fetchAbout(header, hinhanh,gv)),
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(AboutUs);