import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbardash from "../layout/NavbarDashboard";
import { Link} from 'react-router-dom';
import HiddenAssets from '../layout/AddTasks';
import AdminSideNav from "../layout/AdminSideNav";
import AdminNavbar from "../layout/AdminNavbar";

class AdminProjectDet extends Component {
    constructor(props){
        super(props)
       
        this.state = {
            showtaskform:false,
            projectdetail: {
                project_id:1,project_name:'LaptopVul',no_of_report:'5', project_admin:'ryu',asset_tag:[' laptop ', ',' ,' ipaddress'],risk_status:'open',date:'15/03/2020',serial_no:'1',task_id:[1,2,3],task_name:'hgf56',task_status:'open',report_id:1,report:'',
            },
            projectdetails: [{
                project_id:1,project_name:'LaptopVul',no_of_report:'5', project_admin:'ryu',asset_tag:[' laptop ', ',' ,' ipaddress'],risk_status:'open',date:'15/03/2020',serial_no:'1',task_id:15,task_name:'hgf56',task_status:'open',report_id:12,report:'',
            }]
    }
}
openhiddenform=(e)=>{
    e.preventDefault();
    const {showtaskform }=this.state;
  this.setState({showtaskform:true});
}
table_for_tasks(){
    return this.state.projectdetails.map((projectdetails, index) => {
        const {serial_no,report_id,report,task_id,task_name,task_status}= projectdetails
        return (
            <tr key={task_id}>
            <td>{serial_no}</td>
                <td>{task_id}</td>
                <td>{task_name}</td>
                <td>{task_status}</td>
                <td className="actions_play_c"><i className="fa fa-play" aria-hidden="true" ></i>
                <ul className="option_action_paly_c">
                    <li onClick={this.openhiddenform}>Assgin</li>
                    <Link to="/adminTasksDetails"><li>Close Task</li></Link>
                    <Link to="/adminTasksDetails"><li>View Tasks</li></Link>
                </ul>
            </td>
            </tr>
        )
  })
 }
project_detials_report_id(){
    return this.state.projectdetails.map((projectdetails, index) => {
        const {serial_no,report_id,report,task_id,task_name,task_status}= projectdetails
        return (
            <div className="col_dash_2_90_project_det_col_tasks" key={report_id}>
            <div className="col_dash_2_90_project_task_headings">
            <div className="inner_tasks_report">
                <p> Serial No: <span>{serial_no}</span></p>
                </div>
                <div className="inner_tasks_report">
                <p> Report Id: <span>{report_id[0]}</span></p>
                </div>
                <div className="inner_tasks_report">
                <p>Report: <button>Download</button></p>
                </div>
            </div>
            <div className="tasks_name_det">
                 <table>
                     <thead>
                         <tr>
                             <th>Serial No</th>
                             <th>Tasks Id</th>
                             <th>Tasks Name</th>
                             <th>Status</th>
                             <th>Action</th>
                         </tr>
                     </thead>
                     <tbody>
                     {this.table_for_tasks()}
                     {this.table_for_tasks()}
                    </tbody>
                 </table>
            </div> 
        </div>     
            )
     })
}

render() {
     const {project_id,project_name,no_of_report,report_id,report, project_admin,asset_tag,risk_status,date,serial_no,task_id,task_name,task_status} =this.state.projectdetail;
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
          <p> Project Details</p>
      </div>
      <div className="col_dash_2_90_project_det_col_det">
        <tr className="tr_deatils_project">
            <td>Project ID</td>
            <td>:</td>
            <td>{project_id}</td>
        </tr>
        <tr className="tr_deatils_project">
            <td>Project Name</td>
            <td>:</td>
            <td>{project_name}</td>
        </tr>
        <tr className="tr_deatils_project">
            <td>Risk Status</td>
            <td>:</td>
            <td>{risk_status}</td>
        </tr>
        <tr className="tr_deatils_project">
            <td>Date</td>
            <td>:</td>
            <td>{date}</td>
        </tr>
       
        <tr className="tr_deatils_project">
            <td>Asset Tagged</td>
            <td>:</td>
            <td>{asset_tag}</td>
        </tr>
        <tr className="tr_deatils_project">
            <td>No of Reports</td>
            <td>:</td>
            <td>{no_of_report}</td>
        </tr>
        <tr className="tr_deatils_project">
            <td>Delete Project</td>
            <td>:</td>
            <td><button>Delete</button></td>
        </tr>
      </div>
      {this.project_detials_report_id()}
     {this.project_detials_report_id()}
   
  </div>
 </div>
 {this.state.showtaskform && <HiddenAssets/>}

  </div>
  </Fragment>
    );
  }
}

AdminProjectDet.propTypes = {
  auth: PropTypes.object.isRequired,
  users:PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  users:state.users

});
export default connect(
  mapStateToProps,
)(AdminProjectDet);