import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authAction";
import AdminSideNav from "../layout/AdminSideNav";
import AdminNavbar from "../layout/AdminNavbar";



class AdminNotification extends Component {
    constructor(props){
        super(props)

        this.state = {
            notification_message:[
                {notification_id:1, message:'hello you just created an account',time:'10:20 AM'},
              ],
          
        }
    }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  notification_message() {
    return this.state.notification_message.map((notification_message, index) => {
       const {  
        notification_id, message,time} = notification_message //destructuring
       return (
        <div className="col_notification_details" key={notification_id}>
        <div className="col_notification_details_messge">
          <div className="icon_notification">
            <i className="fa fa-bell"></i>
          </div>
          <p>{message}</p>
        </div>
        <div className="col_notification_date">
           <div className="action_notification">
             <div className="button_bell"><i className="fa fa-ellipsis-h"></i>
            <div className="hidden_action_bell">
              <ul className="ul_bell">
                <li>Open</li>
                <li>Delete</li>
                <li>Mark</li>
              </ul>
            </div>
          </div>
        </div>
           <div className="time_notification">
           <p style={{fontSize: ".8vw" ,fontWeight: "600", paddingTop: ".4vw"}}>{time}</p>
           </div>
        </div>
        </div>
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
  <AdminNavbar/>
  </div>
  <div className="col_dash_2_90_d" id="blur_back">
              <div className="col_dash_2_90_notification">
                <div className="col_notification_header">
                 <div className="col_notification_title"> Notification</div>
                 <div className="col_notification_clear"> <button>Clear</button></div>
                </div>
                <hr/>
                <div className="col_notification_content">
                {this.notification_message()}
                </div>
              </div>
            </div>
  </div>
  </div>
  </Fragment>
    );
  }
}

AdminNotification.propTypes = {
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
)(AdminNotification);