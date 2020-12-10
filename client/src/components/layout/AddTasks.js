import React, {Component} from "react";

class HiddenAssets extends Component{
  constructor(){
    super()
    this.state = {
      disabled:true
   };
 }
 checkbox_on=e=>{
   e.preventDefault();
   const{disabled}=this.state
   this.setState({
    disabled :!disabled
   })
 }
    closeAsset = (e)=>{
      e.preventDefault();
      window.location.reload(false);
   };
    render(){
  
      return(
        <div className="hidden_add_asign_unwork"  id="hidden_add_asign_unwork">
        <div className="hidden_add_asign_unwork_inner">
           <div className="hidden_add_asign_unwork_inner_heading">
            <div className="name_head_assign">
              <p>Assign Task</p>
            </div>
            <div className="close_btn_group_assign">
              <button className="slide_right_close" onClick={this.closeAsset}><i className="fa fa-times" aria-hidden="true" style={{fontSize: "1.4vw"}} ></i></button>
            </div>
           </div>
           <div className="main_hidden_add_asign_unwork_inner">
            <form>
              <li>
                <label>Task ID</label><br/>
                <input type="text" placeholder="Task ID"/>
              </li>
              <li>
                <label>Admin Name</label><br/>
                <input type="text" placeholder="Admin Name"/>
              </li>
              <li>
                <label>Assigned to</label><br/>
                <select aria-multiselectable="false">
                  <option>Assidned1</option>
                  <option>Assidned1</option>
                  <option>Assidned1</option>
                  <option>Assidned1</option>
                  <option>Assidned1</option>
                  <option>Assidned1</option>
                  <option>Assidned1</option>
                  <option>Assidned1</option>
                </select>
              </li>
              <li>
                <label>Risk</label><br/>
                <input type="text" placeholder="Risk"/>
              </li>
              <li>
                <label>Vulnerability</label><br/>
                <input type="text" placeholder="Vulnerability"/>
              </li>
              <li>
                <label>Status</label><br/>
                <select aria-multiselectable="false">
                  <option>Asset1</option>
                  <option>Asset1</option></select>

              </li>
              <li>
                <label>Assign Date</label><br/>
                <input type="date" placeholder=" Date"/>
                <input type="time" placeholder=" Time"/>
              </li>
              <li>
                <label>Assets</label><br/>
                <select aria-multiselectable="false">
                  <option>Asset1</option>
                  <option>Asset1</option>
                  <option>Asset1</option>
                  <option>Asset1</option>
                  <option>Asset1</option>
                  <option>Asset1</option>
                  <option>Asset1</option>
                </select>
              </li>
              <li>
                <label>Implementation Notes</label><br/>
              <textarea name="" id="" cols="50" rows="5" placeholder="Implementation notes" ></textarea>
              </li>
              <li>
                <label>
                   <input type="checkbox" name="" id="yourBox" onChange={this.checkbox_on}/>Send email assignd to(Multiple assign email sepreated by ' , ' )
                </label><br/>
                 <input type="email" placeholder="Enter Assigne email" id="yourText" disabled={this.state.disabled}/>
              </li>
              <li><div className="fixed_btn_assign"><button type="submit">Submit</button></div></li>
            </form>
           </div>
        </div>
        </div>
        )
    }
  }
  export default (HiddenAssets);