import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { store } from 'react-notifications-component';
import axios from 'axios';
import Navbar from '../layout/Navbar';

// import unnamed from '.././../img/unnamed.png'
import { Link } from "react-router-dom";

class ForgetPassword extends Component {
    
    constructor() {
            super();
            this.state = {
            email: "",
            errors: {}, 
         };    
    }        
        handleInput = e => {
            e.preventDefault();
            this.setState({ [e.target.id]: e.target.value });
        }
        handleForm = (e) => {
            e.preventDefault();            
            if (this.state.email === '') {
                store.addNotification({
                    title: "Warning",
                    message:"Please enter your email" ,
                    type: "warning",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                      duration: 4000,
                      onScreen: true
                    }
                  });
            }   
            else{
                const data = this.state.email
                axios.post('/api/users/forgetPassword', {
                email:data
                 })                
                store.addNotification({
                    title: "Warning",
                    message:"Sucess" ,
                    type: "warning",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                      duration: 4000,
                      onScreen: true
                    }
                  });
                   setTimeout(() => {
                window.location.href = "./";
               }, 3000);
               }
            };
        render() {
            const { email , errors } = this.state;
            return (
                <Fragment>
                    <Navbar/>
                    <div className="container_forget">
                    <div className="container_login_sec">
                    <div className="login_sec_hello"><p className="login_sec_hello_text">Forget<br/> Password ?</p>
                    </div>
                    <center>
                    <form className="login_form">
                    <p className="text_forget">Enter the email address associated with your account</p>
                    <input type="email" placeholder="Email" /><br/>
                    <br/><br/>
                    <button className="forget_btn active" > Submit <i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </form>

                    <div className="bottom_forget"><p className="bottom_forget_txt"> Remember your password ?<span><Link className="try_now" to="/login"> Log in</Link></span></p></div>
                    </center>
                    </div>	
                    </div>
                </Fragment>
                
            )
        }
    }
    
ForgetPassword.propTypes = {
    forget: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    email:state.email,
    errors:state.errors
});

export default connect(
    mapStateToProps,
   
  )(ForgetPassword);