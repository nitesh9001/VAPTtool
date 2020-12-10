import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbardash from "../layout/NavbarDashboard";
import { Doughnut,Bar,Line,Pie } from 'react-chartjs-2';
import { Link, NavLink} from 'react-router-dom';
import AdminSideNav from "../layout/AdminSideNav";
import AdminNavbar from "../layout/AdminNavbar";
class AdminDashboard extends Component {
   
  constructor(props){
    super(props)
    this.state = {
        admin_project : [
        { project_id: 1, assets: 'asset1',Project_name:'bd', severity: 'hnen', date: '15/09/19',status:'open', },
        { project_id: 2, assets: 'asset1', Project_name:'bd',severity: 'hnen', date: '15/09/19',status:'open', },
     ],
      mychartdata1_admin:{
        labels: ['Submit', 'Overdue','Active','Closed'],
        datasets: [{
            label: ' of Votes',
            data: 
             [11, 
              19,
               3,
               15
              ],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 1
        }]
       },
     mychartdata2_admin:{
      labels: ['submit','active','closed','overdue'],
      datasets: [{
          label: ' of Votes',
          data: 
           [12, 
            19,
             3,
             5
            ],
          backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
          ],
          borderColor: [
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)'
          ],
          borderWidth: 1
      }]
     },
     mychartdata3_admin:{
      labels: ['Critical','High','Medium','Low'],
      datasets: [{
          label: '# of Clients',
          data: 
           [12, 
            19,
             3,
             5
            ],
          backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
          ],
          borderColor: [
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)'
          ],
          borderWidth: 1
      }]
     },
     mychartdata4_admin:{
        labels: ['SuperAdmin','Self'],
        datasets: [{
            label: '# of Project',
            data: 
             [12, 
               5
              ],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 1
        }]
     },
     mychartdata8_admin:{
        labels: ['','Low','Medium','High','Serious','Critical','Urgent'],
        datasets: [{
            label: 'Risk Level',
            data: 
            [0,12, 19, 3, 5,45,14],
            backgroundColor: [
              'rgba(255,255, 255, 0)',
              'rgba(245,215,66, 1)',
              'rgba(245, 161, 66, 1)',
              'rgba(245, 96, 66, 1)',
              'rgba(255, 66, 66, 1)',
              'rgba(255, 36, 145, 1)',
              'rgba(255, 0, 0, 1)',
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 1
        }]
       },
  }
}
renderTableData() {
    return this.state.admin_project.map((admin_project, index) => {
       const {project_id,assets,severity,date, status,Project_name } = admin_project //destructuring
       return (
          <tr key={project_id}>
             <td><Link to="/adminProjectDetails">{project_id}</Link></td>
             <td>{Project_name}</td>
             <td>{assets}</td>
             <td>{severity}</td>
             <td>{date}</td>
             <td>{status}</td>
             <td className="actions_play_admin"><i className="fa fa-play" aria-hidden="true" ></i>
              <ul className="option_action_paly_admin">
              <Link to="/adminReports"> <li>Reports </li></Link>
              <li>Download Evidence</li>
              <Link to="/adminProjectDetails"><li>View Projects</li></Link>
              <Link to="/adminprojectDetails"><li>Delete Projects</li></Link>
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
 <AdminSideNav/>
 <div className="dash_row_90">
  <div className="row_dash_2">
  <AdminNavbar/>
  <div className="col_dash_2_90">
            <div className="col_dash_2_90_head">
              <p className="heading">Summary</p>
              <hr style={{width: "100%",marginTop:".5%"}}/>
             <div className="class_det_row">
               <div className="column_det">
                  <div className="upper_tab" style={{backgroundColor: "rgba(255, 99, 132, 1)"}}>
                    <div className="upper_tab_70">
                      <div className="upper_tab70_40"><i className="fa fa-bullseye" aria-hidden="true"></i></div>
                      <div className="upper_tab70_60">
                       <p> <span style={{fontSize: "2vw", fontWeight: "bold"}}>46 </span><br/>Active Tasks</p>
                      </div>
                    </div>
                    <div className="upper_tab_30">
                      <a className="view_det" href="#" style={{color: "#ff3c00"}}>View detailed  </a><i className="fa fa-arrow-right" style={{fontSize: ".9vw", float: "right", color:" #ff3c00"}} aria-hidden="true"></i>
                    </div>
                  </div>
               </div>
               
               <div className="column_det">
                <div className="upper_tab" style={{backgroundColor: "#17a2b8"}}>
                  <div className="upper_tab_70">
                    <div className="upper_tab70_40"><i className="fa fa-server" aria-hidden="true"></i></div>
                    <div className="upper_tab70_60">
                      <p> <span style={{fontSize: "2vw",fontWeight: "bold"}}>46 </span><br/>Open issues</p>
                    </div>
                  </div>
                  <div className="upper_tab_30">
                    <a className="view_det" href="#" style={{color: "#17a2b8"}}>View detailed  </a><i className="fa fa-arrow-right" style={{fontSize: ".9vw", float: "right", color:"#17a2b8" }}aria-hidden="true"></i>
  
                  </div>
                </div>
              </div>
              <div className="column_det">
                <div className="upper_tab" style={{backgroundColor:"rgb(255, 53, 53)"}}>
                  <div className="upper_tab_70">
                    <div className="upper_tab70_40"><i className="fa fa-bug" aria-hidden="true"></i></div>
                    <div className="upper_tab70_60">
                      <p > <span style={{fontSize: "2vw",fontWeight: "bold"}}>46 </span><br/>Recent Closed </p>
                    </div>
                  </div>
                  <div className="upper_tab_30">
                    <a className="view_det" href="#" style={{color: "rgb(255,53, 53)"}}> View detailed  </a><i className="fa fa-arrow-right" style={{fontSize: ".9vw", float: "right", color:"rgb(255,53, 53)"}} aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div className="column_det">
                <div className="upper_tab" style={{backgroundColor: "teal"}}>
                  <div className="upper_tab_70">
                    <div className="upper_tab70_40"><i className="fa fa-users" aria-hidden="true"></i></div>
                    <div className="upper_tab70_60"><p> <span style={{fontSize: "2vw",fontWeight: "bold"}}>46 </span><br/>Recent Users</p></div>
                  </div>
                  <div className="upper_tab_30">
                    <a className="view_det" href="#" style={{color: "teal"}}>View detailed  </a><i className="fa fa-arrow-right" style={{fontSize: ".9vw", float: "right", color:"teal" }} ara-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div className="column_det">
                <div className="upper_tab" style={{backgroundColor: "rgb(116, 95, 255)" }}>
                  <div className="upper_tab_70">
                    <div className="upper_tab70_40"><i className="fa fa-briefcase" aria-hidden="true"></i></div>
                    <div className="upper_tab70_60">
                      <p> <span style={{fontSize: "2vw",fontWeight: "bold"}}>46 </span><br/>Recent Reports </p>
                    </div>
                  </div>
                  <div className="upper_tab_30">
                    <a className="view_det" href="#" style={{color:"rgb(43, 13, 240) "}}>View detailed  </a><i className="fa fa-arrow-right" style={{fontSize: ".9vw", float: "right", color:"rgb(43, 3, 240)"}} aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
             </div>
             <div className="col_dash_2_90_admin_dash">
              <div className="details_graphs_grid">
                <div className="top_heading">
                  <div className="top_heading_title">Projects</div>
                  <div className="top_heading_mid"></div>
                  <div className="top_heading_action">
                    <a  target="_blank" rel="noopener noreferrer" className="action_icons zoom"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-download" aria-hidden="true"></i></a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-ellipsis-h" aria-hidden="true"></i><span className="tool-tip">View details</span></a>
                  </div>
                </div>
              <div className="data_graphs">
                <div className="data_graph_block_4">
                <Pie width={300} height={200} data={this.state.mychartdata1_admin} options=""></Pie>  
                </div>
              </div>
              </div>
              <div className="details_graphs_grid"> 
                <div className="top_heading">
                <div className="top_heading_title">Tasks</div>
                <div className="top_heading_mid"></div>
                <div className="top_heading_action">
                  <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                  <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-download" aria-hidden="true"></i></a>
                  <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-ellipsis-h" aria-hidden="true"></i><span className="tool-tip">View details</span></a>      
                </div>
              </div>
              <div className="data_graphs">
                <div className="data_graph_block_4">
                <Doughnut  width={300} height={200}  options={{padding:2}} data={this.state.mychartdata2_admin}></Doughnut>                      
                
                </div>
                <div className="data_graph_block_3"></div>
                <div className="data_graph_block_3"></div>
              </div>
            </div>
            <div className="details_graphs_grid">
              <div className="top_heading">
             <div className="top_heading_title">Risks Status</div>
             <div className="top_heading_mid">

             </div>
             <div className="top_heading_action">
               <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
               <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-download" aria-hidden="true"></i></a>
               <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-ellipsis-h" aria-hidden="true"></i><span className="tool-tip">View details</span></a>
             </div>
           </div>
           <div className="data_graphs">
             <div className="data_graph_block_4">
             <Bar data={this.state.mychartdata3_admin} width="300" height="200"></Bar>                      
             </div>
             <div className="data_graph_block_3"></div>
             <div className="data_graph_block_3"></div>
           </div>
         </div>
         <div className="details_graphs_grid">
          <div className="top_heading">
         <div className="top_heading_title">Projects Distribution</div>
         <div className="top_heading_mid">

         </div>
         <div className="top_heading_action">
           <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
           <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-download" aria-hidden="true"></i></a>
           <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-ellipsis-h" aria-hidden="true"></i><span className="tool-tip">View details</span></a>
         </div>
       </div>
       <div className="data_graphs">
         <div className="data_graph_block_4">
         <Bar data={this.state.mychartdata4_admin} width="300" height="200" options={{
       scales: {
         yAxes: [{
           ticks: {
            beginAtZero: true
            }
          }]
         },
     }}></Bar>                      
         </div>
         <div className="data_graph_block_3"></div>
         <div className="data_graph_block_3"></div>
       </div>
     </div>
             </div>
             <div className="recentreports2">
              <div className="report_heading_2">
                <div className="top_heading">
                  <div className="top_heading_title">Active Projects</div>
                  <div className="top_heading_mid"></div>
                  <div className="top_heading_action">
                    <button target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-arrows-alt" aria-hidden="true"  ></i></button>
                    <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-download" aria-hidden="true"></i></a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-ellipsis-h" aria-hidden="true"></i><span className="tool-tip">View details</span></a>
                  </div>
                </div>
                <div className="summary_reports">
                  <div className="chart_label">
                    <li style={{listStyleType: "square", listStyle:" black" , color:"rgb(245, 215, 66)" }}>Low</li>
                    <li style={{listStyleType: "square", listStyle:" black" , color:"rgb(245, 161, 66)"}}>Midium</li>
                    <li style={{listStyleType: "square", listStyle:" black"  ,color:"rgb(245, 96, 66)"}}>High</li>
                    <li style={{listStyleType: "square", listStyle:" black" ,color:"rgb(245, 66, 66)"}}>Serious</li>
                    <li style={{listStyleType: "square", listStyle:" black" ,color:"rgb(255, 36, 145)"}}>Critical</li>
                    <li style={{listStyleType: "square", listStyle:" black" ,color:"rgb(255, 0, 0)"}}>urgent</li>
                    
                  </div> 
                  <div className="client_risks">
                    <div className="graph_client">
                    <Bar data={this.state.mychartdata8_admin} width="100px" height="50vh" ></Bar>    
                 
                    </div>
                    <div className="new_vul">
                      New 10 Vulnerability
                       <li style={{color: "#ff0000"}}>no 1</li>
                       <li style={{color: "#f83434"}}>no 1</li>
                       <li style={{color: "#f41e65"}}>no 1</li>
                       <li style={{color: "#f4511e"}}>no 1</li>
                       <li style={{color: "#ff7247"}}>no 1</li>
                       <li style={{color: "#f4501e"}}>no 1</li>
                       <li style={{color: "#f4511e"}}>no 1</li>
                       <li style={{color: "#f4511e"}}>no 1</li>
                       <li style={{color: "#f4511e"}}>no 1</li>
                       <li style={{color: "#f4511e"}}>no 1</li>
                       <li style={{listStyleType: "none"}}> 
                         <a className="new_vul_more">View More</a> 
                         <a className="new_vul_more">Download</a>  
                      </li>
                    </div>                 
                     </div>   
                </div>
              </div>
            </div>
            <div className="filter_col_dash_2_90">
              <div className="filter_parts">
                <div className="filter_content">
                  <p className="filter_content_title">Scan</p>
                  <select>
                    <option>All</option>
                    <option>Asset1</option>
                    <option>Asset2</option>
                    <option>Asset3</option>
                    <option>Asset4</option>
                    <option>Asset5</option>
                    <option>Asset6</option>
                    <option>Asset7</option>
                  </select>
                </div>
              </div>
              
             <div className="filter_parts">
               <div className="filter_content">
                 <p className="filter_content_title">Project ID</p>
                 <select>
                   <option>All</option>
                   <option>Asset1</option>
                   <option>Asset2</option>
                   <option>Asset3</option>
                   <option>Asset4</option>
                   <option>Asset5</option>
                   <option>Asset6</option>
                   <option>Asset7</option>
                 </select>
               </div>
             </div>
             <div className="filter_parts">
               <div className="filter_content">
                 <p className="filter_content_title">Month</p>
                 <select>
                   <option>All</option>
                   <option>Asset1</option>
                   <option>Asset2</option>
                   <option>Asset3</option>
                   <option>Asset4</option>
                   <option>Asset5</option>
                   <option>Asset6</option>
                   <option>Asset7</option>
                 </select>
               </div>
             </div>
             <div className="filter_parts">
               <div className="filter_content">
                 <p className="filter_content_title">Severity</p>
                 <select>
                   <option>All</option>
                   <option>Asset1</option>
                   <option>Asset2</option>
                   <option>Asset3</option>
                   <option>Asset4</option>
                   <option>Asset5</option>
                   <option>Asset6</option>
                   <option>Asset7</option>
                 </select>
               </div>
             </div>
             <div className="filter_parts">
               <div className="filter_content">
                 <p className="filter_content_title">Status</p>
                 <select>
                   <option>All</option>
                   <option>Asset1</option>
                   <option>Asset2</option>
                   <option>Asset3</option>
                   <option>Asset4</option>
                   <option>Asset5</option>
                   <option>Asset6</option>
                   <option>Asset7</option>
                 </select>
               </div>
             </div>
             <div className="filter_parts_icons">
                 <button><i className="fa fa-filter" aria-hidden="true" style={{color: "white"}}></i>Apply Filter</button>
            </div>
            </div>
            <div className="details_filter_grid"> 
              <div className="top_heading_filter">
              <div className="top_heading_title_filter">
                Filter Details
              </div>
              <div className="top_heading_mid_filter"></div>
              <div className="top_heading_action_filter">
                <a href="" target="_blank" rel="noopener noreferrer" className="action_icons_filter"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                <a href="" target="_blank" rel="noopener noreferrer" className="action_icons_filter"><i className="fa fa-download" aria-hidden="true"></i></a>
                <a href="" target="_blank" rel="noopener noreferrer" className="action_icons_filter"><i className="fa fa-ellipsis-h" aria-hidden="true"></i><span className="tool-tip">View details</span></a>
              </div>
            </div>
            <div className="filter_control">
                 <div className="controller">
                   <label> Show </label> <select name="200" id="">
                     <option value="">20</option>
                     <option value="">30</option>
                     <option value="">40</option>
                     <option value="">50</option>
                     <option value="">60</option>
                     <option value="">80</option>
                     <option value="">90</option>
                   </select><label> entries </label>
                 </div>
            </div>
            <div className="details_tabel">
              <table border = "1" cellPadding = "5" cellspacing = "5">
              <thead>
              <tr>
              <th>Project Id</th>
              <th>Project Name</th>
              <th>Assets</th>
              <th>Severity</th>
              <th>Date</th>
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
  </div>
  </div>
  </div>
  </Fragment>
    );
  }
}



AdminDashboard.propTypes = {
  
  auth: PropTypes.object.isRequired,
  users:PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  users:state.users

});
export default connect(
  mapStateToProps,
)(AdminDashboard);
