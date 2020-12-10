import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
import unnamed from '../../img/unnamed.png';
class AdminSideNavbar extends Component{
    constructor(props){
        super(props)
        this.state = {
            openAccorden:false,
        }
    }
    openAccordence=(e)=>{
        const {openAccorden}=this.state;
               e.preventDefault();
            this.setState({
                openAccorden:!openAccorden
            })
        }
render(){
   return (
    <div className="dash_row_10" id="dash_row_10" style={{overflowY:"scroll "}}>
    <div className="hide_action" >
     <span className="tool-tip">Hide Side Menu</span>
      <i className="fa fa-bars style_i_bar" aria-hidden="true"  style={{fontSize: "24px", padding: ".7vw", color:" #17a2b8"}}></i>
     </div>
    <br/>
    <center>
    <div className="side_main_sec">
    <div className="side_nav_sec"><img src={unnamed} className="sidenav_img" alt="img"/>
       </div>
       <br/>
       <div className="side_nav" >
         <ul className="side_nav_list" >
         <li><NavLink to="/adminDashboard" activeClassName="navbar__link active" className="det_list_side_nav"><i className="fa fa-desktop"></i><span> Dashboard</span></NavLink></li><br/>
           <li><NavLink to="/adminUser" activeClassName="navbar__link active" className="det_list_side_nav"><i className="fa fa-user" ></i><span> Users</span> </NavLink></li><br/>
           <li><button className="accordion" onClick={this.openAccordence} ><a  className="det_list_side_nav"><i className="fa fa-window-restore"></i> Projects</a></button>
               {this.state.openAccorden && <HiddenNav/>}
               </li><br/>
           <li><NavLink to="/adminDiscussion" activeClassName="navbar__link active" className="det_list_side_nav"><i className="fa fa-envelope"></i><span> Discussion</span> </NavLink></li><br/>
         </ul>
       </div>
     </div>
     </center>
  </div>    
    )
  }
}
class HiddenNav extends  Component{
  constructor(props){
    super(props)
    this.state = {
        openAccorden:true,
    }
}
openAccordence=(e)=>{
    const {openAccorden}=this.state;
           e.preventDefault();
        this.setState({
            openAccorden:true
        })
    }
    render(){
    return(
    <div className="panel">
      <li ><NavLink to="/adminAssets"  activeClassName="navbar__link active" className="det_list_side_nav "><i className="fa fa-asterisk" aria-hidden="true"></i> Asset Managment</NavLink></li>
      <li ><NavLink to="/adminVulnerability"  activeClassName="navbar__link active" className="det_list_side_nav"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Vulnerability Managment</NavLink></li>
      <li ><NavLink to="/adminTasks"  activeClassName="navbar__link active" className="det_list_side_nav"><i className="fa fa-tasks" aria-hidden="true"></i> Task Managment</NavLink></li>
    </div>
    )
    }
}
export default (AdminSideNavbar);