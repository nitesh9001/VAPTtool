import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbardash from "../layout/NavbarDashboard";
import { Link, NavLink} from 'react-router-dom';
import HiddenAssets from "../layout/AddTasks";
import AdminSideNav from "../layout/AdminSideNav";
import AdminNavbar from "../layout/AdminNavbar";

class AdminIssueDet extends Component {
   

constructor(props){
  super(props) 
    this.state = {
      issue_detail : [
        { issue_id:1,project_id:'54', serial_id:1 , risks_status:5,project_admin:"Cybe",issue_discription:"hdnf nbfjfj nkjfnbfjfj nkjfnbfjfj nkjfnbfjfj nkjfnbfjfj nkjfnbfjfj nkjfnbfjfj nkjfnbfjfj nkjfnbfjfj nkjfnbfjfj nkjfjkf nfkbjs",report_id:'45',status:"open",risk:'bhj'}
     ],
  }
}

renderisssue_Data() {
    return this.state.issue_detail.map((issue_detail, index) => {
       const {
         issue_id,project_id, serial_id, risks_status,project_admin,issue_discription,report_id,status,risk}= issue_detail
       return (
          <tr key={issue_id}>
             <td>{serial_id}</td>
             <td><Link to="/adminProjectDetails">{project_id}</Link></td>
             <td><Link to="/adminProjectDetails">{report_id}</Link></td>
             <td>{issue_id}</td>
             <td style={{overflowY:"scroll"}}>{issue_discription}</td>
             <td>{risk}</td>
             <td>{risks_status}</td>
             <td>{status}</td>
             <td className="actions_play"><i className="fa fa-play" aria-hidden="true" ></i>
            <ul className="option_action_paly">
                <li>Download Report</li>
                <Link to="/adminTasksDetails"><li>Assign Tasks</li></Link>
               <Link to="/adminProjectDetails"> <li>View Projects</li></Link>
            </ul>
            </td>
          </tr>
       )
    })
 }

 
render() {
    const { user } = this.props.auth;
return ( 
  <Fragment>
  <div className="col_dash">
<AdminSideNav/>
  <div className="dash_row_90">
  <div className="row_dash_2">
  <AdminNavbar/>
  </div>
  <div className="col_dash_2_90_project_det">
      <div className="col_dash_2_90_project_det_headings">
          <p> Issue Details</p>
      </div>
      <div className="table_issue">
      <div className="tasks_name_det">
      <br/>
     
         <table>
             <thead>
                 <tr>
                     <th>Serial No</th>
                     <th>Project ID</th>
                     <th>VAPT Report ID</th>
                     <th>Issue ID</th>
                     <th>Issue Discription</th>
                     <th>Risk</th>
                     <th>Risk status</th>
                     <th>Status</th>
                     <th>Action</th>
                 </tr>
             </thead>
             <tbody>
                {this.renderisssue_Data()}
                {this.renderisssue_Data()}
             </tbody>
         </table>
     </div>
      </div> 
  </div>
 </div>
 </div>
  </Fragment>
    );
  }
}

AdminIssueDet.propTypes = {
  auth: PropTypes.object.isRequired,
  users:PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  users:state.users

});
export default connect(
  mapStateToProps,
)(AdminIssueDet);