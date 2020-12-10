import React from "react";
import { Link, NavLink} from 'react-router-dom';
import unnamed from '../../img/unnamed.png';
const SideNavbar =()=>{
   return (
    <div className="dash_row_10" id="dash_row_10" style={{overflowY:"scroll "}}>
    <div className="hide_action" >
     <span className="tool-tip">Hide Side Menu</span>
      <i className="fa fa-bars style_i_bar" aria-hidden="true" style={{fontSize: "24px", padding: ".7vw",color: "#17a2b8"}}></i>
     </div>
    <br/>
    <center>
    <div className="side_main_sec">
       <div className="side_nav_sec"><img src={unnamed} className="sidenav_img" alt="img"/>
       </div>
       <br/>
       <div className="side_nav">
         <ul className="side_nav_list">
           <li ><NavLink to="/dashboard" activeClassName="navbar__link active" className="det_list_side_nav"><i className="fa fa-desktop"></i><span> Dashboard</span></NavLink></li><br/>
           <li ><NavLink to="/client" activeClassName="navbar__link active" className="det_list_side_nav"><i className="fa fa-user" ></i><span> Clients</span> </NavLink></li><br/>
           <li><NavLink to="/tasks" activeClassName="navbar__link active"  className="det_list_side_nav"><i className="fa fa-tasks"></i><span> Tasks</span> </NavLink></li><br/>
           <li><NavLink to="/projects" activeClassName="navbar__link active" className="det_list_side_nav"><i className="fa fa-window-restore"></i><span> Projects</span></NavLink></li><br/>
           <li><NavLink to="/reports" activeClassName="navbar__link active" className="det_list_side_nav"><i className="fa fa-book"></i><span> Reports</span></NavLink></li><br/>
           <li><NavLink to="/discussion" activeClassName="navbar__link active" className="det_list_side_nav"><i className="fa fa-envelope"></i><span> Discussion</span> </NavLink></li><br/>
         </ul>
      
       </div>
     </div>
     </center>
  </div>
   )
}
export default (SideNavbar);