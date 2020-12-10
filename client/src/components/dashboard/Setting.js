import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authAction";
import Navbardash from "../layout/NavbarDashboard";
import SideNavbar from '../layout/sideSuperAdminNavbar';
import { Link} from 'react-router-dom';


class Setting extends Component {
    constructor(props){
        super(props)

        this.state = {
           manage_notificatin:false,
           blockuser:false,
           discussion_control:false,
           privacy:false,
           policy:false,
        }
    }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
 on_manage_notification=e=>{
     e.preventDefault();
     const{manage_notificatin}=this.state
     this.setState({manage_notificatin:!manage_notificatin})
 }
 on_blockUser=e=>{
    e.preventDefault();
    const{blockuser}=this.state
    this.setState({blockuser:!blockuser})
}
on_discussion_control=e=>{
    e.preventDefault();
    const{discussion_control}=this.state
    this.setState({discussion_control:!discussion_control})
}
onPrivacy=e=>{
    e.preventDefault();
    const{privacy}=this.state
    this.setState({privacy:!privacy})
}
on_policy=e=>{
    e.preventDefault();
    const{policy}=this.state
    this.setState({policy:!policy})
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
  <div className="col_dash_2_90_d" id="blur_back">
              <div className="col_dash_2_90_setting">
                 <div className="col_dash_2_90_setting_inner">
                     <p>Settings</p>
                 </div> 
                 <div className="list_of_setting">
                    <div className="list_of_setting_option">
                        <div className="list_of_section">
                            <div className="list_of_setting_inner_title">
                                <p>Edit Profile</p>
                            </div>
                            <div className="list_of_setting_inner_suggest">
                                <p>View and edit your personal information.</p>
                            </div>
                        </div>
                        <div className="list_of_setting_inner_action">
                            <Link to="/profileEdit">Change</Link>
                        </div>
                    </div>
                    <div className="list_of_setting_option" onClick={this.on_manage_notification}>
                        <div className="list_of_section">
                            <div className="list_of_setting_inner_title">
                                <p>Manage Notification</p>
                            </div>
                            <div className="list_of_setting_inner_suggest">
                                <p>Manage your notification, delete, oragnise, mute, etc.</p>
                            </div>
                        </div>
                        <div className="list_of_setting_inner_action">
                            <a>Change</a>
                        </div>
                    </div>
                    {this.state.manage_notificatin && <div className="panel_setting">
                      <div className="pannel_setting_inner">
                          <div className="setting_action">
                            <div className="section_option_notification">
                                <div className="section_notification_title">
                                        <p>Delete all Notifications</p>
                                    </div>
                                    <div className="section_notification_delete_suggest">
                                        <p>Delete all  notification in one click</p>
                                    </div> 
                            </div>
                          <div className="section_notification_delete">
                            <button>Delete</button>
                        </div>
                        </div>
                        <div className="setting_action">
                            <div className="section_option_notification">
                                <div className="section_notification_title">
                                        <p>Auto Delete Notifications</p>
                                    </div>
                                    <div className="section_notification_delete_suggest">
                                        <p>Delete notification automatically after some time</p>
                                    </div> 
                            </div>
                          <div className="section_notification_delete">
                            <select>
                                <option>Never</option>
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                                <option>Yearly</option>
                            </select>

                        </div>
                        </div>
                        <div className="setting_action">
                            <div className="section_option_notification">
                                <div className="section_notification_title">
                                        <p>Alert on Email</p>
                                    </div>
                                    <div className="section_notification_delete_suggest">
                                        <p>Notify on your personal email when notification arrives</p>
                                    </div> 
                            </div>
                          <div className="section_notification_delete">
                            <input type="checkbox" name="" id="" className="check_setting"/>
                        </div>
                        </div>
                        <div className="setting_action_save">
                            <button>Save</button>
                        </div>
                      </div>
                    </div>
                    }
                    <div className="list_of_setting_option" onClick={this.on_blockUser}>
                        <div className="list_of_section">
                            <div className="list_of_setting_inner_title">
                                <p>Block Users</p>
                            </div>
                            <div className="list_of_setting_inner_suggest">
                                <p>Block User or unblock users.</p>
                            </div>
                        </div>
                        <div className="list_of_setting_inner_action">
                            <a>Change</a>
                        </div>
                    </div>
                    {this.state.blockuser && 
                    <div className="panel_setting">
                    <form className="form_block_user">
                   <li>
                     <label>Users Id</label><br/>
                       <select aria-multiselectable="false">
                            <option>Users Id1</option>
                            <option>Users Id2</option>
                            <option>Users Id3</option>
                            <option>Users Id4</option>
                            <option>Users Id5</option>
                            <option>Users Id6</option>
                            <option>Users Id7</option>
                            <option>Users Id8</option>
                        </select>
               </li> 
               <li>
                 <label>Users Name</label><br/>
                 <input type="text" placeholder="Users Name"/>
               </li>
              
               <li><div className="fixed_btn_block">
               <center><button type="submit" className="block_user_btn">Block </button></center>
               </div></li>
             </form>
                    </div>
                    }
                    <div className="list_of_setting_option" onClick={this.on_discussion_control}>
                        <div className="list_of_section">
                            <div className="list_of_setting_inner_title">
                                <p>Discussion Control</p>
                            </div>
                            <div className="list_of_setting_inner_suggest">
                                <p>Control the discussion box, notification, alert on email, disable chat</p>
                            </div>
                        </div>
                        <div className="list_of_setting_inner_action">
                            <a>Change</a>
                        </div>
                    </div>
                    {this.state.discussion_control && 
                    <div className="panel_setting">
                    <div className="pannel_setting_inner">
                          <div className="setting_action">
                            <div className="section_option_notification">
                                <div className="section_notification_title">
                                        <p>Delete all Messages</p>
                                    </div>
                                    <div className="section_notification_delete_suggest">
                                        <p>Delete all  Messages in one click</p>
                                    </div> 
                            </div>
                          <div className="section_notification_delete">
                            <button>Delete</button>
                        </div>
                        </div>
                        <div className="setting_action">
                            <div className="section_option_notification">
                                <div className="section_notification_title">
                                        <p>Alert on Email</p>
                                    </div>
                                    <div className="section_notification_delete_suggest">
                                        <p>Notify on your personal email </p>
                                    </div> 
                            </div>
                          <div className="section_notification_delete">
                            <input type="checkbox" name="" id="" className="check_setting"/>
                        </div>
                        </div>
                        <div className="setting_action_save">
                            <button>Save</button>
                        </div>
                      </div>
                    </div>
                    }
                    <div className="list_of_setting_option" onClick={this.onPrivacy}>
                        <div className="list_of_section">
                            <div className="list_of_setting_inner_title">
                                <p>Privacy Settings</p>
                            </div>
                            <div className="list_of_setting_inner_suggest">
                                <p>View and edit your password information.</p>
                            </div>
                        </div>
                        <div className="list_of_setting_inner_action">
                            <a>Change</a>
                        </div>
                    </div>
                    {this.state.privacy && 
                    <div className="panel_setting">
                    <Link to="/profileEdit">
                    <button className="edit_privacy">Edit Password and Personal Details</button>

                    </Link> 
                    </div>
                    }
                    <div className="list_of_setting_option" onClick={this.on_policy}>
                        <div className="list_of_section">
                            <div className="list_of_setting_inner_title">
                                <p>Policy</p>
                            </div>
                            <div className="list_of_setting_inner_suggest">
                                <p>View privacy and policy.</p>
                            </div>
                        </div>
                        <div className="list_of_setting_inner_action">
                            <a>View</a>
                        </div>
                    </div>
                    {this.state.policy && 
                    <div className="panel_setting">
                   
                     </div>
                    }
                   
                    <div className="list_of_setting_option">
                        <div className="list_of_section">
                            <div className="list_of_setting_inner_title">
                                <p>Logout</p>
                            </div> 
                    </div>
                 </div>
              </div>
            </div>
         </div>
  </div>
  </div>
  </Fragment>
    );
  }
}

Setting.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  users:PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  users:state.users

});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Setting);