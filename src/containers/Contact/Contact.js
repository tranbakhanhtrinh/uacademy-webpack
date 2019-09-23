import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import './Contact.scss';

class Contact extends Component {
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
            binhluan: {
                elementType:'textarea',
                elementConfig: {
                    placeholder:"Comment",
                    name:"comment",
                    cols:"30",
                    rows:"5"
                },
                value: ''
            }
        }
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {...this.state.form}
        const updatedFormElement = {...updatedForm[inputIdentifier]}
        updatedFormElement.value = event.target.value;
        updatedForm[inputIdentifier] = updatedFormElement;
        this.setState({form: updatedForm})
    }

    render(){

        let registerForm = (
            <form>
                <Input  elementType={this.state.form.fullname.elementType} 
                        elementConfig = {this.state.form.fullname.elementConfig}
                        value={this.state.form.fullname.value}  
                        changed={(event) =>this.inputChangedHandler(event,Object.keys(this.state.form)[0])}
                />
                <div className="row">
                  <div className="col-md-6">
                    <Input  elementType={this.state.form.email.elementType} 
                            elementConfig = {this.state.form.email.elementConfig}
                            value={this.state.form.email.value}  
                            changed={(event) =>this.inputChangedHandler(event,Object.keys(this.state.form)[1])}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input  elementType={this.state.form.phone.elementType} 
                            elementConfig = {this.state.form.phone.elementConfig}
                            value={this.state.form.phone.value}  
                            changed={(event) =>this.inputChangedHandler(event,Object.keys(this.state.form)[2])}
                    />
                  </div>
                </div>
                <Input  elementType={this.state.form.binhluan.elementType}
                        elementConfig= {this.state.form.binhluan.elementConfig}
                        value={this.state.form.binhluan.value} 
                        changed={(event) =>this.inputChangedHandler(event,Object.keys(this.state.form)[3])}
                />
                <Button type='button' className="btn_register">Gửi ngay</Button>
            </form>
        )

        return(
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#truso" role="tab" data-toggle="tab">Trụ sở</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#cs2" role="tab" data-toggle="tab">Cơ sở 2</a>
                                </li>
                            </ul>
                        
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="truso">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.075076618188!2d106.72728141511453!3d10.805561892301748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528af26108571%3A0xd9a0159a5b320ab1!2sUreka+Media!5e0!3m2!1svi!2s!4v1564644646998!5m2!1svi!2s" frameBorder="0" style={{border:0}} allowFullScreen title="truso"></iframe>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="cs2">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1939283565016!2d106.68991451511441!3d10.796454192307923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ceecbe36cd%3A0xd94049a33a449701!2zMzlsIMSQxrDhu51uZyBNaeG6v3UgTuG7lWksIFBoxrDhu51uZyA3LCBCw6xuaCBUaOG6oW5oLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1564644682095!5m2!1svi!2s" frameBorder="0" style={{border:0}} allowFullScreen title="cs2"></iframe> 
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 my-auto">
                            {registerForm}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;