import React,{Component} from 'react'
import './LandingPage.css'
import ParticleComponent from "../../ParticleComponent";
import {Link} from 'react-router-dom'
// import demo_1 from '../../assets/images/demo_1.png'
// import demo_2 from '../../assets/images/demo_2.png'
// import demo_3 from '../../assets/images/demo_3.png'
// import demo_4 from '../../assets/images/demo_4.png'
import chart_1 from '../../assets/gif/chart_1.gif'
export default class LandingPage extends Component{
  render(){
    return(
     
      <div className='LandingPageContent'>
     <div className='landing-hero'>
     <span id='landing-title'>SAY GOODBYE TO STRESS</span>
     <p className='landing-slogan'>Track your Stress, analyze, 
      ,understand, reflect, have your stress under control.
        </p>
        <div className='explore-streSTrac'>
        <Link 
          to='/register'
         > Explore StresTrac</Link>
      </div>
        </div>
     
     <div className='how-it-work'>
        HOW IT WORKS
        <div className='images_group'>
        
          <img src={chart_1} alt='demo_1' width='400px'/>
        
        
          
      
        </div>
     </div>
         
       
       
        
        <ParticleComponent />
       
        
        </div>
        
        
    )
  }
}

