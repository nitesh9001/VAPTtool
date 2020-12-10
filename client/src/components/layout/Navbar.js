import React, { Component } from "react";
import {   Link, NavLink} from 'react-router-dom';
import mainlogo from '../../img/unnamed.png';
import '../../App.css';

class Navbar extends Component{
 
  render(){
   return (
      
      <div className="navigation_sec">
		<nav className="nav_inner_sec">
			<ul className="navbar_ul">
				<li><img src={mainlogo} className="logo"/></li>
			</ul>
			<ul className="navbar_ul">
				  <li className="navbar_ul_li"><NavLink to="/Home" className="alink" >Home</NavLink></li>
				  <li className="navbar_ul_li"><NavLink to="/About" className="alink">About</NavLink></li>
				  <li className="navbar_ul_li"><NavLink to="/OurServices" className="alink">Our Services</NavLink></li>
				  <li className="navbar_ul_li"><NavLink to="/Testimonials" className="alink">Testimonials</NavLink></li>
				  <li className="navbar_ul_li"><NavLink to="/ContactUs" className="alink">Contact Us</NavLink></li>
				  <li className="navbar_ul_li"><a href="/login" className="navbar_login_button" >Log In</a></li>
			  </ul>
		</nav>
	</div>
   )
}}
export default (Navbar);