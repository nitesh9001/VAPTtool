import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbardash from "../layout/NavbarDashboard";
import { Link, NavLink} from 'react-router-dom';
import AdminSideNav from "../layout/AdminSideNav";
import AdminNavbar from "../layout/AdminNavbar";
import { Tabs ,TabList,TabPanel,Tab} from "react-tabs";
class AdminTasks extends Component {
   
  constructor(props){
    super(props)
    this.state = {
        tasks_details : [
            { tasks_id:1, serial_id:1, issue_id:45,assigned_to:"Nxu" ,admin_email:"asiuhd@bfjh.com", risks_rating:+8, assgin_date:"15/12/19" , asset_type:"laptop", vulnearbility:"high",severity:"high",remediation:"update",project_admin:"Cybe",residual_risk:"hhfg",evidences:'',status:"open",action:""}
         ],
  }
}
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

 
render() {
    const { user } = this.props.auth;
return (
  <Fragment>
  <div className="col_dash">
 <AdminSideNav/>
 <div className="dash_row_90">
  <div className="row_dash_2">
  <AdminNavbar />
  </div>
  <div className="col_dash_2_90_u" id="blur_back">
            <div className="col_dash_users">
                     <div className="col_dash_users_inner">
                         <div className="col_dash_users_inner_head">
                             <p>Tasks</p>
                         </div>
                     </div>
            </div>
    <Tabs>
       <TabList className="col_dash_2_80_u_toogle">
           <Tab className="col_toggle_one">
           <button className="tablinks">Tasks Assigned</button>
           </Tab>
           <Tab className="col_toggle_one">
           <button className="tablinks" >Add New Task</button>
           </Tab>
       </TabList>
       <TabPanel id="Task" className="tabcontent">
                <div className="assets_head">
                    <p>Tasks Assigned</p>
                </div>
                <div className="assets_add_new_admin_list">
                    <div className="assets_add_new_admin_list_filter">
                      <div className="upper_users">
                        <div className="upper_filter_parts_users">
                          <input type="number" aria-valuemin="0" placeholder="Task Id" minlength="0" min="0"/>
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
                              <option>Projects</option>
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
                    <div className="details_filter_grid_users_admin"> 
                      <div className="top_heading_filter_users">
                      <div className="top_heading_title_filter_users">
                        Assets List
                      </div>
                      <div className="top_heading_mid_filter_users"></div>
                      <div className="top_heading_action_filter_users">
                          <button className="action_icons_filter_users" style={{float:"right"}}><i className="fa fa-download" style={{fontSize: "1.2vw"}} aria-hidden="true"></i></button>
                       </div>
                    </div>
                    <div className="filter_control">
                         <div className="controller">
                           <label> Show </label> 
                           <input  placeholder="20" min="20" type="number"/>
                          <label> entries </label>
                         </div>
                    </div>
                    <div className="details_tabel_asset_list">
                      <table id="dataTable_asset_list">
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
       </TabPanel>
       <TabPanel  id="new" className="tabcontent">
                <div className="new_head">
                    <p>Assign Tasks</p>
                </div>
                <div className="admin_add_asign_unwork"  id="admin_add_asign_unwork">
                       <div className="main_admin_add_asign_unwork_inner">
                        <form>
                          <li>
                            <label>Task ID</label><br/>
                            <input type="text" placeholder="Task ID"/>
                          </li>
                          <li>
                            <label>Project Id</label><br/>
                            <select aria-multiselectable="false">
                              <option>--Project id--</option>
                              <option>Assidned1</option>
                              <option>Assidned1</option>
                              <option>Assidned1</option>
                              <option>Assidned1</option>
                              <option>Assidned1</option>
                              <option>Assidned1</option>
                              <option>Assidned1</option>
                            </select>
                          </li>
                          <li>
                            <label>Assigned to</label><br/>
                            <select aria-multiselectable="false">
                              <option>Assidned1</option>
                              <option>Assidned1</option>
                              <option>Assidned1</option>
                              <option>Assidned1</option>
                              <option>Assidned1</option>
                              <option>Assidned1</option>
                              <option>Assidned1</option>
                              <option>Assidned1</option>
                            </select>
                          </li>
                          <li>
                            <label>Risk</label><br/>
                            <input type="text" placeholder="Risk"/>
                          </li>
                          <li>
                            <label>Vulnerablity</label><br/>
                            <input type="text" placeholder="Vulnerablity"/>
                          </li>
                          <li>
                            <label>Status</label><br/>
                            <select aria-multiselectable="false">
                              <option>-- Status --</option>
                              <option>Open</option>
                              <option>Closed</option>
                            </select>
          
                          </li>
                          <li>
                            <label>Assign Date</label><br/>
                            <input type="date" placeholder=" Date"/>
                            <input type="time" placeholder=" Time"/>
                          </li>
                          <li>
                            <label>Assets</label><br/>
                            <select aria-multiselectable="false">
                              <option>--Asset type--</option>
                              <option>Asset1</option>
                              <option>Asset1</option>
                              <option>Asset1</option>
                              <option>Asset1</option>
                              <option>Asset1</option>
                              <option>Asset1</option>
                            </select>
                          </li>
                          <li>
                            <label>Implementation Notes</label><br/>
                          <textarea name="" id="" cols="50" rows="5" placeholder="Implementation notes" ></textarea>
                          </li>
                          <li>
                            <label>
                               <input type="checkbox" name="" id="yourBox"/>Send email assignd to(Multiple assign email sepreated by ' , ' )
                            </label><br/>
                             <input type="email" placeholder="Enter Assigne email" id="yourText" disabled/>
                          </li>
                          <li>
                              <div className="fixed_btn_assign"><button type="submit">Submit</button></div>
                          </li>
                        </form>
                       </div>
                </div>
       </TabPanel>
    </Tabs>
          </div> 
  
  </div>
  </div>
  

  </Fragment>
    );
  }
}


AdminTasks.propTypes = {
  
  auth: PropTypes.object.isRequired,
  users:PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  users:state.users

});
export default connect(
  mapStateToProps,
)(AdminTasks);