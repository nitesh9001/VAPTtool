import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbardash from "../layout/NavbarDashboard";

import { Link, NavLink} from 'react-router-dom';
import HiddenForm from '../layout/HiddenDownReport'
import UploadReport from '../layout/HiddenUploadReport'
import SideNavbar from "../layout/sideSuperAdminNavbar";

class Reports extends Component {
   
  constructor(props){
    super(props)
    this.onshowtoogle=this.onshowtoogle.bind(this)
    this.state = {
      showhidden:false,
      showdown:false,
      report_details : [
        { project_id:1, serial_id:1, risk_rating:"high" ,assgin_date:"15/1/15", asset:"lpatop",vulnerability:'dd',project_admin:"dkf",residual_risk:"C",reports:'',upload_reports:'',evidences:"",status:"open",action:""}
     ],
  }
}
  onshowtoogle = e => {
    e.preventDefault();
    const {showhidden }=this.state;
    this.setState({showhidden:true})
  };
  onshowtooglereport = e => {
    e.preventDefault();
    const {showdown }=this.state;
    this.setState({showdown:true})
  };
 
  render_reportData() {
    return this.state.report_details.map((report_details, index) => {
       const { project_id, serial_id, risk_rating ,assgin_date, asset,vulnerability,project_admin,residual_risk,reports,upload_reports,evidences,status,action}= report_details
       return (
          <tr key={project_id}>
             <td>{serial_id}</td>
             <td><Link to="/projectDetails">{project_id}</Link></td>
             <td>{risk_rating}</td>
             <td>{assgin_date}</td>
             <td>{asset}</td>
             <td>{vulnerability}</td>
             <td><Link to="/clientProfile">{project_admin}</Link></td>
             <td>{residual_risk}</td>
             <td><button className="action_icons_filter_users" onClick={this.onshowtoogle} ><i className="fa fa-upload" style={{fontSize: "1vw"}} aria-hidden="true"></i></button></td>
             <td>{status}</td>
             <td className="actions_play_c"><i className="fa fa-play" aria-hidden="true" ></i>
                <ul className="option_action_paly_c">
                   <li onClick={this.onshowtooglereport}>Donwload Report</li>
                   <Link to="/tasks"><li>View Task</li></Link>
                   <Link to="/projects"><li>View Project</li></Link>
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
  <div className="col_dash_2_90_c" id="blur_back">
          <div className="col_dash_client">
                   <div className="col_dash_client_inner">
                       <div className="col_dash_client_inner_head">
                           <p>Reports</p>
                       </div>
                       <div className="col_dash_client_inner_action">
                          <button className="see_acc" style={{color: "white",background: "#17a2b8" ,borderRadius: "4px"}}>See Account Report</button>
                          <button className="see_acc"><i className="fa fa-download" aria-hidden="true" style={{fontSize: "1.4vw"}}></i></button>
                       </div>
                   </div>
          </div>
          <div className="col_dash_2_90_users_param">
            <div className="users_param">
                <div className="users_param_title">Total Reports 
                </div>
                <div className="users_param_value"><p>900</p>
                </div>
            </div>
            <div className="users_param">
                <div className="users_param_title">Active Reports
                </div>
                <div className="users_param_value"><p>405</p>
                </div>
            </div>
            <div className="users_param">
              <div className="users_param_title">Returned Report
              </div>
              <div className="users_param_value"><p>5</p>
              </div>
            </div>
            <div className="users_param">
                <div className="users_param_title">Completed Reports
                </div>
                <div className="users_param_value"><p>45</p>
                </div>
            </div>
            </div>
            <div className="report_section">
              <div className="report_section_heading"><p>Upload Report</p></div>
              <div className="report_section_content">
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
                      <button className="filter_btn_assign"><i className="fa fa-search" aria-hidden="true" style={{color: "white"}}></i> Search</button>
                  </div>               
                  </div>          
               </div>
               <div className="reports_det">
                  <div className="details_tabel_users_repo">
                    <table id="dataTable_users_repo" border="1">
                      <thead>
                        <tr>
                         <th>Serial No</th>
                         <th>Project id</th>
                         <th>Risks Rating</th>
                         <th>Date</th>
                         <th>Asset type</th>
                         <th>Vulnerability</th>
                         <th>Project Admin</th>
                         <th>Residual Risk</th>
                         <th>Upload reports</th>
                         <th>Status</th>
                         <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                       {this.render_reportData()}
                       {this.render_reportData()}
                    </tbody>
                   </table>
                  </div>
                  <div className="by_name_reports">
                    <div className="by_name_reports_forms">
                      <select>
                        <option>Project Id</option>
                        <option>option1</option>
                      </select>
                    </div>
                 
                    <div className="by_name_reports_forms">
                      <select>
                        <option>Project admin</option>
                        <option>option1</option>
                      </select>
                    </div>
                    
                    <div className="by_name_reports_forms">
                      <input type="file" placeholder="Uplaod Reports"/>
                    
                    </div>
                    <div className="by_name_reports_forms">
                      <button className="filter_btn_assign"><i className="fa fa-upload" aria-hidden="true" style={{color: "white"}}></i> Upload</button>
                    </div>              
                  </div>
                </div>
                </div>
              </div> 
        </div>
        {this.state.showdown && <HiddenForm/>}
        {this.state.showhidden && <UploadReport/>}
     </div>  
  </div>
  </Fragment>
    );
  }
}




Reports.propTypes = {
  auth: PropTypes.object.isRequired,
  users:PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  users:state.users

});
export default connect(
  mapStateToProps,
)(Reports);