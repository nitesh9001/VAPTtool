import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authAction";
import 'bootstrap/dist/css/bootstrap.min.css';
class Register extends Component{
  constructor() {
    super();
    this.state = {
      firstName:	"",
      lastName:	""	,
      email: "",
      emailAddress:	"",	
      password:	"", 	
      passwordHashFunction:	"",	
      organizationUnitPath:	""	,
      newPrimaryEmail	:"",	
      recoveryEmail	:"",	
      homeSecondryEmail:	"",	
      workSecondryEmail:	"",
      recoveryPhoneNo:	"",	
      workPhoneNo	:"",	
      homePhoneNo:"",
      mobilePhoneNo:"",	
      workAddress:	"",	
      homeAddress:	"",	
      employeeId:	""	,
      employeeTitle:	"",	
      managerEmail:	"",	
      department:	"",	
      costCenter:	"",
      buildingID:	"",	
      floorName:	"",	
      floorSection:	"",	
      changePassword:"",
      errors: {}
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      firstName:	this.state.firstName,
      lastName:	this.state.lastName,
      email: this.state.email,
      emailAddress:	this.state.emailAddress,	
      password:	this.state.password, 	
      passwordHashFunction:	this.state.passwordHashFunction,	
      organizationUnitPath:	this.state.organizationUnitPath	,
      newPrimaryEmail	:this.state.newPrimaryEmail,	
      recoveryEmail	:this.state.recoveryEmail,	
      homeSecondryEmail:	this.state.homeSecondryEmail,	
      workSecondryEmail:	this.state.workAddress,
      recoveryPhoneNo:	this.state.recoveryPhoneNo,	
      workPhoneNo	:this.state.workPhoneNo,	
      homePhoneNo:this.state.homePhoneNo,
      mobilePhoneNo:this.state.mobilePhoneNo,	
      workAddress:	this.state.workAddress,	
      homeAddress:	this.state.homeAddress,	
      employeeId:	this.state.employeeId	,
      employeeTitle:	this.state.employeeTitle,	
      managerEmail:	this.state.managerEmail,	
      department:	this.state.department,	
      costCenter:this.state.costCenter,
      buildingID:	this.state.buildingID,	
      floorName:	this.state.floorName,	
      floorSection:	this.state.floorSection,
    };
   
  this.props.registerUser(newUser); 
};
    render(){
      const { errors } = this.state;
   return (
       <div className="register">
       <div className="header_reg">
            
            <div className="testbox">
              <h1>Registration for super admin</h1>
              <h4 className="text-warn">This is secure routing connected to your database. </h4>
              <form  noValidate onSubmit= {this.handleSubmit} className="form_register">
              <hr />
              <hr />
             
              <input type="text"  value={this.state.name} onChange={this.onChange} className="resgister_input"
                  error={errors.name}  
                  id="name" placeholder="First Name" />
                  <span className="red-text">{errors.name}</span><br />


              <input type="text"  value={this.state.lastName} onChange={this.onChange} className="resgister_input"
                  error={errors.lastName} 
                  id="lastName" placeholder="Last Name" />
                  <span className="red-text">{errors.lastName}</span><br />


                  <input type="email"  onChange={this.onChange} className="resgister_input"
                  value={this.state.email}
                  error={errors.email}
                  id="email" placeholder="Email" />
                  <span className="red-text">{errors.email}</span><br />
                  
                  <input type="email"  onChange={this.onChange} className="resgister_input"
                  value={this.state.emailAddress}
                  error={errors.emailAddress}
                  id="emailAddress" placeholder="Email Address" />
                  <span className="red-text">{errors.emailAddress}</span><br />
                 
                  <input type="password"  value={this.state.password} onChange={this.onChange} className="resgister_input"
                  error={errors.password}
                  id="password" placeholder="Password" />
                 <span className="red-text">{errors.password}</span><br />
               
                 <input type="password"  value={this.state.passwordHashFunction} onChange={this.onChange} className="resgister_input"
                  error={errors.passwordHashFunction}
                  id="passwordHashFunction" placeholder="Password Hash Function" />
                 <span className="red-text">{errors.password}</span><br />
                

                 <input type="text"  value={this.state.organizationUnitPath} onChange={this.onChange} className="resgister_input" 
                  error={errors.organizationUnitPath}
                  id="organizationUnitPath" placeholder="Organization Unit Path" />
                  <span className="red-text">{errors.organizationUnitPath}</span><br />

 
                  <input type="email"  value={this.state.newPrimaryEmail} onChange={this.onChange} className="resgister_input" 
                  error={errors.newPrimaryEmail} 
                  id="newPrimaryEmail" placeholder="New Primary Email"  />
                  <span className="red-text">{errors.newPrimaryEmail}</span><br />
                  
                  <input type="email"  value={this.state.recoveryEmail} onChange={this.onChange} className="resgister_input" 
                  error={errors.recoveryEmail} 
                  id="recoveryEmail" placeholder="Recovery Email"  />
                  <span className="red-text">{errors.recoveryEmail}</span><br />
                  
                  <input type="email"  value={this.state.homeSecondryEmail} onChange={this.onChange} className="resgister_input" 
                  error={errors.homeSecondryEmail}
                  id="homeSecondryEmail" placeholder="Home Secondry Email"  />
                  <span className="red-text">{errors.homeSecondryEmail}</span><br />
                  
                  <input type="email"  value={this.state.workSecondryEmail} onChange={this.onChange} className="resgister_input" 
                  error={errors.workSecondryEmail}
                  id="workSecondryEmail" placeholder="Work Secondry Email"  />
                  <span className="red-text">{errors.workSecondryEmail}</span><br />

                  
              <input type="text"  value={this.state.homePhoneNo} onChange={this.onChange} className="resgister_input"
                  error={errors.homePhoneNo} 
                  id="homePhoneNo" placeholder="Home Phone No" />
                 <span className="red-text">{errors.homePhoneNo}</span><br />

              <input type="text"  value={this.state.mobilePhoneNo} onChange={this.onChange} className="resgister_input"
                  error={errors.mobilePhoneNo}
                  id="mobilePhoneNO" placeholder="Mobile Phone NO" />
                 <span className="red-text">{errors.mobilePhoneNo}</span><br />

              <input type="text"  value={this.state.workAddress} onChange={this.onChange} className="resgister_input"
                  error={errors.workAddress} 
                  id="workAddress" placeholder="Work Address" />        
                  <span className="red-text">{errors.workAddress}</span><br />

              <input type="text"  value={this.state.homeAddress} onChange={this.onChange} className="resgister_input"
                  error={errors.homeAddress} 
                  id="homeAddress" placeholder="Home Address" />
                 <span className="red-text">{errors.homeAddress}</span><br />

              <input type="text"  value={this.state.employeeId} onChange={this.onChange} className="resgister_input"
                  error={errors.employeeId} 
                  id="employeeId" placeholder="Employee ID" />
                  <span className="red-text">{errors.employeeId}</span><br />

                  <input type="text"  value={this.state.employeeTitle} onChange={this.onChange} className="resgister_input"
                  error={errors.employeeTitle}
                  id="employeeTitle" placeholder="Employee Title" />
                  <span className="red-text">{errors.employeeTitle}</span><br />

                  <input type="email"  value={this.state.managerEmail} onChange={this.onChange} className="resgister_input" 
                  error={errors.managerEmail} 
                  id="managerEmail" placeholder="Manager Email"  />
                  <span className="red-text">{errors.managerEmail}</span><br />

                  
                  <input type="text"  value={this.state.department} onChange={this.onChange} className="resgister_input" 
                  error={errors.department} 
                  id="department" placeholder="Department"  />
                  <span className="red-text">{errors.department}</span><br />

                  
                  <input type="text"  value={this.state.costCenter} onChange={this.onChange} className="resgister_input" 
                  error={errors.costCenter} 
                  id="costCenter" placeholder="Cost Center"  />
                  <span className="red-text">{errors.costCenter}</span><br />

                  <input type="text"  value={this.state.buildingID} onChange={this.onChange} className="resgister_input" 
                  error={errors.buildingID} 
                  id="buildingID" placeholder="Building ID"  />
                  <span className="red-text">{errors.buildingID}</span><br />

                  <input type="text"  value={this.state.floorName} onChange={this.onChange} className="resgister_input" 
                  error={errors.floorName} 
                  id="floorName" placeholder="Floor Name"  />
                  <span className="red-text">{errors.floorName}</span><br />
                  
                  
                  <input type="text"  value={this.state.floorSection} onChange={this.onChange} className="resgister_input" 
                  error={errors.floorSection}
                  id="floorSection" placeholder="Floor Section"  />
                  <span className="red-text">{errors.floorSection}</span><br />
                  
                  

              <p>By clicking Register, you agree on our <Link to="/">terms and condition</Link>.</p><br />
               <button className="button_sub" type="Submit" >Register</button>
              </form>
            </div>
        </div>           
       </div>
   )
}
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));