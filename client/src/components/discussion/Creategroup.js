import React, { Component } from "react";
import { Link} from 'react-router-dom';

class Creategroup extends Component{
    closeGroup = (e)=>{
       e.preventDefault();
       window.location.reload(false);
    };
    render(){
        return(
            <div className="add_group_hidden" id="group_container">
            <div className="inner_add_group">
              <div className="headings">
                <div className="name_head">
                  <p><i className="fa fa-users" aria-hidden="true" style={{fontSize: "1.4vw"}}></i>New Group</p>
                </div>
                <div className="close_btn_group">
                  <button><i className="fa fa-times" aria-hidden="true" style={{fontSize: "1.4vw"}} onClick={this.closeGroup}></i></button>
                </div>
              </div>
              <div className="form_group">
                <form>
                  <li className="main_form_group"><input type="text" name="" id="" placeholder="Assign Group Name"/></li>
                  <li className="main_form_group"><textarea name="" id="" cols="100" rows="5" placeholder="Discribe"></textarea></li>
                  <li className="friend_list_group">
                    <ul className="add_frnd_to_group">
                      <li><input type="checkbox" name="" id="" /><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                      <li><input type="checkbox" name="" id=""/><Link >Manish</Link></li>
                    </ul> 
                </li>
                  <li className="btn_create_group"><button>Create Group</button></li>
                </form>
                </div>
            </div>
          </div>
    )
    }
}
export default (Creategroup);