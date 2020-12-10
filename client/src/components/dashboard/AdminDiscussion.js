import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Creategroup from "../discussion/Creategroup";
import io from "socket.io-client";  
import AdminSideNav from "../layout/AdminSideNav";
import AdminNavbar from "../layout/AdminNavbar";

class AdminDiscussion extends Component {
   
  constructor(props){
    super(props)
    this.state = {
      ongroup:false,
      openMsg:true,
      message_details:[{
        message_id:4,client_id:14,user_id:45,client_name:"Minal",user_name:"aaabd",super_admin_name:"ahdu",message_txet:"hello how are you ? Good",mess_time:"10:30",message_no:"4",mess_tag:"",admin_id:[1,2,3],admin_name:"Anil",admin_position:'Develpoer',fav_id:1,fav_admin_name:'Davank',fav_admin_position:'Develpoer',archive_id:1,archive_name:'Yankyi',achrive_postion:'Security Expert',msgBy:"You", key: Date.now(),
      }],
      username: 'Nitesh',
      message: '',
      messages: []

      }
      this.socket = io('localhost:3001');

        this.socket.on('RECEIVE_MESSAGE', function(data){
          
            addMessage(data);
        });

        const addMessage = data => {  
            this.setState({messages: [...this.state.messages, data]});
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                message: this.state.message,
                author: this.state.username,
            })
            this.setState({message: ''});
        }
     }

