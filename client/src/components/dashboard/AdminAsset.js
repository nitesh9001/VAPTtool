import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbardash from "../layout/NavbarDashboard";
import { Link, NavLink} from 'react-router-dom';
import AdminSideNav from "../layout/AdminSideNav";
import { Tabs, TabPanel ,Tab,TabList} from "react-tabs";
import HiddenAssets from '../layout/AddTasks';
import AdminNavbar from "../layout/AdminNavbar";

class AdminAsset extends Component {
   
  constructor(props){
    super(props)
    this.state = {
        openSelect:false,
        open_asset:false,
        asset_admin:[{
            serial_id:1,asset_id:44,asset_code:"b45d",project:"dfs",assigned_to:"ryu",risks_rating:"high",assgin_date:"15/10/2020",status:'open'        }]
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
    return this.state.asset_admin.map((asset_admin, index) => {
       const { serial_id,asset_id,asset_code,project,assigned_to,risks_rating,assgin_date,status} = asset_admin //destructuring
       return (
          <tr key={asset_id}>
             <td>{serial_id}</td>
             <td>{asset_id}</td>
             <td>{asset_code}</td>
             <td><Link to="/adminProjectDetails">{project}</Link></td>
             <td><Link to="/adminUserProfile">{assigned_to}</Link></td>
             <td>{risks_rating}</td>
             <td>{assgin_date}</td>
             <td>{status}</td>
             <td className="actions_play_admin"><i className="fa fa-play" aria-hidden="true" ></i>
              <ul className="option_action_paly_admin">
                <Link to="/"><li>View details</li></Link>
                <Link><li>Edit assets</li></Link>
                <Link><li>Delete assets</li></Link>
                <Link to="/adminProjectDetails"><li>View Project</li></Link>
               </ul>
             </td>
          </tr>
       )
    })
 }
 openSelect=e=>{
     e.preventDefault();
     const{openSelect}=this.state
     this.setState({
         openSelect:!openSelect
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
  <div className="col_dash_2_90_u" id="blur_back">
            <div className="col_dash_users">
                     <div className="col_dash_users_inner">
                         <div className="col_dash_users_inner_head">
                             <p>Assets</p>
                         </div>
                     </div>
            </div>
            <div className="col_dash_2_80_u_toogle">
            <Tabs  style={{ width: "100%",display: "block"}}>
          <TabList  style={{ width:"100%",height: "5vh", display: "flex"}} >
          <Tab style={{width: "50%",height: "100%"}}>
          <button className="btn_user_assigned" id="btn_user_project" ><p>Asset List</p></button></Tab>
          <Tab style={{width: "50%",height: "100%"}}>
          <button className="btn_user_unassigned" id="btn_user_c_projects"><p>Add New</p></button>
          </Tab>
          <Tab style={{width: "50%",height: "100%"}}>
          <button className="btn_user_unassigned" id="btn_user_c_projects"><p>Bulk Upload</p></button>
          </Tab>
          </TabList>
          <TabPanel className="tabcontent">
          <div className="assets_head">
                    <p>Assets List</p>
                </div>
                <div className="assets_add_new_admin_list">
                    <div className="assets_add_new_admin_list_filter">
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
                          <button className="add_btn add_new" onClick={this.opennew_assign} type="submit"><i className="fa fa-plus" aria-hidden="true" style={{color: "white"}}></i> Add Assets</button>
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
                    
                    <div className="details_tabel_asset_list">
                      <table id="dataTable_asset_list">
                        <thead>
                          <tr>
                          <th>Serial No</th>
                           <th>Asset Id</th>
                           <th>Asset Code</th>
                           <th>Project</th>
                           <th>Assigned to</th>
                           <th>Risks Rating</th>
                           <th>Assgin date</th>
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
          </TabPanel>
          <TabPanel  className="tabcontent">
          <Tabs style={{width:"100%"}}>
          <div className="new_head">
                    <p>Add New Assets</p>
                </div>
                <div className="assets_add_new_admin">
                    <div className="assets_add_new_admin_sel_op">
                      <label>Asset Type </label><br/>
                      <button className="accordion_drop" onClick={this.openSelect}>--select Asset Types-- </button>
                      {this.state.openSelect && 
                      <div className="slect_asset_type">
                          <TabList className="select_asset_type_list">
                          <Tab >
                          <button className="accordion_drop_inner" >Printers</button><br/>
                          </Tab>
                          <Tab>
                          <button className="accordion_drop_inner" >Laptop</button><br/>
                          </Tab>
                          <Tab>
                          <button className="accordion_drop_inner" >Servers</button><br/>
                          </Tab>
                          <Tab>
                          <button className="accordion_drop_inner" >Storage</button><br/>
                          </Tab>
                          <Tab>
                          <button className="accordion_drop_inner" >Voice Equipment</button><br/>
                          </Tab>
                          <Tab>
                          <button className="accordion_drop_inner" >WAN Equipment</button><br/>
                          </Tab>
                          <Tab>
                          <button className="accordion_drop_inner" >Network Equipment</button><br/>
                          </Tab>
                          <Tab>
                          <button className="accordion_drop_inner" >Desktop Inventory</button><br/>
                          </Tab>
                          <Tab>
                          <button className="accordion_drop_inner" >Information asset</button><br/>
                          </Tab>
                          </TabList>
                          <div className="asset_tab_content">
                          <TabPanel className="selcontent_display_asset">
                          <div id="Printer">
                      <div className="selcontent_printer">
                        <p>Printer Asset Form</p>
                        
                      </div>
                      <form className="form_add_new_admin_asset">
                        <center>
                          <table>
                            <tbody>
                              <tr>
                                <td><label>Site  </label></td>
                                <td><input type="text" placeholder="Site"/></td>
                              </tr>
                              <tr>
                                <td><label>Asset Code  </label></td>
                                <td><input type="text" placeholder="Asset Code" /></td>
                              </tr>
                              <tr>
                                <td><label>SRL No  </label></td>
                                <td><input type="text" placeholder="SRL NO"/></td>
                              </tr>
                              <tr>
                                <td><label>Brand  </label></td>
                                <td><input type="text" placeholder="Brand"/></td>
                              </tr>
                              <tr>
                                <td><label>User/Owner  </label></td>
                                <td><input type="text" placeholder="User / Owner"/></td>
                              </tr>
                              <tr>
                                <td><label>Department  </label></td>
                                <td><input type="text" placeholder="Department"/></td>
                              </tr>
                              <tr>
                                <td><label>Building/ Tower  </label></td>
                                <td><input type="text" placeholder="Building / Tower"/></td>
                              </tr>
                              <tr>
                                <td><label>Level  </label></td>
                                <td><input type="text" placeholder="Level"/></td>
                              </tr>
                              <tr>
                                <td><label>IP Address  </label></td>
                                <td><input type="text" placeholder="IP Address"/></td>
                              </tr>
                              <tr>
                                <td><label>Domain  </label></td>
                                <td><input type="text" placeholder="Domain"/></td>
                              </tr>
                              <tr>
                                <td><label>Po Ref  </label></td>
                                <td><input type="text" placeholder="Po Ref"/></td>
                              </tr>
                              <tr>
                                <td><label>Warrenty/ AMC  </label></td>
                                <td><input type="text" placeholder="Warrenty / AMC"/></td>
                              </tr>
                              <tr>
                                <td><label>Warrenty/ MC Expiry  </label></td>
                                <td><input type="text" placeholder="Warrenty / MC Expiry"/></td>
                              </tr>
                              <tr>
                                <td><label>Remarks  </label></td>
                                <td><input type="text" placeholder="Remarks"/></td>
                              </tr>
                              <tr>
                                <td><label>Last Checked On  </label></td>
                                <td><input type="text" placeholder="Last Checked On"/></td>
                              </tr>
                              <tr>
                                <td><label>Maintance Vendor  </label></td>
                                <td><input type="text" placeholder="Maintance Vendor"/></td>
                              </tr>
                              
                            </tbody>
  
                          </table>
                          <button className="admin_add_new_assets">Add New</button>
                        </center>
                        
                      </form>   
                    </div>
                          </TabPanel>
                          <TabPanel>
                          <div id="Laptop" className="selcontent">
                      <div className="selcontent_printer">
                        <p>Laptop Asset Form</p>
                        
                      </div>
                      <form className="form_add_new_admin_asset">
                        <center>
                          <table>
                            <tbody>
                             
                              <tr>
                                <td><label>Asset Code  </label></td>
                                <td><input type="text" placeholder="Asset Code" /></td>
                              </tr>
                              <tr>
                                <td><label>Location  </label></td>
                                <td><input type="text" placeholder="Location"/></td>
                              </tr>
                              <tr>
                                <td><label>Issued Date  </label></td>
                                <td><input type="text" placeholder="Issued Date"/></td>
                              </tr>
                              <tr>
                                <td><label>System Model  </label></td>
                                <td><input type="text" placeholder="System Model"/></td>
                              </tr>
                              <tr>
                                <td><label>Machine Sr. No  </label></td>
                                <td><input type="text" placeholder="Machine SR. No"/></td>
                              </tr>
                              <tr>
                                <td><label>Configuration  </label></td>
                                <td><input type="text" placeholder="Configuration"/></td>
                              </tr>
                              <tr>
                                <td><label>Temporary/ Permanent  </label></td>
                                <td><input type="text" placeholder="Temporary/ Permanent"/></td>
                              </tr>
                              <tr>
                                <td><label>Username  </label></td>
                                <td><input type="text" placeholder="Username"/></td>
                              </tr>
                              <tr>
                                <td><label>Designation  </label></td>
                                <td><input type="text" placeholder="Designation"/></td>
                              </tr>
                              <tr>
                                <td><label>Department  </label></td>
                                <td><input type="text" placeholder="Department"/></td>
                              </tr>
                              <tr>
                                <td><label>Po Ref  </label></td>
                                <td><input type="text" placeholder="Po Ref"/></td>
                              </tr>
                              <tr>
                                <td><label>Warrenty/ AMC  </label></td>
                                <td><input type="text" placeholder="Warrenty / AMC"/></td>
                              </tr>
                              <tr>
                                <td><label>Warrenty/ MC Expiry  </label></td>
                                <td><input type="text" placeholder="Warrenty / MC Expiry"/></td>
                              </tr>
                              <tr>
                                <td><label>Remarks  </label></td>
                                <td><input type="text" placeholder="Remarks"/></td>
                              </tr>
                             
                              <tr>
                                <td><label>Maintance Vendor  </label></td>
                                <td><input type="text" placeholder="Maintance Vendor"/></td>
                              </tr>
                              
                            </tbody>
  
                          </table>
                          <button className="admin_add_new_assets">Add New</button>
                        </center>
                        
                      </form>
                    </div>
                    
                          </TabPanel>
                          <TabPanel>
                          <div id="Servers" className="selcontent">
                      <div className="selcontent_printer">
                        <p>Server Asset Form</p>
                        
                      </div>
                      <form className="form_add_new_admin_asset">
                        <center>
                          <table>
                            <tbody>
                              <tr>
                                <td><label>SRL No  </label></td>
                                <td><input type="text" placeholder="SRL No"/></td>
                              </tr>
                              <tr>
                                <td><label>Asset Code  </label></td>
                                <td><input type="text" placeholder="Asset Code" /></td>
                              </tr>
                              <tr>
                                <td><label>Domain  </label></td>
                                <td><input type="text" placeholder="SRL NO"/></td>
                              </tr>
                              <tr>
                                <td><label>Role  </label></td>
                                <td><input type="text" placeholder="Role"/></td>
                              </tr>
                              <tr>
                                <td><label>User/Owner  </label></td>
                                <td><input type="text" placeholder="User / Owner"/></td>
                              </tr>
                              <tr>
                                <td><label>Model  </label></td>
                                <td><input type="text" placeholder="Model"/></td>
                              </tr>
                              <tr>
                                <td><label>Application  </label></td>
                                <td><input type="text" placeholder="Application"/></td>
                              </tr>
                              <tr>
                                <td><label>Raid Cont.  </label></td>
                                <td><input type="text" placeholder="Raid Cont."/></td>
                              </tr>
                              <tr>
                                <td><label>CPU Speed  </label></td>
                                <td><input type="text" placeholder="CPU Speed"/></td>
                              </tr>
                              <tr>
                                <td><label>CPU S/D  </label></td>
                                <td><input type="text" placeholder="CPU S/D"/></td>
                              </tr>
                              <tr>
                                <td><label>RAM(MB)  </label></td>
                                <td><input type="text" placeholder="RAM(MB)"/></td>
                              </tr>
                              <tr>
                                <td><label>Hard Disk(GB) </label></td>
                                <td><input type="text" placeholder="Hard Disk(GB)"/></td>
                              </tr>
                              <tr>
                                <td><label>FDD  </label></td>
                                <td><input type="text" placeholder="FDD"/></td>
                              </tr>
                              <tr>
                                <td><label>CD-ROM  </label></td>
                                <td><input type="text" placeholder="CD-ROM"/></td>
                              </tr>
                              <tr>
                                <td><label>SMDS  </label></td>
                                <td><input type="text" placeholder="SMDS"/></td>
                              </tr>
                              <tr>
                                <td><label>SMPS  </label></td>
                                <td><input type="text" placeholder="SMPS"/></td>
                              </tr>
                              <tr>
                                <td><label>O.S  </label></td>
                                <td><input type="text" placeholder="O.S"/></td>
                              </tr>
                              <tr>
                                <td><label>S.P  </label></td>
                                <td><input type="text" placeholder="S.P"/></td>
                              </tr>
                              <tr>
                                <td><label>Fault Tol  </label></td>
                                <td><input type="text" placeholder="CPU S/D"/></td>
                              </tr>
                              <tr>
                                <td><label>Gigabit Nic  </label></td>
                                <td><input type="text" placeholder="Gigabit Nic"/></td>
                              </tr>
                              <tr>
                                <td><label>Po Ref  </label></td>
                                <td><input type="text" placeholder="Po Ref"/></td>
                              </tr>
                              <tr>
                                <td><label>Warrenty/ AMC  </label></td>
                                <td><input type="text" placeholder="Warrenty / AMC"/></td>
                              </tr>
                              <tr>
                                <td><label>Warrenty/ MC Expiry  </label></td>
                                <td><input type="text" placeholder="Warrenty / MC Expiry"/></td>
                              </tr>
                              <tr>
                                <td><label>Remarks  </label></td>
                                <td><input type="text" placeholder="Remarks"/></td>
                              </tr>
                             
                              <tr>
                                <td><label>Maintance Vendor  </label></td>
                                <td><input type="text" placeholder="Maintance Vendor"/></td>
                              </tr>
                              
                            </tbody>
  
                          </table>
                          <button className="admin_add_new_assets">Add New</button>
                        </center>
                        
                      </form>
                    </div>
                   
                          </TabPanel>
                          <TabPanel><div id="Storage" className="selcontent">
                      <div className="selcontent_printer">
                      <p>Storage Asset Form</p>
                      
                    </div>
                    <form className="form_add_new_admin_asset">
                      <center>
                        <table>
                          <tbody>
                            
                            <tr>
                              <td><label>Asset Code  </label></td>
                              <td><input type="text" placeholder="Asset Code" /></td>
                            </tr>
                            <tr>
                              <td><label>Location  </label></td>
                              <td><input type="text" placeholder="Location"/></td>
                            </tr>
                            <tr>
                              <td><label>System Model  </label></td>
                              <td><input type="text" placeholder="System Model"/></td>
                            </tr>
                            <tr>
                              <td><label>Serial No  </label></td>
                              <td><input type="text" placeholder="Serial No"/></td>
                            </tr>
                            <tr>
                              <td><label>Configuration  </label></td>
                              <td><input type="text" placeholder="Configuration"/></td>
                            </tr>
                            
                            <tr>
                              <td><label>Po Ref  </label></td>
                              <td><input type="text" placeholder="Po Ref"/></td>
                            </tr>
                            <tr>
                              <td><label>Warrenty/ AMC  </label></td>
                              <td><input type="text" placeholder="Warrenty / AMC"/></td>
                            </tr>
                            <tr>
                              <td><label>Warrenty/ MC Expiry  </label></td>
                              <td><input type="text" placeholder="Warrenty / MC Expiry"/></td>
                            </tr>
                            <tr>
                              <td><label>Remarks  </label></td>
                              <td><input type="text" placeholder="Remarks"/></td>
                            </tr>
                            
                            <tr>
                              <td><label>Maintance Vendor  </label></td>
                              <td><input type="text" placeholder="Maintance Vendor"/></td>
                            </tr>
                            
                          </tbody>

                        </table>
                        <button className="admin_add_new_assets">Add New</button>
                      </center>
                      
                    </form>
                  </div>
                    </TabPanel>
                          <TabPanel> <div id="Voice" className="selcontent">
                      <div className="selcontent_printer">
                        <p>Voice Equipment Asset Form</p>
                        
                      </div>
                      <form className="form_add_new_admin_asset">
                        <center>
                          <table>
                            <tbody>
                             
                              <tr>
                                <td><label>Asset Code  </label></td>
                                <td><input type="text" placeholder="Asset Code" /></td>
                              </tr>
                              <tr>
                                <td><label>Serial No  </label></td>
                                <td><input type="text" placeholder="Serial NO"/></td>
                              </tr>
                              <tr>
                                <td><label>Brand  </label></td>
                                <td><input type="text" placeholder="Brand"/></td>
                              </tr>
                              <tr>
                                <td><label>User/Owner  </label></td>
                                <td><input type="text" placeholder="User / Owner"/></td>
                              </tr>
                             
                              <tr>
                                <td><label>Building/ Tower  </label></td>
                                <td><input type="text" placeholder="Building / Tower"/></td>
                              </tr>
                              <tr>
                                <td><label>Level  </label></td>
                                <td><input type="text" placeholder="Level"/></td>
                              </tr>
                              <tr>
                                <td><label>Configuration/Discription  </label></td>
                                <td><input type="text" placeholder="Configuration/Discription"/></td>
                              </tr>
                              <tr>
                                <td><label>Issued /Free  </label></td>
                                <td><input type="text" placeholder="Issued /Free"/></td>
                              </tr>
                              <tr>
                                <td><label>Po Ref  </label></td>
                                <td><input type="text" placeholder="Po Ref"/></td>
                              </tr>
                              <tr>
                                <td><label>Warrenty/ AMC  </label></td>
                                <td><input type="text" placeholder="Warrenty / AMC"/></td>
                              </tr>
                              <tr>
                                <td><label>Warrenty/ MC Expiry  </label></td>
                                <td><input type="text" placeholder="Warrenty / MC Expiry"/></td>
                              </tr>
                              
                              <tr>
                                <td><label>Maintance Vendor  </label></td>
                                <td><input type="text" placeholder="Maintance Vendor"/></td>
                              </tr>
                              
                            </tbody>
  
                          </table>
                          <button className="admin_add_new_assets">Add New</button>
                        </center>
                        
                      </form>
                    </div>
                   </TabPanel>
                          <TabPanel><div id="WAN" className="selcontent">
                      <div className="selcontent_printer">
                      <p>WAN Equipment Asset Form</p>
                      
                    </div>
                    <form className="form_add_new_admin_asset">
                      <center>
                        <table>
                          <tbody>
                           
                            <tr>
                              <td><label>Asset Code  </label></td>
                              <td><input type="text" placeholder="Asset Code" /></td>
                            </tr>
                            <tr>
                              <td><label>Serial No  </label></td>
                              <td><input type="text" placeholder="Serial NO"/></td>
                            </tr>
                            <tr>
                              <td><label>Brand  </label></td>
                              <td><input type="text" placeholder="Brand"/></td>
                            </tr>
                            <tr>
                              <td><label>User/Owner  </label></td>
                              <td><input type="text" placeholder="User / Owner"/></td>
                            </tr>
                           
                            <tr>
                              <td><label>Sub Location  </label></td>
                              <td><input type="text" placeholder="Sub Location"/></td>
                            </tr>
                            <tr>
                              <td><label>Level  </label></td>
                              <td><input type="text" placeholder="Level"/></td>
                            </tr>
                            <tr>
                              <td><label>Configuration/Discription  </label></td>
                              <td><input type="text" placeholder="Configuration/Discription"/></td>
                            </tr>
                            <tr>
                              <td><label>Issued /Free  </label></td>
                              <td><input type="text" placeholder="Issued /Free"/></td>
                            </tr>
                            <tr>
                              <td><label>Po Ref  </label></td>
                              <td><input type="text" placeholder="Po Ref"/></td>
                            </tr>
                            <tr>
                              <td><label>Warrenty/ AMC  </label></td>
                              <td><input type="text" placeholder="Warrenty / AMC"/></td>
                            </tr>
                            <tr>
                              <td><label>Warrenty/ MC Expiry  </label></td>
                              <td><input type="text" placeholder="Warrenty / MC Expiry"/></td>
                            </tr>
                            <tr>
                              <td><label>Maintance Vendor  </label></td>
                              <td><input type="text" placeholder="Maintance Vendor"/></td>
                            </tr>
                          </tbody>
                        </table>
                        <button className="admin_add_new_assets">Add New</button>
                      </center>
                    </form>
                  </div>
                    </TabPanel>
                          <TabPanel><div id="Network" className="selcontent">
                      <div className="selcontent_printer">
                      <p>Network Equipment Asset Form</p>
                      
                    </div>
                    <form className="form_add_new_admin_asset">
                      <center>
                        <table>
                          <tbody>
                           
                            <tr>
                              <td><label>Asset Code  </label></td>
                              <td><input type="text" placeholder="Asset Code" /></td>
                            </tr>
                            <tr>
                              <td><label>Serial No  </label></td>
                              <td><input type="text" placeholder="Serial NO"/></td>
                            </tr>
                            <tr>
                              <td><label>Brand  </label></td>
                              <td><input type="text" placeholder="Brand"/></td>
                            </tr>
                            <tr>
                              <td><label>User/Owner  </label></td>
                              <td><input type="text" placeholder="User / Owner"/></td>
                            </tr>
                           
                            <tr>
                              <td><label>Sub Location  </label></td>
                              <td><input type="text" placeholder="Sub Location"/></td>
                            </tr>
                            <tr>
                              <td><label>Level  </label></td>
                              <td><input type="text" placeholder="Level"/></td>
                            </tr>
                            <tr>
                              <td><label>Configuration/Discription  </label></td>
                              <td><input type="text" placeholder="Configuration/Discription"/></td>
                            </tr>
                            <tr>
                              <td><label>Issued /Free  </label></td>
                              <td><input type="text" placeholder="Issued /Free"/></td>
                            </tr>
                            <tr>
                              <td><label>Po Ref  </label></td>
                              <td><input type="text" placeholder="Po Ref"/></td>
                            </tr>
                            <tr>
                              <td><label>Warrenty/ AMC  </label></td>
                              <td><input type="text" placeholder="Warrenty / AMC"/></td>
                            </tr>
                            <tr>
                              <td><label>Warrenty/ MC Expiry  </label></td>
                              <td><input type="text" placeholder="Warrenty / MC Expiry"/></td>
                            </tr>
                            <tr>
                              <td><label>Maintance Vendor  </label></td>
                              <td><input type="text" placeholder="Maintance Vendor"/></td>
                            </tr>
                          </tbody>
                        </table>
                        <button className="admin_add_new_assets">Add New</button>
                      </center>
                    </form>
                  </div>
                    </TabPanel>
                          <TabPanel><div id="Desktop" className="selcontent">
                      <div className="selcontent_printer">
                        <p>Desktop Inventory Asset Form</p>
                        
                      </div>
                      <form className="form_add_new_admin_asset">
                        <center>
                          <table>
                            <tbody>
                              <tr>
                                <td><label>Equipd  </label></td>
                                <td><input type="text" placeholder="Site"/></td>
                              </tr>
                              <tr>
                                <td><label>Asset Code  </label></td>
                                <td><input type="text" placeholder="Asset Code" /></td>
                              </tr>
                              <tr>
                                <td><label>Serial No  </label></td>
                                <td><input type="text" placeholder="Serial NO"/></td>
                              </tr>
                              <tr>
                                <td><label>Brand  </label></td>
                                <td><input type="text" placeholder="Brand"/></td>
                              </tr>
                              <tr>
                                <td><label>User/Owner  </label></td>
                                <td><input type="text" placeholder="User / Owner"/></td>
                              </tr>
                              <tr>
                                <td><label> Sub Dept  </label></td>
                                <td><input type="text" placeholder="Sub Dept"/></td>
                              </tr>
                              <tr>
                                <td><label>Dept.  </label></td>
                                <td><input type="text" placeholder="Dept"/></td>
                              </tr>
                              <tr>
                                <td><label>Level  </label></td>
                                <td><input type="text" placeholder="Level"/></td>
                              </tr>
                              <tr>
                                <td><label>Location  </label></td>
                                <td><input type="text" placeholder="Location"/></td>
                              </tr>
                              <tr>
                                <td><label>Port Number 1  </label></td>
                                <td><input type="text" placeholder="Domain"/></td>
                              </tr>
                              <tr>
                                <td><label>Port Number /Sub Location  </label></td>
                                <td><input type="text" placeholder="Port Number /Sub Location "/></td>
                              </tr>
                              <tr>
                                <td><label>Original Configuration  </label></td>
                                <td><input type="text" placeholder="Original Configuration"/></td>
                              </tr>
                              <tr>
                                <td><label>Current Configuration  </label></td>
                                <td><input type="text" placeholder="Current Configuration"/></td>
                              </tr>
                              <tr>
                                <td><label>Po Ref  </label></td>
                                <td><input type="text" placeholder="Po Ref"/></td>
                              </tr>
                              <tr>
                                <td><label>Warrenty/ AMC  </label></td>
                                <td><input type="text" placeholder="Warrenty / AMC"/></td>
                              </tr>
                              <tr>
                                <td><label>Warrenty/ MC Expiry  </label></td>
                                <td><input type="text" placeholder="Warrenty / MC Expiry"/></td>
                              </tr>
                              
                              <tr>
                                <td><label>Maintance Vendor  </label></td>
                                <td><input type="text" placeholder="Maintance Vendor"/></td>
                              </tr>
                              
                            </tbody>
  
                          </table>
                          <button className="admin_add_new_assets">Add New</button>
                        </center>
                        
                      </form>
                    </div>
                   </TabPanel>
                          <TabPanel>
                          <div id="Information" className="selcontent">
                      <div className="selcontent_printer">
                        <p>Information Asset Form</p>
                        
                      </div>
                      <form className="form_add_new_admin_asset">
                        <center>
                          <table>
                            <tbody>
                              <tr>
                                <td><label>SI  </label></td>
                                <td><input type="text" placeholder="SI"/></td>
                              </tr>
                              <tr>
                                <td><label>Information Asset Name</label></td>
                                <td><input type="text" placeholder="Information Asset Name" /></td>
                              </tr>
                              <tr>
                                <td><label>Information Asset Description  </label></td>
                                <td><input type="text" placeholder="Information Asset Discription"/></td>
                              </tr>
                              <tr>
                                <td><label>Information Asset Location  </label></td>
                                <td><input type="text" placeholder="Information Asset Location"/></td>
                              </tr>
                              <tr>
                                <td><label>Asset Classification  </label></td>
                                <td><input type="text" placeholder="Asset Classification"/></td>
                              </tr>
                              <tr>
                                <td><label>Owner :Access  </label></td>
                                <td><input type="text" placeholder="Owner :Access"/></td>
                              </tr>
                              <tr>
                                <td><label>Custodian :Access  </label></td>
                                <td><input type="text" placeholder="Building / Tower"/></td>
                              </tr>
                              <tr>
                                <td><label>User :Access  </label></td>
                                <td><input type="text" placeholder="User :Access"/></td>
                              </tr>
                            </tbody>
                          </table>
                          <button className="admin_add_new_assets">Add New</button>
                        </center>
                      </form>
                    </div>
                          </TabPanel>
                      </div>
                      </div>}
                    </div>
                     </div>
                </Tabs>
          </TabPanel>
          <TabPanel  className="tabcontent">
          <Tabs style={{width:"100%"}}>
          <div className="bulk_head">
                    <p>Bulk Upload Assets</p>
                </div>
                <div className="assets_add_new_admin">
                <div className="assets_add_new_admin_sel_op">
                  <label>Asset Type </label><br/>
                      <button className="accordion_drop" onClick={this.openSelect}>--select Asset Types-- </button>
                      {this.state.openSelect && 
                      <div className="slect_asset_type">
                          <TabList className="select_asset_type_list">
                          <Tab >
                          <button className="accordion_drop_inner" >Printers</button><br/>
                          </Tab>
                          <Tab>
                          <button className="accordion_drop_inner" >Laptop</button><br/>
                          </Tab>
                          <Tab>
                          <button className="accordion_drop_inner" >Servers</button><br/>
                          </Tab>
                          <Tab>
                          <button className="accordion_drop_inner" >Storage</button><br/>
                          </Tab>
                          <Tab>
                          <button className="accordion_drop_inner" >Voice Equipment</button><br/>
                          </Tab>
                          <Tab>
                          <button className="accordion_drop_inner" >WAN Equipment</button><br/>
                          </Tab>
                          <Tab>
                          <button className="accordion_drop_inner" >Network Equipment</button><br/>
                          </Tab>
                          <Tab>
                          <button className="accordion_drop_inner" >Desktop Inventory</button><br/>
                          </Tab>
                          <Tab>
                          <button className="accordion_drop_inner" >Information asset</button><br/>
                          </Tab>
                          </TabList>
                          <div className="asset_tab_content">
                          <TabPanel className="selcontent_display_asset">
                          <div className="bulkcontent" id="Printer_b">
                  <div className="selcontent_printer">
                    <p>Printer Asset Form</p>
                  </div>
                  <form className="form_add_new_admin_asset_bulk">
                    <center>
                     <select>
                        <option>--Select Asset Type--</option>
                        <option>Printer</option>
                        <option>Laptop</option>
                        <option>Servers</option>
                        <option>Storage</option>
                        <option>Voice Equipment</option>
                        <option>WAN Equipment</option>
                        <option>Network Equipment</option>
                        <option>Desktop Inventory</option>
                        <option>Information Assets</option>
                      </select>
                      <br/>
                      <input type="file" placeholder="Select file for bulk upload"/><br/>
                      <button className="admin_add_new_assets">Upload Assets</button>
                    </center>  
                  </form> 
                </div>
                 </TabPanel>
                          <TabPanel>
                          <div className="bulkcontent" id="Laptop_b">
                  <div className="selcontent_printer">
                    <p>Laptop Asset Form</p>
                    
                  </div>
                  <form className="form_add_new_admin_asset_bulk">
                    <center>
                     <select>
                        <option>--Select Asset Type--</option>
                        <option>Printer</option>
                        <option>Laptop</option>
                        <option>Servers</option>
                        <option>Storage</option>
                        <option>Voice Equipment</option>
                        <option>WAN Equipment</option>
                        <option>Network Equipment</option>
                        <option>Desktop Inventory</option>
                        <option>Information Assets</option>
                      </select><br/>
                      <input type="file" placeholder="Select file for bulk upload"/><br/>
                      <button className="admin_add_new_assets">Upload Assets</button>
                    </center>  
                  </form> 
                </div>
                </TabPanel>
                          <TabPanel>
                          <div className="bulkcontent" id="Servers_b">
                  <div className="selcontent_printer">
                    <p>Servers Asset Form</p>
                    
                  </div>
                  <form className="form_add_new_admin_asset_bulk">
                    <center>
                     <select>
                        <option>--Select Asset Type--</option>
                        <option>Printer</option>
                        <option>Laptop</option>
                        <option>Servers</option>
                        <option>Storage</option>
                        <option>Voice Equipment</option>
                        <option>WAN Equipment</option>
                        <option>Network Equipment</option>
                        <option>Desktop Inventory</option>
                        <option>Information Assets</option>
                      </select><br/>
                      <input type="file" placeholder="Select file for bulk upload"/><br/>
                      <button className="admin_add_new_assets">Upload Assets</button>
                    </center>  
                  </form> 
                </div>
                          </TabPanel>
                          <TabPanel>
                                           <div className="bulkcontent" id="Storage_b">
                  <div className="selcontent_printer">
                    <p>Storage Asset Form</p>
                    
                  </div>
                  <form className="form_add_new_admin_asset_bulk">
                    <center>
                     <select>
                        <option>--Select Asset Type--</option>
                        <option>Printer</option>
                        <option>Laptop</option>
                        <option>Servers</option>
                        <option>Storage</option>
                        <option>Voice Equipment</option>
                        <option>WAN Equipment</option>
                        <option>Network Equipment</option>
                        <option>Desktop Inventory</option>
                        <option>Information Assets</option>
                      </select><br/>
                      <input type="file" placeholder="Select file for bulk upload"/><br/>
                      <button className="admin_add_new_assets">Upload Assets</button>
                    </center>  
                  </form> 
                </div>
               </TabPanel>
                          <TabPanel> 
                          <div className="bulkcontent" id="Voice_b">
                  <div className="selcontent_printer">
                    <p>Voice Equipment Asset Form</p>
                    
                  </div>
                  <form className="form_add_new_admin_asset_bulk">
                    <center>
                     <select>
                        <option>--Select Asset Type--</option>
                        <option>Printer</option>
                        <option>Laptop</option>
                        <option>Servers</option>
                        <option>Storage</option>
                        <option>Voice Equipment</option>
                        <option>WAN Equipment</option>
                        <option>Network Equipment</option>
                        <option>Desktop Inventory</option>
                        <option>Information Assets</option>
                      </select><br/>
                      <input type="file" placeholder="Select file for bulk upload"/><br/>
                      <button className="admin_add_new_assets">Upload Assets</button>
                    </center>  
                  </form> 
                </div>
                </TabPanel>
                          <TabPanel>
                          <div className="bulkcontent" id="WAN_b">
                  <div className="selcontent_printer">
                    <p>WAN Equipment Asset Form</p>
                    
                  </div>
                  <form className="form_add_new_admin_asset_bulk">
                    <center>
                     <select>
                        <option>--Select Asset Type--</option>
                        <option>Printer</option>
                        <option>Laptop</option>
                        <option>Servers</option>
                        <option>Storage</option>
                        <option>Voice Equipment</option>
                        <option>WAN Equipment</option>
                        <option>Network Equipment</option>
                        <option>Desktop Inventory</option>
                        <option>Information Assets</option>
                      </select><br/>
                      <input type="file" placeholder="Select file for bulk upload"/><br/>
                      <button className="admin_add_new_assets">Upload Assets</button>
                    </center>  
                  </form> 
                </div>
                </TabPanel>
                          <TabPanel>
                          <div className="bulkcontent" id="Network_b">
                  <div className="selcontent_printer">
                    <p>Network Equipment Asset Form</p>
                    
                  </div>
                  <form className="form_add_new_admin_asset_bulk">
                    <center>
                     <select>
                        <option>--Select Asset Type--</option>
                        <option>Printer</option>
                        <option>Laptop</option>
                        <option>Servers</option>
                        <option>Storage</option>
                        <option>Voice Equipment</option>
                        <option>WAN Equipment</option>
                        <option>Network Equipment</option>
                        <option>Desktop Inventory</option>
                        <option>Information Assets</option>
                      </select><br/>
                      <input type="file" placeholder="Select file for bulk upload"/><br/>
                      <button className="admin_add_new_assets">Upload Assets</button>
                    </center>  
                  </form> 
                </div>
                </TabPanel>
                          <TabPanel>
                          <div className="bulkcontent" id="Desktop_b">
                  <div className="selcontent_printer">
                    <p>Desktop Inventory Asset Form</p>
                    
                  </div>
                  <form className="form_add_new_admin_asset_bulk">
                    <center>
                     <select>
                        <option>--Select Asset Type--</option>
                        <option>Printer</option>
                        <option>Laptop</option>
                        <option>Servers</option>
                        <option>Storage</option>
                        <option>Voice Equipment</option>
                        <option>WAN Equipment</option>
                        <option>Network Equipment</option>
                        <option>Desktop Inventory</option>
                        <option>Information Assets</option>
                      </select><br/>
                      <input type="file" placeholder="Select file for bulk upload"/><br/>
                      <button className="admin_add_new_assets">Upload Assets</button>
                    </center>  
                  </form> 
                </div>
                </TabPanel>
                          <TabPanel>
                          <div className="bulkcontent" id="Information_b">
                  <div className="selcontent_printer">
                    <p>Information Asset Form</p>
                    
                  </div>
                  <form className="form_add_new_admin_asset_bulk">
                    <center>
                     <select>
                        <option>--Select Asset Type--</option>
                        <option>Printer</option>
                        <option>Laptop</option>
                        <option>Servers</option>
                        <option>Storage</option>
                        <option>Voice Equipment</option>
                        <option>WAN Equipment</option>
                        <option>Network Equipment</option>
                        <option>Desktop Inventory</option>
                        <option>Information Assets</option>
                      </select><br/>
                      <input type="file" placeholder="Select file for bulk upload"/><br/>
                      <button className="admin_add_new_assets">Upload Assets</button>
                    </center>  
                  </form> 
                </div>
                </TabPanel>
                      </div>
                      </div>}
                    </div>
                     </div>
                </Tabs>
              </TabPanel>
             </Tabs> 
          </div>  
         </div>
     </div>
  {this.state.open_asset && <HiddenAssets/>}
  </div>
  </Fragment>
    );
  }
}



AdminAsset.propTypes = {
  
  auth: PropTypes.object.isRequired,
  users:PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  users:state.users

});
export default connect(
  mapStateToProps,
)(AdminAsset);