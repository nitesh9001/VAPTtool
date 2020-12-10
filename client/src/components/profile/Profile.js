import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authAction";
import Navbardash from "../layout/NavbarDashboard";
import {Pie } from 'react-chartjs-2';
import SideNavbar from '../layout/sideSuperAdminNavbar';
import Rectangleimg from '../../img/Rectangle 4.png'

class Profile extends Component {
    constructor(props){
        super(props)
       
        this.state = {
          profile_pie:{
            labels: ['Completed', 'Overdue','Active'],
            datasets: [{
                label: ' of Votes',
                data: 
                 [11, 
                  3,
                   15
                  ],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderColor: [
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)'
                ],
                borderWidth: 1
            }]
           },
        }
    }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  
 
render() {
    
return (
  <Fragment>
  <div className="col_dash">
  <SideNavbar/>
 <div className="dash_row_90">
  <div className="row_dash_2">
  <Navbardash/>
  </div>
  <div className="col_dash_2_90_p" id="blur_back">
          <div className="profile_sec">
            <div className="profile_sec_avtar">
               <div className="profile_sec_avtar_img">
                 <img src={Rectangleimg} alt="loading.."/>
               </div>
               <div className="profile_sec_avtar_title">
                 <p className="profile_title">Username <span>/</span> Security Manager</p>
                 <p className="profile_title_org">CyberSRC Consultancy LLP</p>
               </div>
            </div>
            <div className="profile_sec_main">
                <div className="profile_about_info">
                  <div className="heading_about_info"><p>About</p></div>
                  <div className="content_about_info">
                   <table className="det_list_of_user">
                     <tr>
                      <td className="que">First Name</td>
                      <td  className="ans">User Name</td>
                      </tr>
                      <tr>
                        <td  className="que">Last Name</td>
                        <td className="ans">00abc45</td>
                      </tr>
                      <tr>
                        <td className="que">Comapny Email</td>
                        <td className="ans">intern@cybersrcc.com</td>
                        </tr>
                      <tr>
                        <td className="que">Organization</td>
                        <td className="ans">CyberSrc Consultancy</td>
                        </tr>
                      <tr>
                        <td  className="que">New Primary Email</td>
                        <td className="ans">Noida</td>
                        </tr>
                      <tr>
                        <td className="que">Recovery Email</td>
                        <td className="ans">Securr</td>
                        </tr>
                      <tr>
                        <td className="que">Home Secondary Email</td>
                        <td className="ans">sffsff</td>
                        </tr>
                      <tr>
                        <td className="que">Work Secondary Email</td>
                        <td className="ans">Noidafsf</td>
                        </tr>
                      <tr>
                        <td className="que">Recovery Phone</td>
                        <td className="ans">9154484115</td>
                        </tr>
                      <tr>
                        <td className="que">Work Phone</td>
                        <td className="ans">2210555</td>
                        </tr>
                      <tr>
                        <td className="que">Home Phone</td>
                        <td className="ans">4457885444 </td>
                        </tr>
                      <tr>
                        <td className="que">Mobile Phone</td>
                        <td className="ans">4457885444 </td>
                        </tr>
                      <tr>
                        <td className="que">Work Address</td>
                        <td className="ans">Noida </td>
                        </tr>
                      <tr>
                        <td className="que">Home Address</td>
                        <td className="ans">Noida </td>
                        </tr>
                      <tr>
                        <td className="que">Employee ID</td>
                        <td className="ans">nnf </td>
                        </tr>
                      <tr>
                        <td className="que">Employee Type</td>
                        <td className="ans">nnf </td>
                        </tr>
                      <tr>
                        <td className="que">Employee Title</td>
                        <td className="ans">nnf </td>
                        </tr>
                      <tr>
                        <td className="que">Manager Email</td>
                        <td className="ans">nnf </td>
                        </tr>
                      <tr>
                        <td className="que">Department</td>
                        <td className="ans">nnf </td>
                        </tr>
                      <tr>
                        <td className="que">Cost Center</td>
                        <td className="ans">nnf </td>
                        </tr>
                      <tr>
                        <td className="que">Building ID</td>
                        <td className="ans">nnf </td>
                        </tr>
                      <tr>
                        <td className="que">Floor Name</td>
                        <td className="ans">nnf </td>
                        </tr>
                      <tr>
                        <td className="que">Floor Section</td>
                        <td className="ans">nnf </td>
                        </tr>
                      <tr>
                        <td className="que">Password</td>
                        <td className="ans">********** </td>
                        </tr>
                      </table>
                  </div>
                </div>
                <div className="profile_activity_info">
                  <div className="heading_activity_info"><p>Quick Snap</p></div>
                  <div className="content_activity_info">
                    <p>Project Snapshot</p>
                    <Pie width="200" height="50" data={this.state.profile_pie} ></Pie>
                    <table className="det_snapshot_data">
                      <tr>
                        <td>Total Projects </td>
                        <td>455</td>
                        <td><button className="action_icons_filter_users"><i className="fa fa-info-circle" style={{fontSize: "1vw"}} aria-hidden="true"></i></button></td>
                        <td><button className="action_icons_filter_users"><i className="fa fa-download" style={{fontSize: "1vw"}} aria-hidden="true"></i></button></td>
                      </tr>
                      <tr>
                        <td>Completed Projects </td> 
                        <td>455</td>
                        <td><button className="action_icons_filter_users"><i className="fa fa-info-circle" style={{fontSize: "1vw"}} aria-hidden="true"></i></button></td>
                        <td><button className="action_icons_filter_users"><i className="fa fa-download" style={{fontSize: "1vw"}} aria-hidden="true"></i></button></td>
                      </tr>
                      <tr>
                        <td>Active Projects </td> 
                        <td>455</td>
                        <td><button className="action_icons_filter_users"><i className="fa fa-info-circle" style={{fontSize: "1vw"}} aria-hidden="true"></i></button></td>
                        <td><button className="action_icons_filter_users"><i className="fa fa-download" style={{fontSize: "1vw"}} aria-hidden="true"></i></button></td>
                      </tr>
                      <tr>
                        <td>Total Clients</td> 
                        <td>455</td>
                        <td><button className="action_icons_filter_users"><i className="fa fa-info-circle" style={{fontSize: "1vw"}} aria-hidden="true"></i></button></td>
                        <td><button className="action_icons_filter_users"><i className="fa fa-download" style={{fontSize: "1vw"}} aria-hidden="true"></i></button></td>
                      </tr>                     
                    </table>
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

Profile.propTypes = {
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
)(Profile);