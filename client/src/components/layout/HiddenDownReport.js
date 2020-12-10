import React, { Component } from "react";

class HiddenForm extends Component{
    closeReports = (e)=>{
       e.preventDefault();
       window.location.reload(false);
    };
    render(){
        return(
            <div className="hidden_report_format_download"  id="hidden_report_format_download">
          <div className="hidden_report_format_download_inner">
          <div className="hidden_report_format_download_inner_header"> 
              <div className="heading_download_reports" style={{width:"90%"}} >
                <p>Download Reports</p>
              </div>
              <div className="heading_download_reports" style={{width:"10%"}}>
               <td><button  className="btn_close_reports" onClick={this.closeReports}><i className="fa fa-times" style={{fontSize: "1.2vw"}} aria-hidden="true"></i></button></td>
              </div>
          </div>
          <div className="hidden_report_format_download_inner_form"> 
           <div className="hidden_report_format_download_inner_form_info">
             <table>
               <tr>
                 <td>Project ID</td>
                 <td> : 45654</td>
               </tr>
               <tr>
                 <td>Project Name</td>
                 <td> : 4_vul_ahe</td>
               </tr>
               <tr>
                 <td>Asset Type</td>
                 <td> : Server</td>
               </tr>
               <tr>
                 <td>Vulnerability</td>
                 <td> : hf</td>
               </tr>
               <tr>
                 <td>Serverity</td>
                 <td> : High</td>
               </tr>
               <tr>
                 <td>View Task</td>
                 <td>: <a href="#">View</a></td>
               </tr>
               <tr>
                 <td>View Project</td>
                 <td> : <a href="#">View</a></td>
               </tr>
               <tr>
                 <td>Status</td>
                 <td> : Y</td>
               </tr>
             </table>
           </div> 
           <div className="hidden_report_format_download_inner_form_table"> 
             <div>
               <table>
                 <tr className="tr_down_project">
                   <td><input type="checkbox"/></td>
                   <td>Project ID</td>
                   <td>Report Id</td>
                   <td>Asset Type</td>
                   <td>Report</td>
                 </tr>
                 <tr>
                   <td><input type="checkbox"/></td>
                   <td>4_vul_ahe</td>
                   <td>4_vul_ahe</td>
                   <td>Server</td>
                   <td><button className="action_icons_filter_users" ><i className="fa fa-file" style={{fontSize: "1vw"}} aria-hidden="true"></i></button></td>
                 </tr>
                 <tr>
                   <td><input type="checkbox"/></td>
                   <td>4_vul_ahe</td>
                   <td>4_vul_ahe</td>
                   <td>Server</td>
                   <td><button className="action_icons_filter_users" ><i className="fa fa-file" style={{fontSize: "1vw"}} aria-hidden="true"></i></button></td>
                 </tr>
                 <tr>
                   <td><input type="checkbox"/></td>
                   <td>4_vul_ahe</td>
                   <td>4_vul_ahe</td>
                   <td>Server</td>
                   <td><button className="action_icons_filter_users" ><i className="fa fa-file" style={{fontSize: "1vw"}} aria-hidden="true"></i></button></td>
                 </tr>
                 <tr>
                   <td><input type="checkbox"/></td>
                   <td>4_vul_ahe</td>
                   <td>4_vul_ahe</td>
                   <td>Server</td>
                   <td><button className="action_icons_filter_users" ><i className="fa fa-file" style={{fontSize: "1vw"}} aria-hidden="true"></i></button></td>
                 </tr>
                 <tr>
                   <td><input type="checkbox"/></td>
                   <td>4_vul_ahe</td>
                   <td>4_vul_ahe</td>
                   <td>Server</td>
                   <td><button className="action_icons_filter_users" ><i className="fa fa-file" style={{fontSize: "1vw"}} aria-hidden="true"></i></button></td>
                 </tr>
                 <tr>
                   <td><input type="checkbox"/></td>
                   <td>4_vul_ahe</td>
                   <td>4_vul_ahe</td>
                   <td>Server</td>
                   <td><button className="action_icons_filter_users" ><i className="fa fa-file" style={{fontSize: "1vw"}} aria-hidden="true"></i></button></td>
                 </tr>
               </table>
               <div><button className="down_reports">Download</button></div>
             </div>
           </div>     
          </div>
          </div>
       </div>
        )
    }
}
export default (HiddenForm);