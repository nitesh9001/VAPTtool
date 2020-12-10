import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbardash from "../layout/NavbarDashboard";

import { Link, NavLink} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SideNavbar from "../layout/sideSuperAdminNavbar";
import HiddenAssets from "../layout/AddTasks";

class Tasks extends Component {
   
  constructor(props){
    super(props)
    
    this.state = {
      open_addasset:false,
      tasks_details : [
        { tasks_id:1, serial_id:1, issue_id:45,assigned_to:"Nxu" ,admin_email:"asiuhd@bfjh.com", risks_rating:+8, assgin_date:"15/12/19" , asset_type:"laptop", vulnearbility:"high",severity:"high",remediation:"update",project_admin:"Cybe",residual_risk:"hhfg",evidences:'',status:"open",action:""}
     ],
     
  }
}
onshowtoogle_asset = e => {
  e.preventDefault();
  const {open_addasset }=this.state;
  this.setState({open_addasset:true})
};
  renderTaskData() {
    return this.state.tasks_details.map((tasks_details, index) => {
       const { tasks_id, serial_id, assigned_to ,issue_id, risks_rating, assgin_date , asset_type, vulnearbility,severity,remediation,project_admin,residual_risk,evidences,status}= tasks_details
       return (
          <tr key={tasks_id}>
             <td>{serial_id}</td>
             <td><Link to='/usersProfile'>{assigned_to}</Link></td>
             <td>{risks_rating}</td>
             <td>{assgin_date}</td>
             <td>{asset_type}</td>
             <td><Link>{issue_id}</Link></td>
             <td><Link>{project_admin}</Link></td>
             <td>{status}</td>
             <td className="actions_play_c"><i className="fa fa-play" aria-hidden="true" ></i>
                <ul className="option_action_paly_c">
                   <li>Notify</li>
                   <li>Download Evidences</li>
                   <Link to="/tasksDetails"><li>Reassign Task</li></Link>
                   <Link to="/tasksDetails"><li>Delete Task</li></Link>
                   <Link to="/tasksDetails"><li>View Task</li></Link>
                </ul>
             </td>
          </tr>
       )
    })
 }

 render_open_Task_Data() {
    return this.state.tasks_details.map((tasks_details, index) => {
       const { tasks_id, serial_id, assigned_to , risks_rating, assgin_date , asset_type,severity,project_admin,residual_risk,evidences,status,issue_id}= tasks_details
       return (
          <tr key={tasks_id}>
             <td>{serial_id}</td>
             <td><Link to='/usersProfile'>{assigned_to}</Link></td>
             <td><Link>{project_admin}</Link></td>
             <td>{issue_id}</td>
             <td>{assgin_date}</td>
             <td>{asset_type}</td>
             <td>{severity}</td>
             <td>{residual_risk}</td>
             <td>{risks_rating}</td>
             <td>{status}</td>
             <td className="actions_play_c"><i className="fa fa-play" aria-hidden="true" ></i>
                <ul className="option_action_paly_c">
                   <li>Download Evidences</li>
                   <Link to="/tasksDetails"><li>Reassign Task</li></Link>
                   <Link to="/tasksDetails"><li>Delete Task</li></Link>
                   <Link to="/tasksDetails"><li>View Task</li></Link>
                </ul>
             </td>
          </tr>
       )
    })
 }

 render_recent_complete_Task_Data() {
    return this.state.tasks_details.map((tasks_details, index) => {
       const { tasks_id, serial_id ,assigned_to,issue_id, risks_rating , asset_type, vulnearbility,project_admin,admin_email,status}= tasks_details
       return (
          <tr key={tasks_id}>
             <td>{serial_id}</td>
             <td>{project_admin}</td>
             <td>{admin_email}</td>
             <td>
               {issue_id}
             </td>
             <td><Link to='/usersProfile'>{assigned_to}</Link></td>
             <td>{asset_type}</td>
             <td>{vulnearbility}</td>
             <td>{risks_rating}</td>
             <td>{status}</td>
             <td className="actions_play_c"><i className="fa fa-play" aria-hidden="true" ></i>
                <ul className="option_action_paly_c">
                   <li>Notify</li>
                   <Link to="/tasksDetails"><li>Reassign Task</li></Link>
                   <Link to="/tasksDetails"><li>Delete Task</li></Link>
                   <Link to="/tasksDetails"><li>View Task</li></Link>
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
  <SideNavbar/>
  <div className="dash_row_90">
  <div className="row_dash_2">
  <Navbardash/>
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
                    <div className="users_param_value"><button  className="ass_asign_bnt" onClick={this.onshowtoogle_asset}>Assign Task</button>
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
          <Tab style={{width: "50%",height: "100%"}}><button className="btn_user_assigned" id="btn_user_project" ><p>Recent Completed Task</p></button></Tab>
          <Tab style={{width: "50%",height: "100%"}}>
          <button className="btn_user_unassigned" id="btn_user_c_projects"><p>Recent Assigned Task</p></button>
          </Tab>
          </TabList>

          <TabPanel style={{width:"100%", height:"auto", paddingBottom:"0vh"}}>
          <table className="details_tabel_projects_table">
          <thead>
          <tr>
            <th>Id</th>
            <th>Assign to</th>
            <th>Admin Id</th>
            <th>Issue Id</th>
            <th>Assign Date</th>
            <th>Assets</th>
            <th>Severity</th>
            <th>Risk rating</th>
            <th>Residual Risk</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {this.render_open_Task_Data()}
          </tbody>
          </table>
          </TabPanel>
          <TabPanel style={{width:"100%", height:"auto", paddingBottom:"0vh"}} >
          <table  className="details_tabel_projects_table">
          <thead>
          <tr>
          <th>Id</th>
          <th>Admin</th>
          <th>Admin email</th>
          <th>Issue Id</th>
          <th>Assigend To</th>
          <th>Risk Rating</th>
          <th>Assets</th>
          <th>Vulnerability</th>
          <th>Status</th>
          <th>Action</th>
          </tr>
          </thead>
          <tbody>
           {this.render_recent_complete_Task_Data()}
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
                        <option>Project admin</option>
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
              Tasks Details
            </div>
            <div className="top_heading_mid_filter_users"></div>
            <div className="top_heading_action_filter_users">
                <button className="add_btn add_new" onClick={this.onshowtoogle_asset} type="submit"><i className="fa fa-plus" aria-hidden="true" style={{color: "white"}}></i> Add Tasks</button>
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
          
          <div className="details_tabel_users_below">
            <table >
              <thead>
                <tr>
                 <th>Task id</th>
                 <th>Assigned to</th>
                 <th>Risks Rating</th>
                 <th>Assgin date</th>
                 <th>Asset type</th>
                 <th>Issue ID</th>
                 <th>Project Admin</th>
                 <th>Status</th>
                 <th>Action</th>
              </tr>
            </thead>
            <tbody>
               {this.renderTaskData()}   
            </tbody>
           </table>
          </div>
        </div>
    </div>
  </div>
  {this.state.open_addasset && <HiddenAssets/>}
  </div>
  </Fragment>
    );
  }
}

Tasks.propTypes = {
  auth: PropTypes.object.isRequired,
  users:PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  users:state.users

});
export default connect(
  mapStateToProps,
)(Tasks);