import React, {Component} from "react";

class HiddenProject extends Component{
    closeProject = (e)=>{
      e.preventDefault();
      window.location.reload(false);
   };
    render(){
  
      return(
        <div className="hidden_projectadd_download" >
        <div className="hidden_report_format_download_inner">
        <div className="hidden_report_format_download_inner_header"> 
            <div className="heading_download_reports" style={{width:"90%"}}>
              <p>Add Projects</p>
            </div>
            <div className="heading_download_reports" style={{width:"10%"}}>
             <td><button className="btn_close_reports" onClick={this.closeProject}><i className="fa fa-times" style={{fontSize: "1.2vw"}} aria-hidden="true"></i></button></td>
            </div>
        </div>
        <div className="inner_form_super_projects">
          <form>
            <div className="feild_for_new_project">
              <label>Project ID</label>
              <input placeholder="Project Id" type="text" disabled/>
            </div>
            <div className="feild_for_new_project">
              <label>Project Name</label>
              <input placeholder="Project Name" type="text" />
            </div>
            <div className="feild_for_new_project">
              <label>Asset Tagging</label><br/>
             <textarea disabled>Asset Selected</textarea><br/>
              <a className="btn_assets_tagging">Select Asset tag</a>
          <div className="panel">
              <table className="panel_add_new">
                <thead>
                  <tr>
                    <td>Select</td>
                    <td>Asset Id</td>
                    <td>Asset Type</td>
                    <td><a href="#">Add Assets</a></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="checkbox"/></td>
                    <td>145122</td>
                    <td>Sevrer</td>
                  </tr>
                </tbody>
              </table>
          </div>
            </div>
            <div className="feild_for_new_project">
              <label>Upload Report</label>
              <input placeholder="Uplaod Report" type="file" />
            </div>
            <div className="feild_for_new_project">
              <label>Download Format CSV Report</label>
              <button placeholder="Fomrat" type="file" className="report_format_down">Downlaod</button>
            </div>
            <button className="create_project">Create Project</button>
          </form>
        </div>
        </div>
        </div>
      )
    }
  }
  export default (HiddenProject);