import React, { Component } from 'react';

import './Document.scss';

class Document extends Component {
    componentDidMount() {
        const document_title_length = document.querySelectorAll(".document_title");
        const document_desc_length = document.querySelectorAll(".document_desc");
        document_title_length.forEach((e, index) => {
            if(document_title_length[index].innerHTML.trim().length >= 70) {
            const updatedTitle = document_title_length[index].innerHTML.trim().slice(0,70);
            document_title_length[index].innerHTML = updatedTitle + " ...";
            }
        })
        document_desc_length.forEach((e, index) => {
            if(document_desc_length[index].innerHTML.trim().length >= 140) {
            const updatedTitle = document_desc_length[index].innerHTML.trim().slice(0,140);
            document_desc_length[index].innerHTML = updatedTitle + " ...";
            }
        })
    }
    render(){
        return(
            <section id="document">
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
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="document">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <figure>
                                                    <img src="/assets/images/blog1.jpg" alt="" className="img-fluid d-block mx-auto" />
                                                </figure>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="document_text">
                                                    <p className="document_title">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                    </p>
                                                    <p className="document_desc">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                    </p>
                                                    <div className="btn_tuvan">
                                                        Đọc thêm
                                                    </div>
                                                    <div className="author">
                                                        <i>21 Feb 2019 by</i> <span>Author</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="document">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <figure>
                                                    <img src="/assets/images/blog2.jpg" alt="" className="img-fluid d-block mx-auto" />
                                                </figure>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="document_text">
                                                    <p className="document_title">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                    </p>
                                                    <p className="document_desc">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                    </p>
                                                    <div className="btn_tuvan">
                                                        Đọc thêm
                                                    </div>
                                                    <div className="author">
                                                        <i>21 Feb 2019 by</i> <span>Author</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="document">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <figure>
                                                    <img src="/assets/images/blog3.jpg" alt="" className="img-fluid d-block mx-auto" />
                                                </figure>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="document_text">
                                                    <p className="document_title">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                    </p>
                                                    <p className="document_desc">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                    </p>
                                                    <div className="btn_tuvan">
                                                        Đọc thêm
                                                    </div>
                                                    <div className="author">
                                                        <i>21 Feb 2019 by</i> <span>Author</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="document">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <figure>
                                                    <img src="/assets/images/blog4.jpg" alt="" className="img-fluid d-block mx-auto" />
                                                </figure>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="document_text">
                                                    <p className="document_title">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                    </p>
                                                    <p className="document_desc">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                    </p>
                                                    <div className="btn_tuvan">
                                                        Đọc thêm
                                                    </div>
                                                    <div className="author">
                                                        <i>21 Feb 2019 by</i> <span>Author</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="news">
                                        <div className="title">
                                            Bài mới nhất
                                            <hr />
                                        </div>
                                        <div className="row mt-20">
                                            <div className="col-md-4">
                                                <figure> 
                                                    <img src="/assets/images/tin1.jpg" alt="" className="img-fluid d-block mx-auto" />
                                                </figure>
                                            </div>
                                            <div className="col-md-8 my-auto">
                                                <div className="tin">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                    </p>
                                                    <div className="author">
                                                        <i>21 Feb 2019 by</i> <span>Author</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-20">
                                            <div className="col-md-4">
                                                <figure> 
                                                    <img src="/assets/images/tin2.jpg" alt="" className="img-fluid d-block mx-auto" />
                                                </figure>
                                            </div>
                                            <div className="col-md-8 my-auto">
                                                <div className="tin">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                    </p>
                                                    <div className="author">
                                                        <i>21 Feb 2019 by</i> <span>Author</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="news">
                                        <div className="title">
                                            Xem nhiều nhất
                                            <hr />
                                        </div>
                                        <div className="row mt-20">
                                            <div className="col-md-4">
                                                <figure> 
                                                    <img src="/assets/images/tin1.jpg" alt="" className="img-fluid d-block mx-auto" />
                                                </figure>
                                            </div>
                                            <div className="col-md-8 my-auto">
                                                <div className="tin">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                    </p>
                                                    <div className="author">
                                                        <i>21 Feb 2019 by</i> <span>Author</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-20">
                                            <div className="col-md-4">
                                                <figure> 
                                                    <img src="/assets/images/tin2.jpg" alt="" className="img-fluid d-block mx-auto" />
                                                </figure>
                                            </div>
                                            <div className="col-md-8 my-auto">
                                                <div className="tin">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                    </p>
                                                    <div className="author">
                                                        <i>21 Feb 2019 by</i> <span>Author</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Document;