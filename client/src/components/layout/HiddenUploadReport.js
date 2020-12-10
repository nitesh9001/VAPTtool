import React, { Component } from "react";


class UploadReport extends Component{
    closeReports = (e)=>{
        e.preventDefault();
        window.location.reload(false);
     };
    render(){
        return(
            <div className="hidden_report_format_upload" id="hidden_report_format_upload">
            <div className="hidden_report_format_upload_inner">
            <div className="hidden_report_format_upload_inner_header"> 
                <div className="heading_upload_reports" style={{width:"90%"}}>
                  <p>Upload Reports</p>
                </div>
                <div className="heading_upload_reports" style={{width:"10%"}}>
                 <td><button className="btn_close__ureports" onClick={this.closeReports} ><i className="fa fa-times" style={{fontSize:" 1.2vw"}} aria-hidden="true"></i></button></td>
                </div>
            </div>
            <div className="hidden_report_format_upload_inner_form"> 
             <div className="hidden_report_format_upload_inner_form_info">
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
             <div className="hidden_report_format_upload_inner_form_table"> 
              
               <div>
                 <table>
                   <tr >
                     <td>Project ID</td>
                     <td><select>
                       <option>--Select project--</option>
                       <option>--Select project--</option>
                       <option>--Select project--</option>
                       <option>--Select project--</option>
                     </select></td>
                   </tr>
                   <tr>
                    <td>Report Id</td>
                    <td><input type="text" name="" id="" placeholder="Enter Report id"/></td>
                   </tr>
                   <tr>
                    <td>Asset Type</td>
                    <td><select>
                      <option>--Select project--</option>
                      <option>--Select project--</option>
                      <option>--Select project--</option>
                      <option>--Select project--</option>
                    </select></td>
                   </tr>
                   <tr>
                    <td>Serverity</td>
                    <td><select>
                      <option>--Select project--</option>
                      <option>--Select project--</option>
                      <option>--Select project--</option>
                      <option>--Select project--</option>
                    </select></td>
                   </tr>
                   <tr>
                    <td>Vulnerability</td>
                    <td><select>
                      <option>--Select project--</option>
                      <option>--Select project--</option>
                      <option>--Select project--</option>
                      <option>--Select project--</option>
                    </select></td>
                   </tr>
                   <tr>
                    <td>Upload</td>
                    <td><input type="file" name="" id="" placeholder="Ente id"/></td>
                   </tr>
                 </table>
                 <div><button className="upload_reports">Upload</button></div>
               </div>
             </div>     
            </div>
            </div>
         </div>
        )
    }
}
export default (UploadReport);