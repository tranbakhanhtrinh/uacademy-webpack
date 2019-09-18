import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Select from '../../components/UI/Select/Select';

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
        // console.log(this.props)
        // const style = {
        //     backgroundImage:"url('images/bg.png')",
        //     backgroundRepeat: 'no-repeat',
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center'
        // }
        // document.body.style = style;
        // console.log(document.body);
        
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
            spaceBetween: 30
        }

        return(
            <div className="aboutus">
                <header id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="title">
                                    Lorem ipsum
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sedv diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                </p>
                                <div className="header_form">
                                    <div className="d-flex align-items-center">
                                        <p>
                                            Nhận tư vấn khóa học miễn phí
                                        </p>
                                        <figure className="mr-0 ml-auto">
                                            <img src="images/may_bay_giay.png" alt="" className="img-fluid mx-auto d-block" />
                                        </figure>
                                    </div>
                                    {registerForm}
                                </div>
                            </div>
                            <div className="col-md-6 my-auto">
                                <figure>
                                    <img src="images/header_hinh.png" alt="" className="img-fluid mx-auto d-block" />
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
                                Hình ảnh <span className="break">lớp học</span>
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit 
                            </p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <Swiper {...params}>
                                <div>
                                    <figure>
                                        <img src="images/slide1.png" alt="" className="img-fluid d-block mx-auto" />
                                    </figure>
                                </div>
                                <div>
                                    <figure>
                                        <img src="images/slide1.png" alt="" className="img-fluid d-block mx-auto" />
                                    </figure>
                                </div>
                                <div>
                                    <figure>
                                        <img src="images/slide1.png" alt="" className="img-fluid d-block mx-auto" />
                                    </figure>
                                </div>
                            </Swiper>
                        </div>
                        <div className="col-md-5 my-auto">
                            <div className="d-none d-sm-block">
                            <p className="title">
                                Hình ảnh <span className="break">lớp học</span>
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit 
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
                                    Giảng viên
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sedv diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                </p>
                                <Button type='button' className="btn_register d-none d-sm-block" data_toggle="modal" data_target="#form_tuvan">Nhận tư vấn</Button>
                            </div>
                            <div className="col-md-6">
                                <div className="d-none d-sm-block">
                                    <div className="row">
                                        <div className="col-md-4 my-auto">
                                            <div className="bg_gv">
                                                <figure>
                                                    <img src="images/gv1.png" alt="" className="img-fluid d-block mx-auto" />
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
                                                    <img src="images/gv2.png" alt="" className="img-fluid d-block mx-auto" />
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
                                                    <img src="images/gv3.png" alt="" className="img-fluid d-block mx-auto" />
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
                                                    <img src="images/gv3.png" alt="" className="img-fluid d-block mx-auto" />
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
                                                    <img src="images/gv1.png" alt="" className="img-fluid d-block mx-auto" />
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
                                                    <img src="images/gv2.png" alt="" className="img-fluid d-block mx-auto" />
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
                                                    <img src="images/gv2.png" alt="" className="img-fluid d-block mx-auto" />
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
                                                    <img src="images/gv3.png" alt="" className="img-fluid d-block mx-auto" />
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
                <div class="modal fade" id="gv_hung">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <figure class="close_pop bob">
                                    <img src="images/arrow_up.png" alt="" class="img-fluid mx-auto d-block" />
                                </figure>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-5 col-sm-5 col-12 gv_left_img">
                                        <span class="helper"></span>
                                        <img src="images/quochung.png" alt="" class="img-fluid d-none  d-sm-none d-md-block" />
                                        <img src="images/quochung-mb.png" alt="" class="img-fluid d-block d-sm-block d-md-none" />
                                    </div>
                                    <div class="col-md-7 col-sm-7 col-12 gv_right_content">
                                        <div class="content">
                                            <p class="title_name">MR <span>QUỐC HƯNG (HUGH)</span></p>
                                            <div class="hr_modal_gv"></div>
                                            <p class="position">HEAD OF MARCOM</p>
                                            <p class="company">at Ureka Media</p>
                                            <p class="description_gv">
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

                <div class="modal fade" id="gv_trong">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <figure class="close_pop bob">
                                    <img src="images/arrow_up.png" alt="" class="img-fluid mx-auto d-block" />
                                </figure>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-5 col-sm-5 col-12 gv_left_img">
                                        <span class="helper"></span>
                                        <img src="images/Trong.png" alt="" class="img-fluid d-none  d-sm-none d-md-block" />
                                        <img src="images/trong-mb.png" alt="" class="img-fluid d-block d-sm-block d-md-none" />
                                    </div>
                                    <div class="col-md-7 col-sm-7 col-12 gv_right_content">
                                        <div class="content">
                                            <p class="title_name">MR <span>NGUYỄN BÁ TRỌNG</span></p>
                                            <div class="hr_modal_gv"></div>
                                            <p class="position">MANAGER OF MEDIA</p>
                                            <p class="company">at Ureka Media</p>
                                            <p class="description_gv">
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
                <div class="modal fade" id="form_tuvan">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <figure class="close_pop bob">
                                <img src="images/arrow_up.png" alt="" class="img-fluid mx-auto d-block" />
                                </figure>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="header_form">
                                            <div class="d-flex align-items-center">
                                                <p>
                                                    Nhận tư vấn khóa học miễn phí
                                                </p>
                                                <figure class="mr-0 ml-auto">
                                                    <img src="images/may_bay_giay.png" alt="" class="img-fluid mx-auto d-block" />
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
                <div class="modal fade" id="call_confirmation">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <figure class="close_pop bob">
                                    <img src="images/arrow_up.png" alt="" class="img-fluid mx-auto d-block" />
                                </figure>
                            </div>
                            <div class="modal-body">
                                BẠN CÓ MUỐN THỰC HIỆN CUỘC GỌI ?
                            </div>
                            <div class="modal-footer">
                                <a href="tel:+84899971919"> 
                                    <img src="images/phone_popup.png" alt="" class="img-fluid mx-auto"  width="50" />
                                </a>
                                <button data-dismiss="modal">
                                    <img src="images/close_popup.png" alt="" class="img-fluid mx-auto" width="50" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;