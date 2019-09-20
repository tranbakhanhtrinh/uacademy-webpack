import React, { Component } from 'react';

import './Course.scss';

export default class Course extends Component {
    render(){
        return(
            <section id="course_detail">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bd_detail">
                                <div className="row">
                                    <div className="col-md-3 ">
                                        <figure>
                                            <img src="images/level_ele.png" alt="" className="img-fluid mx-auto d-block" />
                                        </figure>
                                    </div>
                                    <div className="col-md-4 bd_right">
                                        <p className="level_title"></p>
                                        <p>
                                            Ngày khai giảng dự kiến: <br />
                                            Thứ 2, 10/06/2019.<br />
                                            Ngày và giờ học dự kiến:<br />
                                            (18h30 - 20h30) - Thứ 2, 4, 6<br />
                                            <br />
                                            <span className="thoiluong">Thời lượng: 13 buổi</span>
                                        </p>
                                    </div>
                                    <div className="col-md-4">
                                        <fieldset>
                                            <legend>HỌC PHÍ</legend>
                                            <p className="old_price">
                                                10.000.000 VNĐ
                                            </p>
                                            <div className="new_price">
                                                6.000.000 VNĐ
                                            </div>
                                        </fieldset>
                                        <button type="button" className="btn_tuvan" data-toggle="modal" data-target="#form_tuvan">
                                            Nhận tư vấn miễn phí ngay
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <div className="block_content">
                                    <p className="level_title">
                                        THAM GIA KHÓA HỌC BẠN SẼ:
                                    </p>
                                    <ul>
                                        <li>Hiểu về Marketing nói chung và vị trí của Digital trong đó nói riêng.</li>
                                        <li>Học về mindset trước khi thực hành planning/implementation.</li>
                                        <li>Lên chiến dịch truyền thông với KPIs phù hợp nhờ việc phân tích brief, brand và thị trường.</li>
                                        <li>Biết cách vận hành, kiểm soát và tối ưu các kênh (Facebook và Google ads).</li>
                                        <li>Được hướng dẫn trực tiếp bởi giảng viên từ Ureka Media, kết hợp lý thuyết Marketing và kinh nghiệm làm việc thực tiễn.</li>
                                    </ul>
                                </div>
                                <div className="block_content">
                                    <p className="level_title">
                                        NỘI DUNG KHÓA HỌC
                                    </p>
                                    <p className="sub_title">
                                        OVERVIEW
                                    </p>
                                    <ul>
                                        <li>Tổng quan và định vị Digital Marketing trong Marketing</li>
                                        <li>Mindset về Objectives (Business/Marketing/Communication) và Digital KPIs</li>
                                        <li>Hiểu đúng về Performance trên Digital (Facebook, Google, Ad Networks, etc)</li>
                                        <li>Thực hành planning trên brief: cách chọn và đề xuất KPIs</li>
                                    </ul>
                                    <p className="sub_title">PERFORMANCE MEDIA</p>
                                    <ul>
                                        <li>Xu hướng Video Content (creative) và thực hành quảng cáo Video trên Facebook, Youtube…</li>
                                        <li>Quảng cáo hiển thị (Display ads) và thực hành planning, set up quảng cáo Google Ads</li>
                                        <li>Social Media: Hiểu về nền tảng, sáng tạo nội dung và thực hành quảng cáo Facebook Ads</li>
                                        <li>Search Marketing: Sân chơi của Google. Thực hành và tối ưu Google Paid Search</li>
                                    </ul>
                                    
                                    <p className="sub_title">ANALYTICS & OPTIMIZATION</p>
                                    <ul>
                                        <li>Phân tích dữ liệu với Facebook Audience Insight, Audience Manager</li>
                                        <li>Thực hành phân tích và tối ưu chiến dịch với Google Analytics, Facebook Pixel…</li>
                                        <li>Thực hành viết & đọc hiểu báo cáo. Áp dụng Automation</li>
                                    </ul>
                                    <p className="sub_title">CONTENT, MEDIA PLAN & PROPOSAL</p>
                                    <ul>
                                        <li>Tiếp thị nội dung và vai trò trong tiếp thị</li>
                                        <li>UI/UX và tâm lý người dùng khi thiết kế website</li>
                                        <li>Hướng dẫn làm proposal, thực hành trình bày kế hoạch truyền thông</li>
                                        <li>Giảng viên đánh giá (feedback) và Hỏi đáp</li>
                                    </ul>
                                </div>
                                <div className="block_content">
                                    <p className="level_title">
                                        HÌNH ẢNH LỚP HỌC
                                    </p>
                                    <div className="swiper-container" id="hinhanhlophoc">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                            <figure>
                                                <img src="images/slide1.png" alt="" className="img-fluid d-block mx-auto" />
                                            </figure>
                                            </div>
                                            <div className="swiper-slide">
                                            <figure>
                                                <img src="images/slide1.png" alt="" className="img-fluid d-block mx-auto" />
                                            </figure>
                                            </div>
                                            <div className="swiper-slide">
                                            <figure>
                                                <img src="images/slide1.png" alt="" className="img-fluid d-block mx-auto" />
                                            </figure>
                                            </div>
                                        </div>
                                        <div className="arrow">
                                            <div className="swiper-button-prev"></div>
                                            <hr />
                                            <div className="swiper-button-next"></div>
                                        </div>
                                    </div>
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
                                                        <img src="images/uudai1.png" alt="" className="img-fluid d-block mx-auto" />
                                                    </figure>                    
                                                    <p className="uudai">
                                                        <span className="gach">Học phí: 8.000.000 / khóa</span> <br />
                                                        <span className="bold">Còn: 6,990,000đ/ khoá</span>
                                                    </p>
                                                </div>
                                                <div className="col-md-4">
                                                    <figure className="uudai_hinh">
                                                        <img src="images/uudai2.png" alt="" className="img-fluid d-block mx-auto" />
                                                    </figure>                    
                                                    <p className="uudai">
                                                        <span className="bold">Tặng 1.500.000 VND</span> <br />
                                                        <span className="break">thực hành tại lớp </span>
                                                        cho mỗi nhóm
                                                    </p>
                                                </div>
                                                <div className="col-md-4">
                                                    <figure className="uudai_hinh">
                                                        <img src="images/uudai3.png" alt="" className="img-fluid d-block mx-auto" />
                                                    </figure>                    
                                                    <p className="uudai">
                                                        <span className="bold">Giảm thêm 5%</span> <br />
                                                        <span className="break">cho nhóm học viên </span>
                                                        <span className="break">đăng ký từ 3 người</span>
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
                                                <img src="images/gv2.png" alt="" className="img-fluid d-block mx-auto" />
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
                                                <img src="images/gv1.png" alt="" className="img-fluid d-block mx-auto" />
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
                                        <div className="swiper-container" id="gv_slide">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
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
                                                    <button type="button" className="xemthem" data-toggle="modal" data-target="#gv_hung">
                                                        <i>Xem thêm >>></i>
                                                    </button>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
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
                                                    <button type="button" className="xemthem" data-toggle="modal" data-target="#gv_trong">
                                                        <i>Xem thêm >>></i>
                                                    </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btn_tuvan" data-toggle="modal" data-target="#form_tuvan">
                                    Nhận tư vấn miễn phí ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}