onopengroup=(e)=>{
  e.preventDefault();
  const {ongroup }=this.state;
  this.setState({ongroup:true});
}

 render_chatList() {
    return this.state.message_details.map((message_details, index) => {
       const {  message_id,client_name,message_txet,mess_time,message_no}= message_details
       return (
        <div className="col_dash_discussion_mid_btm_det" key={message_id}>
        <div className="col_dash_discussion_mid_btm_det_img">
        <div className="img_users ">{client_name[0]}</div>
        </div>
        <div className="col_dash_discussion_mid_btm_det_username">
        <span className="user_name">{client_name}<p style={{fontSize: ".8vw", color: "grey"}}>{message_txet}</p></span>
        </div>
        <div className="col_dash_discussion_mid_btm_det_status">
        <div className="col_dash_discussion_mid_btm_det_status_msg">
        <span className="mes_number active">{message_no}</span>
        </div>
        <div className="col_dash_discussion_mid_btm_det_status_time">
        <spna>{mess_time}</spna>
        </div>
        </div>  
        </div>
        )
     })
  }
  render_userList(){
    return this.state.message_details.map((message_details,index)=>{
      const {admin_id,admin_name,admin_position}=message_details
      return(
        <div className="col_dash_discussion_mid_btm_det" key={admin_id}>
        <div className="col_dash_discussion_mid_btm_det_img">
        <div className="img_users ">{admin_name[0]}</div>
        </div>
        <div className="col_dash_discussion_mid_btm_det_username">
            <span className="user_name">{admin_name} <br/><span style={{fontSize: ".8vw", color: "grey"}}>{admin_position}</span></span>
        </div>  
      </div>
      
      )
    })
  }
  render_favList(){
    return this.state.message_details.map((message_details,index)=>{
      const {fav_id,fav_admin_name,fav_admin_position}=message_details
      return(
        <div className="col_dash_discussion_mid_btm_det" key={fav_id}>
        <div className="col_dash_discussion_mid_btm_det_img">
        <div className="img_users ">{fav_admin_name[0]}</div>
        </div>
        <div className="col_dash_discussion_mid_btm_det_username">
            <span className="user_name">{fav_admin_name} <br/><span style={{fontSize: ".8vw", color: "grey"}}>{fav_admin_position}</span></span>
        </div>
        </div>
      )
    })
  }
  render_arcList(){
    return this.state.message_details.map((message_details,index)=>{
      const {archive_id,archive_name,achrive_postion}=message_details
      return(
        <div className="col_dash_discussion_mid_btm_det" key={archive_id}>
        <div className="col_dash_discussion_mid_btm_det_img">
        <div className="img_users ">{archive_name[0]}</div>
        </div>
        <div className="col_dash_discussion_mid_btm_det_username">
            <span className="user_name">{archive_name} <br/><span style={{fontSize: ".8vw", color: "grey"}}>{achrive_postion}</span></span>
        </div>
        </div>
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
  </div>
  <div className="col_dash_2_90_d" id="blur_back">
    <div className="col_dash_2_90_discussion">
    <Tabs className="col_dash_discussion_left">
      <TabList className="col_dash_discussion_left_nav">
      <Tab className="col_dash_discussion_left_mid_inner">
      <button className="btn_common_info side_icon"><span className="tool-tip">Chat</span><i className="fa fa-comments" id="active_icons_1" aria-hidden="true"></i></button>
     </Tab>
      <Tab className="col_dash_discussion_left_mid_inner">
      <button className="btn_common_info side_icon" ><span className="tool-tip">Member</span><i className="fa fa-user" id="active_icons_2" aria-hidden="true"></i></button>
     </Tab>
     <Tab className="col_dash_discussion_left_mid_inner">
     <button className="btn_common_info side_icon" ><span className="tool-tip">Important</span><i className="fa fa-star" id="active_icons_3" aria-hidden="true"></i></button>

     </Tab>
     <Tab className="col_dash_discussion_left_mid_inner">
     <button className="btn_common_info side_icon" ><span className="tool-tip">Archive</span><i className="fa fa-archive" id="active_icons_4" aria-hidden="true"></i></button>
     </Tab>
     
     <div className="col_dash_discussion_left_btm" style={{marginTop:"20vh"}}>
        <div className="col_dash_discussion_left_btm_inner">
          <button className="btn_common_info side_icon_sqr_user">
        <span className="img_users_left">M</span>
          </button>
        </div>
        </div>
      </TabList>
    <TabPanel className="col_dash_discussion_left_mid">
    <div className="inner_col_dash_discussion_mid_1">
    <div className="col_dash_discussion_mid_top">
                    <div className="col_dash_discussion_mid_top_left">
                    <p className="chats_head">Chats</p>
                    </div>
                    <div className="col_dash_discussion_mid_top_right">
                      <div className="col_dash_discussion_mid_top_right_1">
                        <button className="btn_common_info" onClick={this.onopengroup} style={{border: "1px solid rgba(128, 128, 128, 0.897)"}}><span className="tool-tip">New Team</span><i className="fa fa-users" aria-hidden="true"></i></button>
                    
                      </div>
                      <div className="col_dash_discussion_mid_top_right_1">
                        <button className="btn_common_info" onClick={this.open_friend} style={{border: "1px solid rgba(128, 128, 128, 0.897)"}}><span className="tool-tip">New Chat</span><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                 
                      </div>
                    </div>
                  </div>
                  <div className="col_dash_discussion_mid_mid">
                    <div className="col_dash_discussion_mid_mid_inner">
                       <input type="search" placeholder="Search Chats" className="input_user_search"/>
                    </div>
                  </div>
                  <div className="col_dash_discussion_mid_btm">
                    {this.render_chatList()} 
                </div>
                </div>
    </TabPanel>
    <TabPanel className="col_dash_discussion_left_mid">
    <div className="inner_col_dash_discussion_mid_2" id="inner_col_dash_discussion_mid_2" >
      <div className="col_dash_discussion_mid_top">
        <div className="col_dash_discussion_mid_top_left">
        <p className="chats_head">Admin</p>
        </div>
        <div className="col_dash_discussion_mid_top_right">
          <div className="col_dash_discussion_mid_top_right_1">
            <button className="btn_common_info" onClick={this.onopengroup} style={{border: "1px solid rgba(128, 128, 128, 0.897)"}}><span className="tool-tip">New Team</span><i className="fa fa-users" aria-hidden="true"></i></button>
          </div>
        </div>
      </div>
      <div className="col_dash_discussion_mid_mid">
        <div className="col_dash_discussion_mid_mid_inner">
           <input type="search" placeholder="Search Admin" className="input_user_search"/>
        </div>
      </div>
      <div className="col_dash_discussion_mid_btm">
       {this.render_userList()}
       </div> 
    </div>
    </TabPanel>
    <TabPanel className="col_dash_discussion_left_mid">
    <div className="inner_col_dash_discussion_mid_3" id="inner_col_dash_discussion_mid_3">
                  <div className="col_dash_discussion_mid_top">
                    <div className="col_dash_discussion_mid_top_left">
                    <p className="chats_head">Favorites</p>
                    </div>
                    
                  </div>
                  <div className="col_dash_discussion_mid_mid">
                    <div className="col_dash_discussion_mid_mid_inner">
                       <input type="search" placeholder="Search Favorites" className="input_user_search"/>
                    </div>
                  </div>
                  <div className="col_dash_discussion_mid_btm">
                  {this.render_favList()} 
                  </div> 
                </div>
    </TabPanel>
    <TabPanel className="col_dash_discussion_left_mid">
      <div className="inner_col_dash_discussion_mid_4" id="inner_col_dash_discussion_mid_4">
    <div className="col_dash_discussion_mid_top">
      <div className="col_dash_discussion_mid_top_left">
      <p className="chats_head">Archived</p>
      </div>      
    </div>
    <div className="col_dash_discussion_mid_mid">
      <div className="col_dash_discussion_mid_mid_inner">
         <input type="search" placeholder="Search Archived" className="input_user_search"/>
      </div>
    </div>
    <div className="col_dash_discussion_mid_btm">
      {this.render_arcList()}  
     </div> 
  </div>     
    </TabPanel>
    </Tabs> 
    <div className="col_dash_discussion_right">
    {this.state.openMsg && 
    <div className="col_dash_discussion_right_inner" id="col_dash_discussion_right_inner">
           <div className="col_dash_discussion_right_top">
             <div className="col_dash_discussion_right_top_left">
                <div  className="col_dash_discussion_right_top_left_1">
                  <span className="img_users_top">T</span>
                </div>
                <div  className="col_dash_discussion_right_top_left_2">
                  <span className="users_name_top">Tarun</span>  
                </div>
          </div>
          <div className="col_dash_discussion_right_top_right">
              <div  className="col_dash_discussion_right_top_right_1">
              </div>
              <div  className="col_dash_discussion_right_top_right_1">
                <button className="btn_common_info"><span className="tool-tip">Connect to Email</span><i className="fa fa-envelope" aria-hidden="true"></i></button>
              </div>
              <div  className="col_dash_discussion_right_top_right_2">
                <button className="btn_common_info opendropdown"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></button>
               <div className="dropdown_top_right">
                <a ><li className="list_drop_top_right">Profile</li></a>
                  <a > <li className="list_drop_top_right">Archive</li></a>
                  <a ><li className="list_drop_top_right">Clear Chat</li></a>
                  <a ><li className="list_drop_top_right">Block</li></a>
               </div>
              </div>
          </div>
           </div>
           <div className="col_dash_discussion_right_msgbox" >   
           <div>
            { this.state.messages.map(message => {
              return (
              <div className="messagessent">{message.auther} {message.message} </div>
              )
              })
            }
          </div> 
          
          </div>
          <div className="col_dash_discussion_right_bottom" > 
              <input type="text" placeholder="Message" className="form_control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
              <button onClick={this.sendMessage} className="btn_form_control">Send</button>
         </div>  
         </div>  
    }
    </div>
    </div>
   </div>
    {this.state.ongroup && <Creategroup/>}    
   </div>  
  </div>
  </Fragment>
    );
  }
}
class Mcopy extends Component{
  constructor(props){
    super(props)
   
    this.state = {
      opencopymsg:false,
      message:[{
        message_id:4,client_id:14,user_id:45,client_name:"Minal",user_name:"aaabd",super_admin_name:"ahdu",message_txet:"hello how are you ? Good",mess_time:"10:30",message_no:"4",mess_tag:"",admin_id:[1,2,3],admin_name:"Anil",admin_position:'Develpoer',fav_id:1,fav_admin_name:'Davank',fav_admin_position:'Develpoer',archive_id:1,archive_name:'Yankyi',achrive_postion:'Security Expert'
      }]
      }
  }
  list_of_admin(){
    return this.state.message.map((message,index)=>{
      const{admin_id,admin_name,message_id}=message
      return(
        <li onClick={this.openMcopymsg} key={message_id} style={{cursor:"pointer"}}>
        <div className="msg_copy_det">
          <span className="circle_avatar">{admin_id}</span>{admin_name}
        </div>
        <div className="msg_copy_down">
          <button className="angle_down" onClick={this.openMcopymsg} ><i className="fa fa-angle-down" aria-hidden="true" ></i></button>
        </div>
      </li>
      )
    })
  }    
  openMcopymsg=e=>{
    e.preventDefault();
    const {opencopymsg}=this.state;
    this.setState({opencopymsg:!opencopymsg})
  }
  render(){
    return(
      <div className="col_dash_discussion_right_inner_2">
            <div className="col_dash_discussion_right_top">
             <p style={{fontSize:"1.4vw",fontWeight:"600",padding:"1vw 0"}}>Message Details</p>   
            </div>
            <div className="col_dash_discussion_right_inner_2_body">
               <ul className="msg_copy">
               {this.list_of_admin()}
                 </ul>
               {this.state.opencopymsg && 
               <div className="hidden_msg_list" id="hidden_msg_list">
                <div className="col_dash_discussion_right_msgbox_det_left">
                  <div className="msg_content">  
                   <div className="msg_content_feild">
                     <div className="others_msg_feild">
                     <span className="others_msg"></span>
                       <p className="u_name_sender">Tarun 11:10 am</p>
                       <p className="main_msg">Hey Mohit how was you day?</p>
                     </div>
                   </div>
                  </div>
                  </div>
                  <div className="col_dash_discussion_right_msgbox_det_right">
                   <div className="msg_content">
                     <div className="msg_content_feild">
                       <div className="self_msg_feild">
                       <span className="others_msg"></span>
                         <p className="u_name_sender">You 11:10 am</p>
                         <p className="main_msg_right">Hey Tarun how was you day?</p>
                       </div>
                     </div>
                    </div>  
                 </div>         
               </div>
               }
            </div>
          </div>
    )
  }
} 
AdminDiscussion.propTypes = {
  auth: PropTypes.object.isRequired,
  users:PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  users:state.users

});
export default connect(
  mapStateToProps,
)(AdminDiscussion);