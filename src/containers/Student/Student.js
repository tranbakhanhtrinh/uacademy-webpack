import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import './Student.scss';

class Student extends Component {
    render(){

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
            <section id="student">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
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
                            <div className="d-none d-sm-none d-md-none d-lg-block">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="hocvien">
                                            <figure>
                                                <img src="images/hv1.png" alt="" className="img-fluid mx-auto d-block" />
                                            </figure>
                                            <p className="hv_title">
                                                Lorem ipsum dolor
                                            </p>
                                            <p className="hv_text">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                            </p>
                                            <p className="hv_text">
                                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. nulla facilisis at vero eros et accumsan et iusto 
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="hocvien">
                                            <figure>
                                                <img src="images/hv2.png" alt="" className="img-fluid mx-auto d-block" />
                                            </figure>
                                            <p className="hv_title">
                                                Lorem ipsum dolor
                                            </p>
                                            <p className="hv_text">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                            </p>
                                            <p className="hv_text">
                                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. nulla facilisis at vero eros et accumsan et iusto 
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="hocvien">
                                            <figure>
                                                <img src="images/hv3.png" alt="" className="img-fluid mx-auto d-block" />
                                            </figure>
                                            <p className="hv_title">
                                                Lorem ipsum dolor
                                            </p>
                                            <p className="hv_text">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                            </p>
                                            <p className="hv_text">
                                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. nulla facilisis at vero eros et accumsan et iusto 
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="hocvien">
                                            <figure>
                                                <img src="images/hv4.png" alt="" className="img-fluid mx-auto d-block" />
                                            </figure>
                                            <p className="hv_title">
                                                Lorem ipsum dolor
                                            </p>
                                            <p className="hv_text">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                            </p>
                                            <p className="hv_text">
                                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. nulla facilisis at vero eros et accumsan et iusto 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-block d-sm-block d-md-block d-lg-none">
                                <Swiper {...params}>
                                    <div>
                                        <div className="hocvien">
                                            <figure>
                                                <img src="images/hv1.png" alt="" className="img-fluid mx-auto d-block" />
                                            </figure>
                                            <p className="hv_title">
                                                Lorem ipsum dolor
                                            </p>
                                            <p className="hv_text">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                            </p>
                                            <p className="hv_text">
                                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. nulla facilisis at vero eros et accumsan et iusto 
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="hocvien">
                                            <figure>
                                                <img src="images/hv2.png" alt="" className="img-fluid mx-auto d-block" />
                                            </figure>
                                            <p className="hv_title">
                                                Lorem ipsum dolor
                                            </p>
                                            <p className="hv_text">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                            </p>
                                            <p className="hv_text">
                                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. nulla facilisis at vero eros et accumsan et iusto 
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="hocvien">
                                            <figure>
                                                <img src="images/hv3.png" alt="" className="img-fluid mx-auto d-block" />
                                            </figure>
                                            <p className="hv_title">
                                                Lorem ipsum dolor
                                            </p>
                                            <p className="hv_text">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                            </p>
                                            <p className="hv_text">
                                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. nulla facilisis at vero eros et accumsan et iusto 
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="hocvien">
                                            <figure>
                                                <img src="images/hv4.png" alt="" className="img-fluid mx-auto d-block" />
                                            </figure>
                                            <p className="hv_title">
                                                Lorem ipsum dolor
                                            </p>
                                            <p className="hv_text">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                            </p>
                                            <p className="hv_text">
                                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. nulla facilisis at vero eros et accumsan et iusto 
                                            </p>
                                        </div>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Student;