import React, { Component } from "react";
import {   Link} from 'react-router-dom';
import '../../App.css';
import { logoutUser } from "../../actions/authAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Navbardash extends Component{
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  refresh = e =>{
    e.preventDefault();
     window.location.reload(false);
  }
  render(){
    const { user } = this.props.auth;
   return (
   
    <div className="col_dash_2_10">
      <div className="inner_col_dash_2_10">
      <div className="search_row">
        <div className="search_dash">
       <i className="fa fa-search" aria-hidden="true" style={{position: "relative", padding: ".4vw", color: "#17a2b8"}}></i><input type="search" placeholder="Search...."/>   
         </div>
       </div>
      <div className="user_det_col">
       <Link to="/setting"><button className="user_controller"><span className="tool-tip">Settings</span><i className="fa fa-cog" style={{fontSize: "1.4vw"}} aria-hidden="true" ></i></button></Link>
       <button className="user_controller" onClick={this.onLogoutClick}><span className="tool-tip">Log out</span><i className="fa fa-power-off" aria-hidden="true" style={{fontSize: "1.4vw"}}></i></button>
       <div className="drop_menu">
         <button className="user_controller"><i className="fa fa-user" aria-hidden="true" style={{fontSize: "1.4vw"}}></i><span style={{ fontWeight: "500", cursor: "pointer", color: "#17a2b8"}} > {user.name} </span>
           <i className="fa fa-caret-down" aria-hidden="true" ></i> 
         </button>
         <ul className="under_user">
           <Link to="/profile"><li>Proflie</li></Link>
           <Link to="/notification"><li>Notification</li></Link>
           <Link to="/projects"><li>Projects</li></Link>
           <Link to="/client"><li>Clients</li></Link>
           <Link to="/setting"><li>Setting</li></Link>
           <Link onClick={this.onLogoutClick} to=""><li>Logout</li></Link>
         </ul>  
       </div>
       <Link to="/notification"><button className="user_controller"><span className="tool-tip">Notification</span><i className="fa fa-bell" aria-hidden="true" style={{fontSize: "1.4vw"}}></i></button></Link>
       <Link to="/tasks">
       <button className="user_controller"><span className="tool-tip">New Task</span><i className="fa fa-tasks" aria-hidden="true" style={{fontSize: "1.4vw"}}></i></button>
       </Link>
       <Link onClick={this.refresh}>
       <button className="user_controller"  style={{backgroundColor: "#f4511e", borderRadius: "5px"}}><span className="tool-tip">Refresh</span><i className="fa fa-undo" aria-hidden="true" style={{fontSize: "1.4vw", color: "white"}}></i></button>
       </Link>
     </div>
     </div>
   </div>
  
   )
}}

Navbardash.propTypes = {
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
)(Navbardash);