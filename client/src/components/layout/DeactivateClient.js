import React, {Component} from "react";

class DeactivateClinet extends Component{
    closeDeactivate = (e)=>{
      e.preventDefault();
      window.location.reload(false);
   };
    render(){
  
      return(
        <div className="hidden_add_asign_unwork"  id="hidden_add_asign_unwork">
        <div className="hidden_add_asign_unwork_inner">
           <div className="hidden_add_asign_unwork_inner_heading">
            <div className="name_head_assign">
                <p>Deactivate Client</p>
              </div>
              <div className="close_btn_group_assign">
              <button className="slide_right_close" onClick={this.closeDeactivate}><i className="fa fa-times" aria-hidden="true" style={{fontSize: "1.4vw"}} ></i></button>
            </div>
            </div>
             <div className="main_hidden_add_deactivate_unwork_inner">
              <form>
               
                <li>
                  <label>Client Id</label><br/>
                  <select aria-multiselectable="false">
                    <option>Client Id1</option>
                    <option>Client Id2</option>
                    <option>Client Id3</option>
                    <option>Client Id4</option>
                    <option>Client Id5</option>
                    <option>Client Id6</option>
                    <option>Client Id7</option>
                    <option>Client Id8</option>
                  </select>
                </li> 

                <li>
                  <label>Client Name</label><br/>
                  <input type="text" placeholder="Client Name"/>
                </li>
               
                <li><div className="fixed_btn_deactivate"><center><button type="submit">Deactivate</button></center>
                </div></li>
              </form>
             </div>
          </div>
      </div>
        )
    }
  }
  export default (DeactivateClinet);