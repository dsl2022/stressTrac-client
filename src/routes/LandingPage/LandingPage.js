import React,{Component} from 'react'
import './LandingPage.css'
import ParticleComponent from "../../ParticleComponent";
import {Link} from 'react-router-dom'
import demo_1 from '../../assets/images/demo_1.png'
import demo_2 from '../../assets/images/demo_2.png'
import demo_3 from '../../assets/images/demo_3.png'
import demo_4 from '../../assets/images/demo_4.png'

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
        
          <img src={demo_1} alt='demo_1' width='200px'/>
        
        
          <img src={demo_2} alt='demo_2' width='200px'/>
        
        
          <img src={demo_3} alt='demo_2' width='400px'/>
        
      
          <img src={demo_4} alt='demo_4' width='400px'/>
      
        </div>
     </div>
         
       
       
        
        <ParticleComponent />
       
        
        </div>
        
        
    )
  }
}

