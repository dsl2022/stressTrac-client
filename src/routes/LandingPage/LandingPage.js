import React,{Component} from 'react'
import './LandingPage.css'
import ParticleComponent from "../../ParticleComponent";
import {Link} from 'react-router-dom'

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
        
     </div>
         
       
       
        
        <ParticleComponent />
       
        
        </div>
        
        
    )
  }
}

