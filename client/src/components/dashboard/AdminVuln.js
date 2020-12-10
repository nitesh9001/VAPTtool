import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, NavLink} from 'react-router-dom';
import AdminSideNav from "../layout/AdminSideNav";
import AdminNavbar from "../layout/AdminNavbar";
import { Tabs ,TabList,TabPanel,Tab} from "react-tabs";
import HiddenForm from '../layout/HiddenDownReport';
import UploadReport from '../layout/HiddenUploadReport';

class AdminVul extends Component {
   
  constructor(props){
    super(props)
    this.state = {
      openDownloadform:false,
      openUploadform:false,
      project_details : [
        { project_id:1, serial_id:1,project_admin_id:"4545", project_name:"Nxu" , risks_status:"high",risk_rating:"high",vulnerability:"hg" ,assgin_date:"15/1/15", asset:"lpatop",vapt_report_id:"vg56",project_admin:"Cybe",reports:'',status:"open",action:""}
     ], 
  }
}
renderprojectData() {
  return this.state.project_details.map((project_details, index) => {
     const { project_id,asset, serial_id, project_name,project_admin_id, risks_status, assgin_date,vapt_report_id,project_admin,reports,status,action}= project_details
     return (
        <tr key={project_id}>
           <td>{serial_id}</td>
           <td>{project_name}</td>
           <td><Link to="/adminProfile">{project_admin_id}</Link></td>
           <td>{project_admin}</td>
           <td>{assgin_date}</td>
           <td>{risks_status}</td>
           <td>{vapt_report_id}</td>
           <td><Link to="/adminIssueDetails">See</Link></td>
           <td>{status}</td>
           <td className="actions_play_c"><i className="fa fa-play" aria-hidden="true" ></i>
              <ul className="option_action_paly_c">
                 <li>Notify</li>
                 <li onClick={this.onclickReport} className="action_icons_filter_users">Download Report</li>
                 <Link to="/adminTasksDetails"><li>Reassign Task</li></Link>
                 <Link to="/adminTasksDetails"><li>Delete Task</li></Link>
                 <Link to="/adminTasksDetails"><li>View Task</li></Link>
              </ul>
           </td>
        </tr>
     )
  })
}
renderreportdata(){
  return this.state.project_details.map((project_details,index)=>{
    const {project_id,serial_id,project_name,risks_status,vapt_report_id,status}=project_details
    return(
            <tr key={project_id}>
              <td>{serial_id}</td>
              <td>{project_id}</td>
              <td>{project_name}</td>
              <td>{risks_status}</td>                      
              <td>{vapt_report_id}</td>
              <td><button className="action_icons_filter_users" onClick={this.openUplaod}> <i className="fa fa-upload" style={{fontSize: "1vw"}} aria-hidden="true"></i></button></td>
              <td>{status}</td>
              <td className="actions_play_al"><i className="fa fa-play" aria-hidden="true" ></i>
              <ul className="option_action_paly_al">
              <li onClick={this.openDownload}>Download Reports</li>
              <li onClick={this.openUplaod}>Upload Reports</li>
              <Link to="/adminProjectDetails"><li>Delete Reports</li></Link>
              <Link to="/adminProjectDetails"><li>View Project</li></Link>
              </ul>
              </td>
            </tr>
      )
    })
}
 openDownload=(e)=>{
   e.preventDefault();
   const {openDownloadform}=this.state
   this.setState({
     openDownloadform:true
   })

 }
 openUplaod=(e)=>{
  e.preventDefault();
  const {openUploadform}=this.state
  this.setState({
    openUploadform :true
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
                             <p>Vulnerablity</p>
                         </div>
                     </div>
            </div>
    <Tabs>
       <TabList className="col_dash_2_80_u_toogle">
           <Tab className="col_toggle_one">
           <button className="tablinks">VAPT Reports</button>
           </Tab>
           <Tab className="col_toggle_one">
           <button className="tablinks" >Add New VAPT Reports</button>
           </Tab>
       </TabList>
       <TabPanel id="Task" className="tabcontent">
                <div className="assets_head">
                    <p>VAPT Reports</p>
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
                        VAPT Report List
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
                        <th>Serial id</th>
                        <th>Project id</th>
                        <th>Project Name</th>
                        <th>Project Admin Id</th>
                        <th>Project Admin</th>
                        <th>Date</th>
                        <th>Risk Status</th>
                        <th>See Issue</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                      </thead>
                      <tbody>
                         {this.renderprojectData()}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                      </tbody>
                     </table>
                    </div>
                  </div>
                </div>
       </TabPanel>
       <TabPanel  id="new" className="tabcontent">
            <Tabs>
              <TabList className="col_toggle_two_admin_project">
                <Tab className="col_toggle_two">
                <button className="prolinks" >Add New Project</button>        
                </Tab>
                <Tab className="col_toggle_two">
                <button className="prolinks" >Add Reports to Existing Project</button>        
                </Tab>
              </TabList>
              <TabPanel className="procontent">
                      <div className="newProject_inner_form">
                        <form>
                          <div className="feild_for_new_project">
                            <label>Project ID</label>
                            <input placeholder="Project Id" type="text" disabled/>
                          </div>
                          <div className="feild_for_new_project">
                            <label>Project Name</label>
                            <input placeholder="Project Name" type="text" />
                          </div>
                          <div className="feild_for_new_project">
                            <label>Asset Tagging</label><br/>
                          <textarea >Asset Selected</textarea><br/>
                            <a className="btn_assets_tagging">Select Asset tag</a>
                        <div className="panel">
                            <table className="panel_add_new">
                              <thead>
                                <tr>
                                  <td>Select</td>
                                  <td>Asset Id</td>
                                  <td>Asset Type</td>
                                  <td><a href="#">Add Assets</a></td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td><input type="checkbox"/></td>
                                  <td>145122</td>
                                  <td>Sevrer</td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                          </div>
                          <div className="feild_for_new_project">
                            <label>Upload Report</label>
                            <input placeholder="Uplaod Report" type="file" />
                          </div>
                          <div className="feild_for_new_project">
                            <label>Download Format CSV Report</label>
                            <button placeholder="Fomrat" type="file" className="report_format_down">Downlaod</button>
                          </div>
                          <button className="create_project">Create Project</button>
                        </form>
                      </div>
              </TabPanel>
              <TabPanel className="procontent">
                  <div className="new_head">
                      <p>Add New VAPT Reports</p>
                  </div>
                  <div className="vul_add_new_admin_list">
                      <div className="vul_add_new_admin_list_filter">
                        <div className="upper_users">
                          <div className="upper_filter_parts_users">
                            <input type="number" aria-valuemin="0" placeholder="Project Id" minlength="0" min="0"/>
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
                                <option>Project Name</option>
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
                                <option>Date(Issued)</option>
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
                          VAPT Reports List
                        </div>
                        <div className="top_heading_mid_filter_users"></div>
                        <div className="top_heading_action_filter_users">
                            <button className="action_icons_filter_users" style={{float: "right"}}><i className="fa fa-download" style={{fontSize: "1.2vw"}} aria-hidden="true"></i></button>
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
                                <th>Serial Id</th>
                                <th>Project Id</th>
                                <th>Project Name</th>
                                <th>Risk status</th>
                                <th>VAPt Report ID</th>
                                <th>Uplaod Reports</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                        </thead>
                        <tbody>
                        {this.renderreportdata()}
                        </tbody>
                     </table>
                 </div>
               </div>
             </div>   
           </TabPanel>
         </Tabs>
       </TabPanel>
    </Tabs>
   </div>
   {this.state.openDownloadform && <HiddenForm/>}
    {this.state.openUploadform && <UploadReport/>} 
  </div>
  </div>
  </Fragment>
    );
  }
}



AdminVul.propTypes = {
  
  auth: PropTypes.object.isRequired,
  users:PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  users:state.users

});
export default connect(
  mapStateToProps,
)(AdminVul);