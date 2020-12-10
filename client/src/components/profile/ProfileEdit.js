import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbardash from "../layout/NavbarDashboard";
import SideNavbar from '../layout/sideSuperAdminNavbar';
import Rectangleimg from '../../img/Rectangle 4.png'

class ProfileEdit extends Component {
    constructor(props){
        super(props)
        this.state={
          disabled:true,
          firstName:	"Nietsh",
          lastName:	"Singh"	,
          email: "adnfjn@gvdfh.com",
          emailAddress:	"intern@cybersrcc.com",	
          password:	"************", 	
          passwordHashFunction:	"*****************",	
          organizationUnitPath:	"Noida"	,
          newPrimaryEmail	:"abc@gmail.com",	
          recoveryEmail	:"abc@gmail.com",	
          homeSecondryEmail:	"abc@gmail.com",	
          workSecondryEmail:	"abc@gmail.com",
          recoveryPhoneNo:	"+91 456428512",	
          workPhoneNo	:"+91 456428512",	
          homePhoneNo:	"+91 456428512",
          mobilePhoneNo:	"+91 456428512",	
          workAddress:	"A/9 GBT nagar",	
          homeAddress:	"Noida",	
          employeeId:	"123123"	,
          employeeTitle:	"Project Manager",	
          managerEmail:	"xyz@gmail.com",	
          department:	"xyzxyz",	
          costCenter:	"Noida",
          buildingID:	"8512",	
          floorName:	"A3",	
          floorSection:	"1/4",	
          changePassword:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    handleChange=(e)=> {
      this.setState({ [e.target.id]: e.target.value });
    }
    onSave=(event)=> {
        event.preventDefault();
        const {disabled,firstName, lastName, email, emailAddress, password, passwordHashFunction, organizationUnitPath,
           newPrimaryEmail	, recoveryEmail	, homeSecondryEmail,workSecondryEmail,recoveryPhoneNo, workPhoneNo	,homePhoneNo,
           mobilePhoneNo,workAddress,homeAddress, employeeId	, employeeTitle, managerEmail, department, costCenter, buildingID, 
           floorName, floorSection,	changePassword}=this.state
        this.setState({
         firtsName:this.state.firtsName,
         lastName:this.state.lastName,
         email:this.state.email,
         emailAddress:this.state.emailAddress,
         password:this.state.password,
         passwordHashFunction:this.state.passwordHashFunction,
         organizationUnitPath:this.state.organizationUnitPath,
         newPrimaryEmail:this.state.newPrimaryEmail,
         recoveryEmail:this.state.recoveryEmail,
         homeSecondryEmail:this.state.homeSecondryEmail,
         workSecondryEmail:this.state.workSecondryEmail,
         recoveryPhoneNo:this.state.recoveryPhoneNo,
         workPhoneNo:this.state.workPhoneNo,
         homePhoneNo:this.state.homePhoneNo,
         mobilePhoneNo:this.state.mobilePhoneNo,
         workAddress:this.state.workAddress,
         homeAddress:this.state.homeAddress,
         employeeId:this.state.employeeId,
         employeeTitle:this.state.employeeTitle,
         managerEmail:this.state.managerEmail,
         department:this.state.department,
         costCenter:this.state.costCenter,
         buildingID:this.state.buildingID,
         floorName:this.state.floorName,
         floorSection:this.state.floorSection,
         changePassword:this.state.changePassword,
         disabled:true
        })
        
    }
    
    oneditenable=e=>{
    e.preventDefault();
    const {disabled}=this.state
    this.setState({
      disabled:!disabled
    })
  }
render() {
  const {firstName, lastName, email, emailAddress, password, passwordHashFunction, organizationUnitPath, newPrimaryEmail	, recoveryEmail	, homeSecondryEmail,workSecondryEmail,recoveryPhoneNo, workPhoneNo	,homePhoneNo,mobilePhoneNo,workAddress,homeAddress, employeeId	, employeeTitle, managerEmail, department, costCenter, buildingID, floorName, floorSection,	changePassword}=this.state
return (
    <Fragment>
    <div className="col_dash">
   <SideNavbar/>
   <div className="dash_row_90">
    <div className="row_dash_2">
    <Navbardash/>
    </div>
    <div className="col_dash_2_90_p" id="blur_back">
          <div className="profile_sec">
            <div className="profile_sec_avtar">
               <div className="profile_sec_avtar_img">
                 <img src={Rectangleimg}/>
               </div>
               <div className="profile_sec_avtar_title">
                 <p className="profile_title">Username <span>/</span> Security Manager</p>
                 <p className="profile_title_org">CyberSRC Consultancy LLP</p>
               </div>
        </div>
        <form className="save_btn_profile">
            <button className="save_profile" onClick={this.onSave}>Save</button>
              <table className="det_list_of_user_edit" style={{ padding: "2vh 1vw",marginTop: "1vh"}}>
                 <tr>
                     <td  className="que">First Name</td>
                     <td className="ans"><input type="text" id="firstName" value={firstName} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Last Name</td>
                     <td className="ans"><input type="text" id="lastName" value={lastName} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Email</td>
                     <td className="ans"><input type="text" id="email" value={email} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr> 
                 <tr>
                     <td  className="que">Email Address</td>
                     <td className="ans"><input type="text" id="emailAddress" value={emailAddress} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Password</td>
                     <td className="ans"><input type="text" id="password" value={password} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Password Hash Function</td>
                     <td className="ans"><input type="text" id="passwordHashFunction" value={passwordHashFunction} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Organization Unit Path</td>
                     <td className="ans"><input type="text" id="organizationUnitPath" value={organizationUnitPath} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">New Primary Email</td>
                     <td className="ans"><input type="text" id="newPrimaryEmail" value={newPrimaryEmail} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Recovery Email</td>
                     <td className="ans"><input type="text" id="recoveryEmail" value={recoveryEmail} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Home Secondry Email</td>
                     <td className="ans"><input type="text" id="homeSecondryEmail" value={homeSecondryEmail} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Work Secondry Email</td>
                     <td className="ans"><input type="text" id="workSecondryEmail" value={workSecondryEmail} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Recovery Phone No</td>
                     <td className="ans"><input type="text" id="recoveryPhoneNo" value={recoveryPhoneNo} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Work Phone No.</td>
                     <td className="ans"><input type="text" id="workPhoneNo" value={workPhoneNo} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Home Phone No.</td>
                     <td className="ans"><input type="text" id="homePhoneNo" value={homePhoneNo} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Mobile Phone No.</td>
                     <td className="ans"><input type="text" id="mobilePhoneNo" value={mobilePhoneNo} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Work Address</td>
                     <td className="ans"><input type="text" id="workAddress" value={workAddress} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Home Address</td>
                     <td className="ans"><input type="text" id="homeAddress" value={homeAddress} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Employee Id</td>
                     <td className="ans"><input type="text" id="employeeId" value={employeeId} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Employee Title</td>
                     <td className="ans"><input type="text" id="employeeTitle" value={employeeTitle} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Manager Email</td>
                     <td className="ans"><input type="text" id="managerEmail" value={managerEmail} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Department</td>
                     <td className="ans"><input type="text" id="department" value={department} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Cost Center</td>
                     <td className="ans"><input type="text" id="costCenter" value={costCenter} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Building ID</td>
                     <td className="ans"><input type="text" id="buildingID" value={buildingID} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Floor Name</td>
                     <td className="ans"><input type="text" id="floorName" value={floorName} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Floor Section</td>
                     <td className="ans"><input type="text" id="floorSection" value={floorSection} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 <tr>
                     <td  className="que">Change Password</td>
                     <td className="ans"><input type="text" id="changePassword" value={changePassword} onChange={this.handleChange} disabled={this.state.disabled}/></td>
                     <td>
                     <button className="edit" onClick={this.oneditenable}><i className="fa fa-edit" style={{fontSize: "2vw"}} aria-hidden="true"></i></button> </td>
                 </tr>
                 
                 
              </table>
          </form>
          </div>
        </div>
        
    </div>  
    </div>
    </Fragment>
     
    );
  }
}

ProfileEdit.propTypes = {
  auth: PropTypes.object.isRequired,
  users:PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  users:state.users

});
export default connect(
  mapStateToProps,
)(ProfileEdit);