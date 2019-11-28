import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Loading from '../../components/Loading/Loading';
import Select from '../../components/UI/Select/Select';
import Aux from '../../hoc/Aux/Aux';
import * as actionTypes from '../../store/actions';

import './Courses.scss';

class Courses extends Component {
    constructor(props){
        super(props);
        this.state = {
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
    }
    

    UNSAFE_componentWillMount() {
        console.log("[WillMount]",this.props);
    }

    componentDidMount() {
        this.props.onFetchCourses();
        const btn_tuvan = document.querySelectorAll('.btn_tuvan');
        btn_tuvan.forEach((e,index) => {
            btn_tuvan[index].addEventListener('click', () => {
                // var value = kh_popup.options[index + 1].value;
            },false)
        })
        console.log("[DidMount]",this.props);
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        console.log("[WillReceiveProps]",newProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.courses === this.props.courses){
            console.log("[shouldComponentUpdate]",nextProps);
            return false;
        }
        return true;
    }

    // UNSAFE_componentWillUpdate(nextProps, nextState){
    //     console.log("[WillUpdate]",nextProps);
    // }

    componentDidUpdate(prevProps, prevState){
        console.log("[DidUpdate]",prevProps);
    }

    componentWillUnmount(){
        if(this.props.courses){
            this.props.loading === false
        }
        console.log("[WillUnmount]");
    }

    inputChangedHandler = (event,inputIdentifier) => {
        const updatedForm = {...this.state.form}
        const updatedFormElement = {...updatedForm[inputIdentifier]}
        updatedFormElement.value = event.target.value;
        updatedForm[inputIdentifier] = updatedFormElement;
        this.setState({form: updatedForm})
    }

    

    render(){ 
        console.log("[render]",this.props);
        const coursesArray = [].concat.apply([],this.props.courses);
        let updatedCourses = <Loading />;
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
        if(!this.props.loading && this.props.courses){
            updatedCourses = coursesArray.map((arr,index) => {
                const trimmedCourseName = arr.courseName.toLowerCase().split(" ").join("-")
                return(
                    <div key={index} className="col-md-4">
                        <div className="khoahoc">
                            <Link to={`${this.props.match.url}/${trimmedCourseName}`}>
                                <figure>
                                    <img src={`/assets/images/${arr.img}`} alt="" className="img-fluid mx-auto d-block" />
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
        }
        
        
        return(
            <Aux>
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
                <div className="modal fade" id="form_tuvan">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <figure className="close_pop bob">
                                <img src="/assets/images/arrow_up.png" alt="" className="img-fluid mx-auto d-block" />
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
                                                    <img src="/assets/images/may_bay_giay.png" alt="" className="img-fluid mx-auto d-block" />
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
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        courses: state.courses.courses,
        loading: state.courses.loading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onFetchCourses: () => dispatch(actionTypes.fetchCourses())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Courses);