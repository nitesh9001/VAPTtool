import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { registerUser } from "../../actions/authAction";

class HiddenClients extends Component{

    constructor(props) {
        super(props);
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
          errors: "error",
        };
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
       
      this.props.registerUser(newUser, this.props.history); 
    };
    
      
    closeClinet = (e)=>{
      e.preventDefault();
      window.location.reload(false);
   };
    render(){
  const {errors}=this.state
      return(
        <div className="form" id="hiddenform">
        <div className="form_hidden">
            <div className="heading">
                <div className="heading_title_client" >
                  <p >Register Client</p>
                </div>
                <div className="close_btn_client">
              <button className="side_right_close_btn" onClick={this.closeClinet}><i className="fa fa-times" aria-hidden="true" style={{fontSize: "1.4vw"}} ></i></button>
                   </div>
            </div>
            
            <form>
               <div className="input_form">
                   <label>First Name</label><br/>
                   <input type="text"  value={this.state.name} onChange={this.onChange} id="name" placeholder="First Name" required/>
               </div> 
               <div className="input_form">
                   <label>Last Name</label><br/>
                   <input type="text"  value={this.state.lastName} onChange={this.onChange} id="lastName" placeholder="Last Name" required/>

               </div> 
               <div className="input_form">
                   <label>Email Address</label><br/>
                   <input type="email"  onChange={this.onChange}
                  value={this.state.emailAddress}
                  id="emailAddress" placeholder="Email Address" required/>
                 </div> 
               
               <div className="input_form">
                   <label>New Primary Email</label><br/>
                   <input type="email"  value={this.state.newPrimaryEmail} onChange={this.onChange} id="newPrimaryEmail" placeholder="New Primary Email"  required/>                  
               </div>
               <div className="input_form">
                   <label>Recovery Email</label><br/>
                   <input type="email"  value={this.state.recoveryEmail} onChange={this.onChange} id="recoveryEmail" placeholder="Recovery Email"  required/>
               </div> 
               <div className="input_form">
                   <label>Home Secondary Email</label><br/>
                   <input type="email"  value={this.state.homeSecondryEmail} onChange={this.onChange} id="homeSecondryEmail" placeholder="Home Secondry Email"  required/>
               </div>
               <div className="input_form">
                   <label>Work Secondary Email</label><br/>
                   <input type="email"  value={this.state.workSecondryEmail} onChange={this.onChange} id="workSecondryEmail" placeholder="Work Secondry Email"  required/>

               </div>
               <div className="input_form">
                   <label>Recovery Phone</label><br/>
                   <input type="text"  value={this.state.recoveryPhoneNo} onChange={this.onChange}
                  id="recoveryPhoneNo" placeholder="Recovery Phone No " />
               </div>
               <div className="input_form">
                   <label>Work Phone</label><br/>
                   <input type="text"  value={this.state.workPhoneNo} onChange={this.onChange}
                  id="workPhoneNO" placeholder="Work Phone NO" />

               </div>
               <div className="input_form">
                   <label>Home Phone</label><br/>
                   <input type="text"  value={this.state.homePhoneNo} onChange={this.onChange}
                  id="homePhoneNo" placeholder="Home Phone No" required/>

               </div>
               <div className="input_form">
                   <label>Mobile Phone</label><br/>
                   <input type="text"  value={this.state.mobilePhoneNo} onChange={this.onChange}
                  id="mobilePhoneNO" placeholder="Mobile Phone NO" />

               </div>
               <div className="input_form">
                   <label>Work Address</label><br/>
                   <input type="text"  value={this.state.workAddress} onChange={this.onChange}
                  id="workAddress" placeholder="Work Address" required/>        
               </div>

               <div className="input_form">
                   <label>Home Address</label><br/>
                   <input type="text"  value={this.state.homeAddress} onChange={this.onChange}
                  id="homeAddress" placeholder="Home Address" required/>
               </div>
               <div className="input_form">
                   <label>Organization</label><br/>
                   <input type="text"  value={this.state.organizationUnitPath} onChange={this.onChange} 
                  id="organizationUnitPath" placeholder="Organization Unit Path" required/>
               </div>
               
               <div className="input_form">
                   <label>Employee ID</label><br/>
                   <input type="text"  value={this.state.employeeId} onChange={this.onChange}
                  id="employeeId" placeholder="Employee ID" required/>
               </div> 
               
               <div className="input_form">
                   <label>Employee Type</label><br/>
                   <input type="text"  value={this.state.employeeType} onChange={this.onChange}
                  id="employeeType" placeholder="Employee Type" required/>
               </div>
               
               <div className="input_form">
                   <label>Employee Title</label><br/>
                   <input type="text"  value={this.state.employeeTitle} onChange={this.onChange}
                  id="employeeTitle" placeholder="Employee Title" required/>
               </div>
               
               <div className="input_form">
                   <label>Manager Email</label><br/>
                   <input type="email"  value={this.state.managerEmail} onChange={this.onChange} 
                  id="managerEmail" placeholder="Manager Email"  required/>
               </div>
               
               <div className="input_form">
                   <label>Department</label><br/>
                  <input type="text"  value={this.state.department} onChange={this.onChange} 
                  id="department" placeholder="Department"  required/>
               </div>
               
               <div className="input_form">
                   <label>Cost Center</label><br/>
                   <input type="text"  value={this.state.costCenter} onChange={this.onChange} 
                  id="costCenter" placeholder="Cost Center"  required/>
               </div>
               
               <div className="input_form">
                   <label>Building ID</label><br/>
                   <input type="text"  value={this.state.buildingID} onChange={this.onChange} 
                  id="buildingID" placeholder="Building ID"  required/>
               </div>
               
               <div className="input_form">
                   <label>Floor Name</label><br/>
                   <input type="text"  value={this.state.floorName} onChange={this.onChange} 
                  id="floorName" placeholder="Floor Name"  required/>                
               </div>
               
               <div className="input_form">
                   <label>Floor Section</label><br/>
                   <input type="text"  value={this.state.floorSection} onChange={this.onChange} 
                  id="floorSection" placeholder="Floor Section"  required/>
               </div> 
               <div className="input_form">
                   <label>Password</label><br/>                       
                  <input type="password"  value={this.state.password} onChange={this.onChange}
                  id="password" placeholder="Password" required/>
               </div> 
               <div className="input_form">
                   <input type="checkbox" style={{width: "1vw"}} size="2vw"/>
                   <label>Send email</label>    
               </div>
               <div className="input_form">
                   <button className="hidden_form_sub" type="button" value="Submit">Submit</button>
               </div>   
            </form>
        </div>
    </div>
        )
    }
  }
HiddenClients.propTypes={
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
  { registerUser })(HiddenClients);