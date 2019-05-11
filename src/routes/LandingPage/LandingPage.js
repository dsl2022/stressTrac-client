import React,{Component} from 'react'
import './LandingPage.css'
import ParticleComponent from "../../ParticleComponent";
import {Link} from 'react-router-dom'
// import demo_1 from '../../assets/images/demo_1.png'
// import demo_2 from '../../assets/images/demo_2.png'
// import demo_3 from '../../assets/images/demo_3.png'
// import demo_4 from '../../assets/images/demo_4.png'
import chart_1 from '../../assets/gif/chart_1.gif'
import pie_chart from '../../assets/gif/pie_chart.gif'
import demo from '../../assets/gif/demo.gif'
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
        <div className='how-it-work-demo'>
        <div className='chart_1'>
          <img src={demo} alt='chart_1' width='400px'/>
          <p>
            New users can experience StreSTrac through its 
            Demo feature
          </p>
        </div>
        <div className='images_group'>
        <div className='chart_2'>
          <img src={chart_1} alt='chart_2' width='400px'/>
          <p>
            StreSTrac provide informative charts based on your
            data entry
          </p>
        </div>
        <div className='chart_3'>
          <img src={pie_chart} alt='chart_3' width='400px'/>
          <p>
            StreSTrac is safe and secured, start using it now
          </p>
        </div>
        
      
        </div>
        </div>
     </div>
         
       
       
        
        <ParticleComponent />
       
        
        </div>
        
        
    )
  }
}

