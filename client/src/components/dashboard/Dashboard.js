import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbardash from "../layout/NavbarDashboard";
import { Doughnut,Bar,Line,Pie } from 'react-chartjs-2';
import { Link, NavLink} from 'react-router-dom';
import SideNavbar from "../layout/sideSuperAdminNavbar";

class Dashboard extends Component {
   
  constructor(props){
    super(props)
    this.state = {
      hide_vul:false,
      onopenRef:false,
      policy_voilation:[
        {policy_id:1, name:'owner1',name_id:445,riskrate:'high',organization:'cuberss',status:'open', action:''},
        {policy_id:2, name:'owner1',name_id:54,riskrate:'high',organization:'cuberss',status:'open', action:''}
      ],
      admin_asset : [
        { asset_id: 1, assets: 'asset1', vulnerability: 'hnen', reference_id: 'was672m',organization:'cybeer',target_os:'laptop',branch:'vns',severity:'low',status:'open' },
        { asset_id: 2, assets: 'asset1', vulnerability: 'hvd', reference_id: 'was672m',organization:'cybeer',target_os:'laptop',branch:'vns',severity:'low',status:'open' },
        { asset_id: 3, assets: 'asset1', vulnerability: 'hfsfh', reference_id: 'was672m',organization:'cybeer',target_os:'laptop',branch:'vns',severity:'low',status:'open' },
        { asset_id: 4, assets: 'asset1', vulnerability: 'higdfs', reference_id: 'was672m',organization:'cybeer',target_os:'laptop',branch:'vns',severity:'low',status:'open' },
     ],
      mychartdata1:{
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
     mychartdata2:{
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
     mychartdata3:{
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
     mychartdata4:{
      labels: ['Active','Deactive'],
      datasets: [{
        label: ' of Votes',
        data: [92, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
      ],
      borderColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)'
      ],
      borderWidth: 1
  }]
     },
     mychartdata5:{
      labels: ['','Adam','Dean','manv','Rishi','vays','mema'],
      datasets: [{
          label: ' Most highly risks',
          data: 
          [0,117, 118,241,451,55,112,545],
          backgroundColor: [
            'rgba(255, 0, 0, .5)',
            'rgba(255, 255, 255, 0)'
          ],
          borderColor: [
            'rbga(255,255,255,1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
           'rgba(0, 0, 0, 1)',         
          ],
          borderWidth: 1
      }]
     },
     mychartdata6:{
      labels: ['Mapped', 'Unmapped'],
      datasets: [{
          label: ' Assets',
          data: 
          [41,15],
          backgroundColor: [
           
              'rgba(255, 99, 132, .5)',
          ],
          borderColor: [
            'rbga(255,255,255,1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
           'rgba(0, 0, 0, 1)',         
          ],
          borderWidth: 1
      },
    
      {
        label: 'Vulnerability',
        data: [20, 50],
        order: 2,
        backgroundColor: [
            'rgba(54, 162, 235, 1)',          
    ]
    }]
     },
     mychartdata8:{
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
    mychartdata7:{
    labels: ['2017', '2018','2019','2020'],
    datasets: [{
        label: ' No of Projects',
        data: 
        [20,25,45,11],
        backgroundColor: [   
          'rgba(255,25, 0, .5)',
          'rgba(245,215,66, .5)',
          'rgba(245, 161, 66, .5)',
          'rgba(0, 0, 0, .5)',
        ],
        borderColor: [
          'rbga(255,255,255,1)',
          'rbga(255,255,255,1)',
          'rbga(255,255,255,1)',
          'rbga(255,255,255,1)',
          'rbga(255,255,255,1)',   
        ],
        borderWidth: 1
    }]
     },
    mychartdata_a:{
      datasets: [{
        label: 'severity 1',
        data: [1000, 0,0,0,0],
        backgroundColor: [
            'rgba(212, 210, 205, 1)',
            'rgba(140, 138, 132, 1)',
            'rgba(255, 206, 100, 1)',
            'rgba(255, 150, 12, 1)',
            'rgba(255,0,0,1)'
        ],
        borderColor: [
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',

        ],
        borderWidth: 1
    }]

    },
    mychartdata_b:{
      datasets: [{
        label: ' of Votes',
        data: [1000, 0,200,0,0],
        backgroundColor: [
            'rgba(212, 210, 205, 1)',
            'rgba(140, 138, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 100, 1)',
            'rgba(255,0,0,1)'
        ],
        borderColor: [
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
        ],
        borderWidth: 1
    }]
    },
    mychartdata_c:{
      datasets: [{
        label: ' of Votes',
        data: [1000, 0,0,254,0],
        backgroundColor: [
            'rgba(212, 210, 205, 1)',
            'rgba(140, 138, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 150, 12, 1)',

            'rgba(255,0,0,1)'
        ],
        borderColor: [
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
        ],
        borderWidth: 1
    }]

    },
    mychartdata_e:{
      datasets: [{
        label: ' of Votes',
        data: [1000, 0,0,0,388],
        backgroundColor: [
            'rgba(212, 210, 205, 1)',
            'rgba(140, 138, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 150, 12, 1)',
            'rgba(255,0,0,1)'
        ],
        borderColor: [
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
        ],
        borderWidth: 1
    }]
    }
    
  }
}
onopen_vul = e => {
  const {hide_vul}=this.state;
    e.preventDefault();
    this.setState({
      hide_vul:true
    })
  };
  renderTableData() {
    return this.state.admin_asset.map((admin_asset, index) => {
       const { asset_id, assets, vulnerability, reference_id,organization,target_os,branch,severity,status } = admin_asset //destructuring
       return (
          <tr key={asset_id}>
             <td>{asset_id}</td>
             <td>{assets}</td>
             <td>{vulnerability}</td>
             <td>{reference_id}</td>
             <td>{organization}</td>
             <td>{target_os}</td>
             <td>{branch}</td>
             <td>{severity}</td>
             <td>{status}</td>
          </tr>
       )
    })
 }
 renderpolicyData() {
  return this.state.policy_voilation.map((policy_voilation, index) => {
     const { policy_id,name,name_id,riskrate,organization, status,action } = policy_voilation //destructuring
     return (
        <tr key={policy_id}>
           <td>{policy_id}</td>
           <td>{name}</td>
           <td><Link to="/clientProfile">{name_id}</Link></td>
           <td>{riskrate}</td>
           <td>{organization}</td>
           <td>{status}</td>
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
  <div className="col_dash_2_90">
          <div className="col_dash_2_90_head">
            <p className="headingtop_dash">Summary</p>
            <hr style={{width: "100%",marginTop: ".5%"}}/>
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
                    <Link to="/tasks" className="view_det" style={{color: "#ff3c00"}}>View detailed  </Link><i className="fa fa-arrow-right" style={{fontSize: ".9vw" ,float: "right", color: "#ff3c00"}} ariaidden="true"></i>
                  </div>
                </div>
             </div>
             <div className="column_det">
              <div className="upper_tab" style={{backgroundColor: "#17a2b8"}}>
                <div className="upper_tab_70">
                  <div className="upper_tab70_40"><i className="fa fa-server" aria-hidden="true"></i></div>
                  <div className="upper_tab70_60">
                    <p> <span style={{fontSize: "2vw", fontWeight: "bold"}}>46 </span><br/>Open issues</p>
                  </div>
                </div>
                <div className="upper_tab_30">
                  <Link to="/tasks" className="view_det"  style={{color: "#17a2b8"}}>View detailed  </Link><i className="fa fa-arrow-right" style={{fontSize: ".9vw", float: "right", color:"#17a2b8"}} aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="column_det">
              <div className="upper_tab" style={{backgroundColor:"rgb(255, 53, 53)"}}>
                <div className="upper_tab_70">
                  <div className="upper_tab70_40"><i className="fa fa-bug" aria-hidden="true"></i></div>
                  <div className="upper_tab70_60">
                    <p > <span style={{fontSize: "2vw", fontWeight: "bold"}}>46 </span><br/>Recent Closed </p>
                  </div>
                </div>
                <div className="upper_tab_30">
                  <Link to="/projects" className="view_det"  style={{color: "rgb(255 ,53, 53)"}}>View detailed  </Link><i className="fa fa-arrow-right" style={{fontSize: ".9vw", float: "right", color:"rgb(255, 53, 53)"}} aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="column_det">
              <div className="upper_tab" style={{backgroundColor: "teal"}}>
                <div className="upper_tab_70">
                  <div className="upper_tab70_40"><i className="fa fa-users" aria-hidden="true"></i></div>
                  <div className="upper_tab70_60"><p> <span style={{fontSize: "2vw", fontWeight: "bold"}}>46 </span><br/>Recent clients</p></div>
                </div>
                <div className="upper_tab_30">
                  <Link to="/client" className="view_det" style={{color: "teal"}}>View detailed  </Link><i className="fa fa-arrow-right" style={{fontSize: ".9vw", float: "right", color:"teal"}} aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="column_det">
              <div className="upper_tab" style={{backgroundColor: "rgb(116, 95, 255)"}}>
                <div className="upper_tab_70">
                  <div className="upper_tab70_40"><i className="fa fa-briefcase" aria-hidden="true"></i></div>
                  <div className="upper_tab70_60">
                    <p> <span style={{fontSize: "2vw", fontWeight: "bold"}}>46 </span><br/>Recent Evideneces </p>
                  </div>
                </div>
                <div className="upper_tab_30">
                  <Link to="/tasks" className="view_det"  style={{color:"rgb(43, 13, 240) "}}>View detailed  </Link><i className="fa fa-arrow-right" style={{fontSize: ".9vw", float: "right", color:"rgb(43, 13, 240)"}} aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
           </div>
           <div className="details_graphs_outline">
            <div className="details_graphs_reports">
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
                    <Pie width={300} height={200} data={this.state.mychartdata1} options=""></Pie>
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
                      <Doughnut  width={300} height={200}  options={{padding:2}} data={this.state.mychartdata2}></Doughnut>                      
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
                      <Bar data={this.state.mychartdata3} width="300" height="200"></Bar>                      </div>
                    <div className="data_graph_block_3"></div>
                    <div className="data_graph_block_3"></div>
                  </div>
                </div>
                <div className="details_graphs_grid">
                  <div className="top_heading">
                 <div className="top_heading_title">Client Info</div>
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
                   <Doughnut data={this.state.mychartdata4} width="300" height="200"></Doughnut>                      </div>
                 <div className="data_graph_block_3"></div>
                 <div className="data_graph_block_3"></div>
               </div>
             </div>
              <div className="details_graphs_grid">
                  <div className="top_heading">
                 <div className="top_heading_title">Urgent Risk clients</div>
                 <div className="top_heading_mid">
                 </div>
                 <div className="top_heading_action">
                   <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                   <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-download" aria-hidden="true"></i></a>
                   <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-ellipsis-h" aria-hidden="true"></i><span className="tool-tip">View details</span></a>
                 </div>
               </div>
               <div className="data_graphs">
                 <div className="data_graph_block_5">
                   <Line data={this.state.mychartdata5} width="300" height="200"></Line>                      </div>
                 
               </div>
             </div>
              <div className="details_graphs_grid"> 
                    <div className="top_heading">
                    <div className="top_heading_title">Scan Result</div>
                    <div className="top_heading_mid"></div>
                    <div className="top_heading_action">
                      <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                      <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-download" aria-hidden="true"></i></a>
                      <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-ellipsis-h" aria-hidden="true"></i><span className="tool-tip">View details</span></a>
                    </div>
                  </div>
                  <div className="data_graphs">
                    <div className="data_graph_block_4">
                      <Bar data={this.state.mychartdata6} width="300" height="200" options={{
                     padding:4,
                     scales: {
                     yAxes: [{
                     ticks: {
                        beginAtZero: true
                   }
                }]  
                }}}
                >
                </Bar>                      
                </div>
                    <div className="data_graph_block_3">
                      <div className="last_scan">
                        Last 5 Scans
                        <li style={{color: "#ff0000"}}>no 1</li>
                     <li style={{color: "#f83434"}}>no 1</li>
                     <li style={{color: "#f41e65"}}>no 1</li>
                     <li style={{color: "#f4511e"}}>no 1</li>
                     <li style={{color: "#ff7247"}}>no 1</li>
                      </div>
                    </div>
                  </div>
              </div>
                  <div className="details_graphs_grid">
                     <div className="top_heading">
                    <div className="top_heading_title">Success Rate</div>
                    <div className="top_heading_mid"></div>
                    <div className="top_heading_action">
                      <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                      <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-download" aria-hidden="true"></i></a>
                      <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-ellipsis-h" aria-hidden="true"></i><span className="tool-tip">View details</span></a>               
                    </div>
                  </div>
                  <div className="data_graphs">
                    <div className="data_graph_block_4">
                      <Bar  data={this.state.mychartdata7} width="300" height="200" options={{
                     padding:4,
                     scales: {
                     yAxes: [{
                     ticks: {
                        beginAtZero: true
                   }
                }]  
               }}}
                >
             </Bar>                      
             </div>
             </div>
                </div>
                  <div className="details_graphs_grid">
                    <div className="top_heading">
                    <div className="top_heading_title">Policy Voliation</div>
                    <div className="top_heading_mid"></div>
                    <div className="top_heading_action">
                      <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                      <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-download" aria-hidden="true"></i></a>
                      <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-ellipsis-h" aria-hidden="true"></i><span className="tool-tip">View details</span></a>
                    </div>
                  </div>
                  <div className="table_policy" style={{overflowY:"scroll",overflowX:"hidden"}}>
                    <table id="dataTable">
                      <thead>
                        <tr>
                         <th>Id</th>
                         <th>Name</th>
                         <th>Admin Id</th>
                         <th>Risk Rate</th>
                         <th>Organization</th>
                         <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.renderpolicyData()}
                      </tbody>
                   </table>
                  </div>
                </div>
           </div>
          </div>
          <div className="recentreports2">
            <div className="report_heading_2">
              <div className="top_heading">
                <div className="top_heading_title">Active Clients</div>
                <div className="top_heading_mid"></div>
                <div className="top_heading_action">
                  <button target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-arrows-alt" aria-hidden="true"  ></i></button>
                  <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-download" aria-hidden="true"></i></a>
                  <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-ellipsis-h" aria-hidden="true"></i><span className="tool-tip">View details</span></a>
                </div>
              </div>
              <div className="summary_reports">
                <div className="chart_label">
                  <li style={{listStyleType: "square",listStyle: "black", color:"rgb(245, 215, 66)"}} >Low</li>
                  <li style={{listStyleType: "square",listStyle: "black", color:"rgb(245, 161, 66)"}}>Midium</li>
                  <li style={{listStyleType: "square", listStyle: "black", color: "rgb(245, 96, 66)"}}>High</li>
                  <li style={{listStyleType: "square",listStyle: "black", color:"rgb(245, 66, 66)"}}>Serious</li>
                  <li style={{listStyleType: "square",listStyle: "black", color:"rgb(255, 36, 145)"}}>Critical</li>
                  <li style={{listStyleType: "square",listStyle: "black", color:"rgb(255, 0, 0)"}}>urgent</li>
                </div> 
                <div className="client_risks">
                  <div className="graph_client">
                  <Bar data={this.state.mychartdata8} width="100px" height="50vh" ></Bar>    
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
                     <li style={{listStyleType:"none"}}> 
                       <a className="new_vul_more">View More</a> 
                       <a className="new_vul_more">Download</a>
                       <button className="new_vul_more" onClick={this.onopen_vul}>Add New</button>

                    </li>
                  </div>                 
                   </div>   
              </div>
            </div>
          </div>
          <div className="recentreports" id='zooming'>
            <div className="report_heading">
              <div className="top_heading">
                <div className="top_heading_title">Vulnerability by Severity</div>
                <div className="top_heading_mid"></div>
                <div className="top_heading_action">
                  <button target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-arrows-alt" aria-hidden="true"  ></i></button>
                  <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-download" aria-hidden="true"></i></a>
                  <a href="" target="_blank" rel="noopener noreferrer" className="action_icons"><i className="fa fa-ellipsis-h" aria-hidden="true"></i><span className="tool-tip">View details</span></a>
                </div>
              </div>
              <div className="summary_reports">
                <div className="chart_label">
                  <li style={{listStyleType: "square", listStyle: "red", color:"gray"}}>Unmapped</li>
                  <li style={{listStyleType: "square", listStyle: "red", color:"rgb(70, 69, 69)"}}>Mapped</li>
                  <li style={{listStyleType: "square", listStyle: "red", color:" rgba(255, 206, 86, 1)"}}>Serious</li>
                  <li style={{listStyleType: "square", listStyle: "red", color:"rgb(255, 150, 12)"}}>Critical</li>
                  <li style={{listStyleType: "square", listStyle: "red", color:"rgb(255, 0, 0)"}}>Urgent</li>
                </div>
                  <div className="chart_vul"><Doughnut data={this.state.mychartdata_a} width="600" height="180" options={{title:{display:true,
                  text:'Severity 1'}}} ></Doughnut>  
                  </div>                
                  <div className="chart_vul"><Doughnut data={this.state.mychartdata_b} width="600" height="180" options={{title:{display:true,
                  text:'Severity 2'}}}></Doughnut>  
                  </div>             
                  <div className="chart_vul"><Doughnut data={this.state.mychartdata_c} width="600" height="180" options={{title:{display:true,
                  text:'Severity 3'}}}></Doughnut>     
                  </div>        
                <div className="chart_vul"><Doughnut data={this.state.mychartdata_e} width="600" height="180" options={{title:{display:true,
                  text:'Severity 4'}}}></Doughnut>     
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
               <p className="filter_content_title">Organization</p>
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
               <p className="filter_content_title">Reference ID</p>
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
               <p className="filter_content_title">Target OS</p>
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
           <div className="filter_parts" style={{marginTop:"4.5vh"}}>
               <button><i className="fa fa-filter" aria-hidden="true" style={{color: "white"}} ></i>Apply Filter</button>
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
                 <th>Assets Id</th>
                 <th>Assets</th>
                 <th>Vulnerability Name</th>
                 <th>Reference Id</th>
                 <th>Organization</th>
                 <th>Target OS</th>
                 <th>Branch</th>
                 <th>Severity</th>
                 <th>Status</th>
              </tr>
              </thead>
              <tbody>

              </tbody>
              {this.renderTableData()}
           </table>
          </div>
        </div>
          <br/>
          <br/>
          <br/>
        </div>
  </div>
  </div>
  </div>
  {this.state.hide_vul && <HiddenVul/>}

  </Fragment>
    );
  }
}
class HiddenVul extends Component{
  constructor(props){
    super(props)
    this.state={ count: 1}
  }  
  onclick = (type)=>{
    this.setState(prevState => {
       return {count: type == 'add' ? prevState.count + 1: prevState.count - 1}
    })
}
  closeform_vul=e=>{
    e.preventDefault();
    window.location.reload(false);
  }
render(){
    return(
      <div className="hidden_add_vul_new" id="hidden_add_vul_new">
        <div className="hidden_add_vul_new_inner">
            <div className="new_vul_form_headings">
              <div className="name_head_vul">
                <p>New Vulnerability</p>
              </div>
              <div className="close_btn_group_vul">
                <button className="slide_right_close" onClick={this.closeform_vul}><i className="fa fa-times" aria-hidden="true" style={{fontSize: "1.4vw"}} ></i></button>
              </div>
            </div>
            <div className="new_vul_main_form">
              <form>
                <li>
                  <label>CVE ID</label><br/>
                  <input type="text" placeholder="CVE ID"/>
                </li>
                <li>
                  <label>CVE Name</label><br/>
                  <input type="text" placeholder="CVE Name"/>
                </li>
                <li>
                  <label>CVE Severity</label><br/>
                  <input type="text" placeholder="CVE Seveirty"/>
                </li>
                <li>
                  <label>CVE Status</label><br/>
                  <input type="text" placeholder="CVE Status"/>
                </li>
                
                <li>
                  <label className="label_add" >CVE Refrences <i className="fa fa-plus-circle"  onClick={this.onclick.bind(this, 'add')}></i><span className="tool-tip"> Add more refrences </span></label><br/>
                  <input type="text" placeholder="Reference 1" />
                  <br/>
                  <div style={{display:"none"}}>
                  <p>{this.state.count}</p>
                  </div>

                  {this.state.count >1 && <div id="new_chq"><br/>
                    <input type="text"  id="total_chq" />
                  </div>
                  }
                  {this.state.count >1 && <div id="new_chq"><br/>
                    <input type="text"  id="total_chq" />
                  </div>
                  } {this.state.count >1 && <div id="new_chq"><br/>
                    <input type="text"  id="total_chq" />
                  </div>
                  }  
                  
                  </li>
                  <br/>
                  <li>
                  <label>CVE Discription</label><br/>
                  <textarea type="text" placeholder="CVE Discription" cols="30" rows="5"></textarea>
                </li>
                <br/>
                <li ><button type="submit" className="submit_btn_vul">Submit</button></li>
              </form>
            </div>
        </div>
        </div>
    )
  }  
}


Dashboard.propTypes = {
  
  auth: PropTypes.object.isRequired,
  users:PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  users:state.users

});
export default connect(
  mapStateToProps,
)(Dashboard);
