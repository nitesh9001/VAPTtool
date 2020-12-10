import React, { Component ,Fragment} from "react";
import Navbar from '../layout/Navbar';

class  Landing extends Component{
    render(){
   return (
     <Fragment>
       <Navbar/>
       <div>
       <div class="vdo">
 	
 	     <div class="vdo1">
        <section class="showcase">
          <div class="video-container">
            <video src="https://traversymedia.com/downloads/video.mov" autoplay muted loop></video>
          </div>
        </section>
 	    </div>
 	    <div class="vdo2">
 		
    	</div>
     </div>
            <div id="quick-info-swap">
        <div id="quick-links-container">
        <div id="quick-links">
        <ul>
            <li><span  id="website-design" class=" active">About VMS</span></li>
            <li><span id="website-design" >What we get</span></li>
            <li><span id="website-design" >How it works</span></li>
        </ul>
        </div>
        <div id="quick-information">
        <div class="website-design">
        <h3>lorem</h3>
        <p>Lorem ipsum dolor sit amet..Associations must grasp development to endure the problematic changes that are happening in the commercial center.</p>
            <br />
        <a href="#" class="button">lorem</a>

        </div>
        <div class="graphic-design">
        <h3>lorem</h3>
        <p>Lorem ipsum dolor sit amet..Associations must grasp development to endure the problematic changes that are happening in the commercial center.</p>
        <br />
        <a href="#" class="button">lorem</a>

        </div>
        <div class="wordpress">
        <h3>lorem</h3>
        <p>Lorem ipsum dolor sit amet..Associations must grasp development to endure the problematic changes that are happening in the commercial center..</p>
        <br />
        <a href="#" class="button">lorem</a>

        </div>
        <div class="both"></div>

        </div>
        <div class="both"></div>
        </div>
        </div> 

    </div>
     </Fragment>
   )   
}}
export default (Landing);