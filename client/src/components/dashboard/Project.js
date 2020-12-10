import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HiddenProject from '../layout/New_project_add'
import Navbardash from "../layout/NavbarDashboard";

import { Link} from 'react-router-dom';
import UploadReport from '../layout/HiddenUploadReport'
import HiddenForm from '../layout/HiddenDownReport'
import SideNavbar from "../layout/sideSuperAdminNavbar";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Project extends Component {
   
  constructor(props){
    super(props)
    this.onshowtoogle_project=this.onshowtoogle_project.bind(this)
    this.state = {
      showhidden_add_project:false,
   showhidden_report_project:false,
   showhidden_upload:false,
      project_details : [
        { project_id:1, serial_id:1,project_admin_id:"4545", project_name:"Nxu" , risks_status:"high",risk_rating:"high",vulnerability:"hg" ,assgin_date:"15/1/15", asset:"lpatop",vapt_report_id:"vg56",project_admin:"Cybe",reports:'',status:"open",action:""}
     ],  
  }
}
onshowtoogle_project = e => {
  e.preventDefault();
  const {showhidden_add_project }=this.state;
  this.setState({showhidden_add_project:true})
};
 onclickReport=e=>{
   e.preventDefault();
   const {showhidden_report_project }=this.state;
   this.setState({showhidden_report_project:true})
}
onclickUpload=e=>{
  e.preventDefault();
  const {showhidden_upload }=this.state;
  this.setState({showhidden_upload:true})
}
  renderprojectData() {
    return this.state.project_details.map((project_details, index) => {
       const { project_id,asset, serial_id, project_name,project_admin_id, risks_status, assgin_date,vapt_report_id,project_admin,reports,status,action}= project_details
       return (
          <tr key={project_id}>
             <td>{serial_id}</td>
             <td>{project_name}</td>
             <td><Link to="/clientProfile">{project_admin_id}</Link></td>
             <td>{project_admin}</td>
             <td>{assgin_date}</td>
             <td>{risks_status}</td>
             <td>{vapt_report_id}</td>
             <td><Link to="/issueDetails">See</Link></td>
             <td>{status}</td>
             <td className="actions_play_c"><i className="fa fa-play" aria-hidden="true" ></i>
                <ul className="option_action_paly_c">
                   <li>Notify</li>
                   <li onClick={this.onclickReport} className="action_icons_filter_users">Download Report</li>
                   <Link to="/tasksDetails"><li>Reassign Task</li></Link>
                   <Link to="/tasksDetails"><li>Delete Task</li></Link>
                   <Link to="/tasksDetails"><li>View Task</li></Link>
                </ul>
             </td>
          </tr>
       )
    })
 }

 renderproject_newData() {
    return this.state.project_details.map((project_details, index) => {
       const {project_id,asset, serial_id, project_name,project_admin_id, risks_status, assgin_date,vapt_report_id,project_admin,status,action}= project_details
       return (
          <tr key={project_id}>
             <td>{serial_id}</td>
             <td>{project_name}</td>
             <td><Link to="/clientProfile">{project_admin_id}</Link></td>
             <td>{project_admin}</td>
             <td>{assgin_date}</td>
             <td>{asset}</td>
             <td>{risks_status}</td>
             <td><Link to="/issueDetails">See</Link></td>
             <td>{status}</td>
             <td className="actions_play"><i className="fa fa-play" aria-hidden="true" ></i>
            <ul className="option_action_paly">
            <li onClick={this.onclickReport} className="action_icons_filter_users">Download Report</li>
              <li onClick={this.onclickUpload}>Uplaod Reports</li>
               <Link to="/projectDetails"><li>Delete Projects</li></Link> 
               <Link to="/projectDetails"> <li>View Projects</li></Link>
            </ul>
            </td>
          </tr>
       )
    })
 }
 
 renderproject_oldData() {
    return this.state.project_details.map((project_details, index) => {
       const {project_id,asset, serial_id, project_name,project_admin_id, vulnerability, risk_rating,project_admin,status,action}= project_details
       return (
          <tr key={project_id}>
             <td>{serial_id}</td>
             <td>{project_name}</td>
             <td><Link to="/clientProfile">{project_admin_id}</Link></td>
             <td>{project_admin}</td>
             <td>{risk_rating}</td>
             <td>{asset}</td>
             <td>{vulnerability}</td>
             <td>{status}</td>
             <td className="actions_play"><i className="fa fa-play" aria-hidden="true" ></i>
                      <ul className="option_action_paly">
                        <li onClick={this.onclickUpload}>Uplaod Reports</li>
                          <Link to="/projectDetails"><li>Delete Projects</li></Link>
                          <Link to="/projectDetails"><li>View Projects</li></Link>
                      </ul></td>
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
  <div className="col_dash_2_90_c" id="blur_back">
          <div className="col_dash_client">
                   <div className="col_dash_client_inner">
                       <div className="col_dash_client_inner_head">
                           <p>Projects</p>
                       </div>
                       <div className="col_dash_client_inner_action">
                          <button className="see_acc" style={{color: "white",background: "#17a2b8",borderRadius: "4px"}}>See Account Report</button>
                          <button className="see_acc"><i className="fa fa-download" aria-hidden="true" style={{fontSize: "1.4vw"}}></i></button>
                       </div>
                   </div>
          </div>
          <div className="col_dash_2_90_users_param">
            <div className="users_param">
                <div className="users_param_title">Total Projects
                </div>
                <div className="users_param_value"><p>900</p>
                </div>
            </div>
            <div className="users_param">
                <div className="users_param_title">Ongoing Projects
                </div>
                <div className="users_param_value"><p>405</p>
                </div>
            </div>
            <div className="users_param">
                <div className="users_param_title">Add New
                </div>
                <div className="users_param_value"><button  className="ass_asign_bnt" onClick={this.onshowtoogle_project}>Add New</button>
                </div>
            </div>
            <div className="users_param">
                <div className="users_param_title">Completed Projects
                </div>
                <div className="users_param_value"><p>45</p>
                </div>
            </div>
      </div>
<div className="col_dash_2_90_users_project">
<Tabs  style={{ width: "100%",display: "block"}}>
      <TabList  style={{ width:"100%",height: "5vh", display: "flex"}} >
      <Tab style={{width: "50%",height: "100%"}}><button className="btn_user_assigned" id="btn_user_project" onclick="btn_user_projects()"><p>Recent Newly Projects</p></button></Tab>
      <Tab style={{width: "50%",height: "100%"}}>
      <button className="btn_user_unassigned" id="btn_user_c_projects"><p>Recent Completed Projects</p></button>
      </Tab>
      </TabList>
    <TabPanel style={{width:"100%", height:"auto", paddingBottom:"0vh"}}>
    <table  className="details_tabel_projects_table">
                <thead>
                  <tr>
                   <th>Serial No</th>
                   <th>Project Name </th>
                   <th>Admin Name Id</th>
                   <th>Admin Name </th>
                   <th>Date</th>
                   <th>Assets</th>
                   <th>Risk Status</th>
                   <th>See Issue</th>
                   <th>Status</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.renderproject_newData()}
              </tbody>
             </table>
    </TabPanel>
    <TabPanel style={{width:"100%", height:"auto", paddingBottom:"0vh"}} >
    <table  className="details_tabel_projects_table">
                <thead>
                  <tr>
                   <th>Id</th>
                   <th>Admin</th>
                   <th>Admin Id</th>
                   <th>Admin email</th>
                   <th>Risk Rating</th>
                   <th>Assets</th>
                   <th>Vulnerability</th>
                   <th>Status</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.renderproject_oldData()}
                </tbody>
             </table>
    </TabPanel>
  </Tabs>
</div>
      <div className="col_dash_2_90_task_filter">
        <div className="col_dash_2_90_task_filter_inner">            
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
            
            </select>
      </div>
        <div className="upper_filter_parts_users">
            <button className="filter_btn_assign"><i className="fa fa-filter" aria-hidden="true" style={{color: "white"}}></i> Apply Filter</button>
        </div>               
        </div>          
     </div>
     <div className="details_filter_grid_users"> 
      <div className="top_heading_filter_users">
      <div className="top_heading_title_filter_users">
        Projects Details
      </div>
      <div className="top_heading_mid_filter_users"></div>
      <div className="top_heading_action_filter_users">
          <button className="add_btn add_new" onClick={this.onshowtoogle_project} type="submit"><i className="fa fa-plus" aria-hidden="true" style={{color: "white"}}></i> Add Projects</button>
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
    
    <div className="details_tabel_projects_down">
      <table id="dataTable_users">
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
  {this.state.showhidden_report_project && <HiddenForm/>}
  {this.state.showhidden_add_project && <HiddenProject/>}
  {this.state.showhidden_upload && <UploadReport/>}

    </div>
    </div>
  </div>
  </Fragment>
    );
  }
}
Project.propTypes = {
  auth: PropTypes.object.isRequired,
  users:PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  users:state.users

});
export default connect(
  mapStateToProps,
)(Project);