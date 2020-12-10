import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link} from 'react-router-dom';
class userDashboard extends Component {
    constructor(props){
        super(props)
       
        this.state = {
        
            taskdetail: {
                task_id:1,assigned_name:'Lal',task_name:'lapser',project_id:5848,report_id:'454h' ,project_admin:'ryu',asset_type:[' laptop ', ',' ,' ipaddress'],risk_rating:'high',date:'15/03/2020',serial_no:'1',task_status:'open',vulnerability:'gghgh',severity:'high',remidiation_action:"vgffhdd",inherit_risk:'nnnnj'
            },
            taskdetails: [{
                task_id:1,assigned_name:'Lal',task_name:'lapser',project_id:5848,report_id:'454h' ,project_admin:'ryu',asset_type:[' laptop ', ',' ,' ipaddress'],risk_rating:'high',date:'15/03/2020',serial_no:'1',task_status:'open',vulnerability:'gghgh',severity:'high',remidiation_action:"vgffhdd",inherit_risk:'nnnnj'
            }],
         
    }
}

vulnerability(){
    return this.state.taskdetails.map((taskdetails, index) => {
        const {serial_no,vulnerability,remidiation_action}= taskdetails
        return (
            <tr key={serial_no}>
            <td>{serial_no}</td>
            <td>{vulnerability}</td>
            </tr>
        )
  })
 }
 remidiation_action(){
    return this.state.taskdetails.map((taskdetails, index) => {
        const {serial_no,vulnerability,remidiation_action}= taskdetails
        return (
            <tr key={serial_no}>
            <td>{serial_no}</td>
            <td>{remidiation_action}</td>
            </tr>
        )
  })
 }
openhiddenform=(e)=>{
    e.preventDefault();
    const {showtaskform }=this.state;
  this.setState({showtaskform:true});
}
render() {
    const {
        task_id,assigned_name,project_id,task_name,report_id, project_admin,asset_type,risk_rating,date,serial_no,task_status,vulnerability,severity,remidiation_action,inherit_risk
    } =this.state.taskdetail;
return (
  <Fragment>
  <div className="col_dash">
  <div className="dash_row_90">
  <div className="row_dash_2">
  </div>
  <div className="col_dash_2_90_project_det">
      <div className="col_dash_2_90_project_det_headings">
          <p> Tasks Details</p>
      </div>
      <div className="col_dash_2_90_project_det_col_det">
        <tr className="tr_deatils_project">
            <td>Task ID</td>
            <td>:</td>
            <td>{task_id}</td>
        </tr>
        <tr className="tr_deatils_project">
            <td>Task Name</td>
            <td>:</td>
            <td>{task_name}</td>
        </tr>
        <tr className="tr_deatils_project">
            <td>Project ID</td>
            <td>:</td>
            <td>{project_id}</td>
        </tr>
        <tr className="tr_deatils_project">
            <td>Project Admin</td>
            <td>:</td>
            <td>{project_admin}</td>
        </tr>
        <tr className="tr_deatils_project">
            <td>Report ID</td>
            <td>:</td>
            <td>{report_id}</td>
        </tr>
        <tr className="tr_deatils_project">
            <td>Assigned To</td>
            <td>:</td>
            <td>{assigned_name}</td>
        </tr>
        <tr className="tr_deatils_project">
            <td>Risk Rating</td>
            <td>:</td>
            <td>{risk_rating}</td>
        </tr>
        <tr className="tr_deatils_project">
            <td>Assigned Date</td>
            <td>:</td>
            <td>{date}</td>
        </tr>
        
        <tr className="tr_deatils_project">
            <td>Asset Type</td>
            <td>:</td>
            <td>{asset_type}</td>
        </tr>
       
        <tr className="tr_deatils_project">
            <td>Severity</td>
            <td>:</td>
            <td>{severity}</td>
        </tr>
        <tr className="tr_deatils_project">
            <td>Inherit Risk</td>
            <td>:</td>
            <td>{inherit_risk}</td>
        </tr>
        <tr className="tr_deatils_project">
            <td>Evidences</td>
            <td>:</td>
            <td><button>Evidences</button></td>
        </tr>
        <tr className="tr_deatils_project">
            <td>Task Status</td>
            <td>:</td>
            <td>{task_status}</td>
            <td><select>
                <option>Change Status</option>
                <option>Open </option>
                <option>Close</option>
            </select> </td>
        </tr>
      </div>
  </div>
  <div className="table_for_vul">
      <tabel className="for_vul">
          <td>
              <tr style={{fontWeight:"bold",fontSize:"1.1vw"}}>Vulnerability</tr>
              <tr></tr>
              <tr>{this.vulnerability()}</tr>
          </td>
      </tabel>
      <tabel className="for_remd">
          <td>
              <tr style={{fontWeight:"bold",fontSize:"1.1vw"}}>Remediation Action</tr>
              <tr></tr>
              
              <tr>{this.remidiation_action()}</tr>
          </td>
      </tabel>
      
  </div>
 </div>
  </div>
  </Fragment>
    );
  }
}

userDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  users:PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  users:state.users

});
export default connect(
  mapStateToProps,
)(userDashboard);