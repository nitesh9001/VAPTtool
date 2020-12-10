import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbardash from "../layout/NavbarDashboard";
import { Link, NavLink} from 'react-router-dom';
import AdminSideNav from "../layout/AdminSideNav";
import HiddenAssets from '../layout/AddTasks';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AdminNavbar from "../layout/AdminNavbar";

class AdminDashboard extends Component {
   
  constructor(props){
    super(props)
    this.state = {
     open_asset:false,
     tasks_details : [
        { tasks_id:1, serial_id:1,admin_name:'hye', issue_id:45,assigned_to:"Nxu" ,admin_email:"asiuhd@bfjh.com", risks_rating:+8, assgin_date:"15/12/19" , asset_type:"laptop", vulnearbility:"high",severity:"high",remediation:"update",project_admin:"Cybe",residual_risk:"hhfg",evidences:'',status:"open",action:""}
     ],
     }
}
opennew_assign=e=>{
    e.preventDefault();
    const{open_asset}=this.state
    this.setState({
        open_asset:true
    })
    
}
renderTableData() {
  return this.state.tasks_details.map((tasks_details,index)=>{
      const { tasks_id, serial_id,admin_name, issue_id,assigned_to,admin_email, risks_rating, assgin_date, asset_type, vulnearbility,severity,remediation,project_admin,residual_risk,evidences,status}= tasks_details 
       return (
          <tr key={tasks_id}>
              <td>{serial_id}</td>
              <td><Link to="/adminTaskDetails">{tasks_id}</Link></td>
            <td><Link to="/adminIssueDetails">{issue_id}</Link></td>
            <td><Link to="/adminUserPRofile">{assigned_to}</Link></td>
            <td>{risks_rating}</td>
            <td>{assgin_date}</td>
            <td>{asset_type}</td>
              <td>{vulnearbility}</td>
            <td>{severity}</td>
              <td>{remediation}</td>
              <td>{residual_risk}</td>
              <td><button className="action_icons_filter_users"><i className="fa fa-download" style={{fontSize: "1vw"}} aria-hidden="true"></i></button></td>
              <td>xyxx</td>
              <td className="actions_play_u"><i className="fa fa-play" aria-hidden="true" ></i>
                <ul className="option_action_paly_u">
                <li>Notify</li>
                <Link to="/adminTasksDetails"><li>Reassign Task</li></Link>
                <Link to="/adminTasksDetails"><li>View Task</li></Link>
                <Link to="/adminProjectDetails"><li>View project</li></Link>
              </ul>
              </td>
            </tr>
       )
    })
 }
rendertask_newData(){
    return this.state.tasks_details.map((tasks_details,index)=>{
      const { tasks_id, serial_id,admin_name, issue_id,assigned_to,admin_email, risks_rating, assgin_date, asset_type, vulnearbility,severity,remediation,project_admin,residual_risk,evidences,status}= tasks_details 
      return(
        <tr key={tasks_id}>
            <td>{serial_id}</td>
            <td><Link to="/adminTaskDetails">{tasks_id}</Link></td>
            <td><Link to="/adminIssueDetails">{issue_id}</Link></td>
            <td><Link to="/adminUserPRofile">{assigned_to}</Link></td>
            <td>{asset_type}</td>
            <td>{severity}</td>
            <td>{risks_rating}</td>
            <td>{residual_risk}</td>
            <td><button className="action_icons_filter_users"><i className="fa fa-download" style={{fontSize: "1vw"}} aria-hidden="true"></i></button></td>
            <td>xyxx</td>
            <td className="actions_play"><i className="fa fa-play" aria-hidden="true" ></i><ul className="option_action_paly">
            <li>Notify</li>
           <Link to="/adminTasksDetails"><li>Reassign Task</li></Link>
            <Link to="/adminTasksDetails"><li>View Task</li></Link>
          </ul></td>
        </tr>
      )
    })
}
rendertask_unassignData() {
    return this.state.tasks_details.map((tasks_details, index) => {
       const { tasks_id, serial_id,admin_name, issue_id,assigned_to,admin_email, risks_rating, assgin_date, asset_type, vulnearbility,severity,remediation,project_admin,residual_risk,evidences,status}= tasks_details 
       return (
        <tr key={tasks_id}>
        <td>{serial_id}</td>
        <td><Link to="/adminIssueDetails">{issue_id}</Link></td>
        <td>{tasks_id}</td>
        <td>{admin_name}</td>
        <td><a href="mailto: {admin_email}">{admin_email}</a></td>
        <td>{risks_rating}</td>
        <td>{asset_type}</td>
        <td>{vulnearbility}</td>
        <td>{status}</td>
        <td className="actions_play" onClick={this.opennew_assign}><i className="fa fa-play" aria-hidden="true" ></i></td>
     </tr>
            )
       })
}

render() {
return (
  <Fragment>
  <div className="col_dash">
 <AdminSideNav/>
 <div className="dash_row_90">
  <div className="row_dash_2">
  <AdminNavbar/>
  </div>
  <div className="col_dash_2_90_u" id="blur_back">
            <div className="col_dash_users">
                     <div className="col_dash_users_inner">
                         <div className="col_dash_users_inner_head">
                             <p>Users</p>
                         </div>
                         <div className="col_dash_users_inner_action">
                            <button className="see_acc" style={{color: "white",background: "#17a2b8",borderRadius: "4px"}}>See Account Report</button>
                            <button className="see_acc"><i className="fa fa-download" aria-hidden="true" style={{fontSize: "1.4vw"}}></i></button>
                         </div>
                     </div>
            </div>
            <div className="col_dash_2_90_users_param">
                  <div className="users_param">
                      <div className="users_param_title">Total Users
                      </div>
                      <div className="users_param_value"><p>900</p>
                      </div>
                  </div>
                  <div className="users_param">
                      <div className="users_param_title">Assigned Users
                      </div>
                      <div className="users_param_value"><p>405</p>
                      </div>
                  </div>
                  <div className="users_param">
                      <div className="users_param_title">Assgin Users
                      </div>
                      <div className="users_param_value"><button  className="ass_asign_bnt" onClick={this.opennew_assign}>Assign Task</button>
                      </div>
                  </div>
                  <div className="users_param">
                      <div className="users_param_title">Blocked Users
                      </div>
                      <div className="users_param_value"><p>45</p>
                      </div>
                  </div>
            </div>
            <div className="col_dash_2_90_users_project">
<Tabs  style={{ width: "100%",display: "block"}}>
      <TabList  style={{ width:"100%",height: "5vh", display: "flex"}} >
      <Tab style={{width: "50%",height: "100%"}}><button className="btn_user_assigned" id="btn_user_project"><p> Recent Assigned Task</p></button></Tab>
      <Tab style={{width: "50%",height: "100%"}}>
      <button className="btn_user_unassigned" id="btn_user_c_projects"><p>Recent Unassigned Task</p></button>
      </Tab>
      </TabList>
    <TabPanel style={{width:"100%", height:"auto", paddingBottom:"0vh"}}>
    <table  className="details_tabel_projects_table">
                <thead>
                <tr>
                    <th>Serial Id</th>
                    <th>Issue Id</th>
                    <th>Task Id</th>
                    <th>Assign to</th>
                    <th>Assets</th>
                    <th>Severity</th>
                    <th>Risk rating</th>
                    <th>Residual Risk</th>
                    <th>Evidences</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.rendertask_newData()}
              </tbody>
             </table>
    </TabPanel>
    <TabPanel style={{width:"100%", height:"auto", paddingBottom:"0vh"}} >
    <table  className="details_tabel_projects_table">
         <thead>
            <tr>
            <th>Serail Id</th>
            <th>Issue Id</th>
            <th>Task Id</th>
            <th>Admin</th>
            <th>Admin email</th>
            <th>Risk Rating</th>
            <th>Assets</th>
            <th>Vulnerability</th>
            <th>Status</th>
            <th>Action</th>
            </tr>
        </thead>
              <tbody>
                 {this.rendertask_unassignData()} 
                </tbody>
             </table>
    </TabPanel>
  </Tabs>
    </div>
            <div className="col_dash_2_90_users_filter">
              <div className="col_dash_2_90_users_filter_inner">
                  <div className="upper_users">
                    <div className="upper_filter_parts_users">
                      <input type="number" aria-valuemin="0" placeholder="Id Number" minlength="0" min="0"/>
                  </div>
                  <div className="upper_filter_parts_users"> 
                    <select>
                      <option>Assets</option>
                      <option>option1</option>
                      <option>option2</option>
                      <option>option3</option>
                      <option>option4</option>
                      <option>option5</option>
                      <option>option6</option>
                      <option>option7</option>
                    </select>
                  </div>
                  <div className="upper_filter_parts_users">
                      <select>
                          <option>Vulnerability</option>
                          <option>option1</option>
                          <option>option2</option>
                          <option>option3</option>
                          <option>option4</option>
                          <option>option5</option>
                          <option>option6</option>
                          <option>option7</option>
                        </select>
                  </div>
                  <div className="upper_filter_parts_users">
                      <select>
                          <option>Date(Assigned)</option>
                          <option>option1</option>
                          <option>option2</option>
                          <option>option3</option>
                          <option>option4</option>
                          <option>option5</option>
                          <option>option6</option>
                          <option>option7</option>
                        </select>
                  </div>
                  <div className="upper_filter_parts_users">
                      <select>
                          <option>Risks</option>
                          <option>option1</option>
                          <option>option2</option>
                          <option>option3</option>
                          <option>option4</option>
                          <option>option5</option>
                          <option>option6</option>
                          <option>option7</option>
                        </select>
                  </div>
                  <div className="upper_filter_parts_users">
                    <select>
                        <option>Status</option>
                        <option>option1</option>
                        <option>option2</option>
                        <option>option3</option>
                        <option>option4</option>
                        <option>option5</option>
                        <option>option6</option>
                        <option>option7</option>
                      </select>
                </div>
                  <div className="upper_filter_parts_users">
                      <button className="filter_btn_assign"><i className="fa fa-filter" aria-hidden="true" style={{color: "white"}}></i> Apply Filter</button>
                  </div>
                  </div>
              </div>
  
                 
            </div>
            <div className="details_filter_grid_users"> 
              <div className="top_heading_filter_users">
              <div className="top_heading_title_filter_users">
                Users Details
              </div>
              <div className="top_heading_mid_filter_users"></div>
              <div className="top_heading_action_filter_users">
                  <button className="add_btn add_new" onClick={this.opennew_assign} type="submit"><i className="fa fa-plus" aria-hidden="true" style={{color: "white"}}></i> Add Tasks</button>
                  <button className="action_icons_filter_users"><i className="fa fa-download" style={{fontSize: "1.2vw"}} aria-hidden="true"></i></button>
  
               </div>
            </div>
            <div className="filter_control">
                 <div className="controller">
                   <label> Show </label> 
                   <input  placeholder="20" min="20" type="number"/>
                  <label> entries </label>
                 </div>
                
            </div>  
            <div className="details_tabel_users">
              <table id="dataTable_users">
                <thead>
                  <tr>
                  <th>Serial id</th>
                   <th>Task id</th>
                   <th>Issue id</th>
                   <th>Assigned to</th>
                   <th>Risks Rating</th>
                   <th>Assgin date</th>
                   <th>Asset type</th>
                   <th>Vulnerability</th>
                   <th>Severity</th>
                   <th>Remediation action</th>
                   <th>Residual Risk</th>
                   <th>Evidences</th>
                   <th>Status</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
               {this.renderTableData()}
              </tbody>
             </table>
            </div>
          </div>
        </div>
  </div>
  {this.state.open_asset && <HiddenAssets/>}
  </div>
  </Fragment>
    );
  }
}



AdminDashboard.propTypes = {
  
  auth: PropTypes.object.isRequired,
  users:PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  users:state.users

});
export default connect(
  mapStateToProps,
)(AdminDashboard);