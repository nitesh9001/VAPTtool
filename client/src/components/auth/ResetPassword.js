import React, { Component, Fragment } from 'react';
import { store } from 'react-notifications-component';
import {connect} from 'react-redux';
// import unnamed from '.././../img/unnamed.png'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from 'axios';
import Navbar from '../layout/Navbar';

class ResetPassword extends Component{
    constructor(){
       super()
       this.state = {
        password: '',
        c_password: '',
        token:'',
        error: {},
      };
    }
  componentDidMount(){
    const token = this.props.match.params.resetPasswordToken
    axios.get('/api/users/reset_token', {resetPasswordToken: this.props.match.params.resetPasswordToken,}
      )}
  
    handleChange  = name =>( e ) => {
            this.setState({ [name]: e.target.value });      
      };
    update_password=(e)=>{
      e.preventDefault();
      this.setState({  password:this.state.password,   c_password:this.state.c_password});
     if(this.state.password===this.state.c_password){
        if (this.state.password === ''){
            store.addNotification({
                title: "Warning",
                message:"Please enter the Password" ,
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
     } 
     else{
            store.addNotification({
                title: "Warning",
                message:"password dosent match" ,
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
      const token= this.props.match.params.token;
      const password=this.state.password
      axios.post('/api/users/reset/', {
      resetPasswordToken: token,
      password: password
    }).then(res=>{
      store.addNotification({
        title: "sucess",
        message:"successfully created" ,
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
    })
    setTimeout(() => {
      window.location.href = "/login";
     }, 3000);
    }
    render(){

        const {password, c_password,errors}=this.state;
        if (errors) {
          return (
            <div>
              <div>
                <h4>Problem resetting password. Please send another reset link.</h4>
                <Link
                to="/"
                >Home</Link>
                <Link
                  to="/forgotPassword"
                >Forget Password</Link>
              </div>
            </div>
          );
        }
        else{
        return(
          <Fragment>
          <Navbar/>
          <div className="container_reset">
          <div className="container_login_sec">
              <div className="login_sec_hello"><p className="login_sec_hello_text">Reset <br/>Your Password</p>
            </div>
            <center>
            <form className="login_form">
              <input type="password" placeholder="Password" /><br/>
              <input type="password" placeholder="Confirm Password" /><br/>
              <br/><br/>
              <button className="reset_btn"> Reset <i className="fa fa-repeat" aria-hidden="true"></i></button>
            </form>
            <div className="bottom_forget"><p className="bottom_reset_txt"> Get your password ?<span><Link className="try_now" to="/login"> Log in</Link></span></p></div>
                </center>
          </div>	
         </div>
          </Fragment>
        )
    }
}
}
ResetPassword.propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        token: PropTypes.string.isRequired,
      }),
    }),
  };

const mapStateToProps = state => ({
    password:state.password,
    token:state.token
});

export default connect(
    mapStateToProps,
  )(ResetPassword);