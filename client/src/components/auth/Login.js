import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authAction";
import classnames from "classnames";
import { Link } from "react-router-dom";
import Recaptcha from 'react-recaptcha';
import { store } from 'react-notifications-component';
import Navbar from '../layout/Navbar';

class  Login extends Component {
    constructor() {
        super();       
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this); 
        this.state = {
          userId: "",
          password: "",
          isVerified: true,
          errors: {}
        };
    }
    componentWillReceiveProps(nextProps) {
           if (nextProps.auth.isAuthenticated) {
                this.props.history.push("/dashboard");              // push user to dashboard when they login
            }
           else if (nextProps.errors) {
              this.setState({
                errors: store.addNotification({
                  title: "Wrong",
                  message:'Invalid userId or Password' ,
                  type: "danger",
                  insert: "top",
                  container: "top-right",
                  animationIn: ["animated", "fadeIn"],
                  animationOut: ["animated", "fadeOut"],
                  dismiss: {
                    duration: 6000,
                    onScreen: true
                  }
            })
        });
      }
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
    }
    recaptchaLoaded() {}
    verifyCallback(response) {
      if (response) {
        this.setState({
          isVerified: true
        })
      }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
    e.preventDefault();
    if (this.state.isVerified && this.state.userId && this.state.password) {
      const userData = {
        userId: this.state.userId,
        password: this.state.password,
      };
      this.props.loginUser(userData);
    }
    else{
      store.addNotification({
        title: "Warning",
        message:"Please enter all credentials" ,
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
    render() {
        const { userId,password, errors} = this.state;  
   return (  
     <Fragment>
       <Navbar/>
       <div className="container_login">
		<div className="container_login_sec">
			   <div className="login_sec_hello"><p className="login_sec_hello_text">Hello, <br/>Welcome Back</p>
			</div>
			<center>
			<form className="login_form" onSubmit={this.onSubmit}>
				<input type="text" placeholder="userId" onChange={this.onChange}
                  value={userId}
                  error={errors.userId}
                  id="userId"
                  className={classnames("", {
                    invalid: errors.userId || errors.errornotfound
        })}/><br/>
				<input type="password" placeholder="Password" onChange={this.onChange}
                  value={password}
                  error={errors.password}
                  id="password"            
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}/><br/>
				<br/>
        {/* <Recaptcha
              sitekey="6LcEFvEUAAAAAAMkCkhjzaZXijghO9BCugXrCerN"
              render="explicit"
              onloadCallback={this.recaptchaLoaded}
              verifyCallback={this.verifyCallback}
              size="normal"
              className="Recaptcha"
          /> */}
				<ul className="list_login"><li>
					</li>
					<li><Link className="forget" to="/forgetPassword">Forget Password ?</Link></li></ul><br/>
				<button className="login_btn" type="submit"> Log in </button>
			</form>
			<div className="bottom_login"><p className="bottom_login_txt"> Don't have an account ?<span><Link to="/home" className="try_now"> Try now</Link></span></p></div>
		</center>
		</div>	
	</div>
     </Fragment>
       
)

}
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { loginUser }
  )(Login);