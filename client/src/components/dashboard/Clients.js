import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbardash from "../layout/NavbarDashboard";

import { Link, NavLink} from "react-router-dom";
import SideNavbar from "../layout/sideSuperAdminNavbar";
import HiddenClients from "../layout/AddClients";
import DeactivateClient from "../layout/DeactivateClient";

class Client extends Component {
   
  constructor(props){
    super(props)
    this.state = {
      showclientform:false,
      openDeactivateform:false,
      client_details : [
        { client_id: 1,serial_id:1, cleint_name: 'Client1', client_email: 'hnen@gmal.com', organization: 'XYZ',branch:'Nww',phone_no:'0000000000',no_of_projects:'11',status:'open' },
     ],
  }
}
onshowtoogle_client = e => {
  e.preventDefault();
  const {showclientform }=this.state;
  this.setState({showclientform:true});
}; 
openDeactivate = e => {
  e.preventDefault();
  const {openDeactivateform }=this.state;
  this.setState({openDeactivateform:true});
}; 
  renderclientData() {
    return this.state.client_details.map((client_details, index) => {
       const { client_id, serial_id, cleint_name , client_email, organization , branch,phone_no,no_of_projects,status}= client_details
       return (
          <tr key={client_id}>
             <td>{serial_id}</td>
             <td><Link to="/clientProfile">{cleint_name}</Link></td>
             <td>{client_email}</td>
             <td>{organization}</td>
             <td>{branch}</td>
             <td>{phone_no}</td>
             <td>{no_of_projects}</td>
             <td>{status}</td>
             <td className="actions_play_c"><i className="fa fa-play" aria-hidden="true" ></i>
                <ul className="option_action_paly_c">
                    <Link to='/profileEdit'><li>Modify</li></Link>
                    <Link to="/tasks"><li>Tasks</li></Link>
                    <Link to="/reports"><li>Reports</li></Link>
                    <Link to='/clientProfile'><li>View Client</li></Link>
                </ul>
             </td>
          </tr>
       )
    })
 }

 
render() {
    
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
                           <p>Clients Accounts - Super Administrator</p>
                       </div>
                       <div className="col_dash_client_inner_action">
                          <button className="see_acc_btn_see">See Account Report</button>
                          <button className="see_acc"><i className="fa fa-download" aria-hidden="true" style={{fontSize: "1.4vw"}}></i></button>
                       </div>
                   </div>
          </div>
          
          <div className="col_dash_2_90_client_param">
                <div className="client_param">
                    <div className="client_param_title">Recent Clients
                        <br/><span style={{fontSize: ".7vw", color: "#ff0000"}}>(This month)</span>
                    </div>
                    <div className="client_param_value"><p>45</p></div>
                </div>
                <div className="client_param">
                    <div className="client_param_title">Total Clients</div>
                    <div className="client_param_value"><p>456</p></div>
                </div>
                <div className="client_param">
                    <div className="client_param_title"><input type="file" size="60"  /></div>
                    <div className="client_param_value"><button className="btn_upload_file_client" onClick="myFunction()">Upload</button></div>
                </div>
                <div className="client_param">
                    <div className="client_param_title">Deactivate Clients</div>
                    <div className="client_param_value"><button className="btn_upload_file_client" onClick={this.openDeactivate}>Deactivate</button></div>
                </div>
          </div>
          <div className="col_dash_2_90_client_filter">
            <div className="col_dash_2_90_client_filter_inner">
                <div className="upper">
                    <div className="upper_filter_parts">
                        <input type="number" aria-valuemin="0" placeholder="Id Number" minlength="0" min="0"/>
                    </div>
                    <div className="upper_filter_parts"> 
                        <input type="date" aria-valuemin="0" />     
                    </div>
                    <div className="upper_filter_parts">
                        <select>
                            <option>Organization</option>
                            <option>option1</option>
                            <option>option2</option>
                            <option>option3</option>
                            <option>option4</option>
                            <option>option5</option>
                            <option>option6</option>
                            <option>option7</option>
                          </select>
                    </div>
                    <div className="upper_filter_parts">
                        <select>
                            <option>Location</option>
                            <option>option1</option>
                            <option>option2</option>
                            <option>option3</option>
                            <option>option4</option>
                            <option>option5</option>
                            <option>option6</option>
                            <option>option7</option>
                          </select>
                    </div>
                    <div className="upper_filter_parts">
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
                    <div className="upper_filter_parts">
                        <button className="filter_btn"><i className="fa fa-filter" aria-hidden="true" style={{color: "white"}}></i> Apply Filter</button>
                    </div>
                </div>
                <div className="lower">
                    <button className="letter_filter">A</button>
                    <button className="letter_filter">B</button>
                    <button className="letter_filter">C</button>
                    <button className="letter_filter">D</button>
                    <button className="letter_filter">E</button>
                    <button className="letter_filter">F</button>
                    <button className="letter_filter">G</button>
                    <button className="letter_filter">H</button>
                    <button className="letter_filter">I</button>
                    <button className="letter_filter">J</button>
                    <button className="letter_filter">K</button>
                    <button className="letter_filter">L</button>
                    <button className="letter_filter">M</button>
                    <button className="letter_filter">N</button>
                    <button className="letter_filter">O</button>
                    <button className="letter_filter">P</button>
                    <button className="letter_filter">Q</button>
                    <button className="letter_filter">R</button>
                    <button className="letter_filter">S</button>
                    <button className="letter_filter">T</button>
                    <button className="letter_filter">U</button>
                    <button className="letter_filter">V</button>
                    <button className="letter_filter">W</button>
                    <button className="letter_filter">X</button>
                    <button className="letter_filter">Y</button>
                    <button className="letter_filter">Z</button>
                </div>
                <div className="details_filter_grid_client"> 
                    <div className="top_heading_filter_client">
                    <div className="top_heading_title_filter_client">
                      Clients Details
                    </div>
                    <div className="top_heading_mid_filter_client"></div>
                    <div className="top_heading_action_filter_client">
                        <button className="add_btn add_new" onClick={this.onshowtoogle_client}><i className="fa fa-plus" aria-hidden="true" style={{color: "white"}}></i> Add Clients</button>
                        <button className="action_icons_filter_client"><i className="fa fa-download" style={{fontSize: "1.2vw"}} aria-hidden="true"></i></button>

                     </div>
                  </div>
                  <div className="filter_control_c">
                       <div className="controller_c">
                         <label> Show </label> 
                         <input  placeholder="20" min="20" type="number"/>
                        <label> entries </label>
                       </div>
                  </div>
                  <div className="details_tabel_client">
                    <table id="dataTable">
                      <thead>
                        <tr>
                         <th>Id</th>
                         <th>Client Name</th>
                         <th>Client email</th>
                         <th>Organization</th>
                         <th>Location</th>
                         <th>Phone</th>
                         <th>No of Projects</th>
                         <th>Status</th>
                         <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                     {this.renderclientData()} 
                    </tbody>
                   </table>
                  </div>
                </div>
            </div>
          </div>
        {this.state.showclientform && <HiddenClients/>}
      </div>
    </div> 
  {this.state.openDeactivateform && <DeactivateClient/>}

  </div>

  </Fragment>
    );
  }
}

Client.propTypes = {
  auth: PropTypes.object.isRequired,
  users:PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  users:state.users

});
export default connect(
  mapStateToProps,
)(Client);