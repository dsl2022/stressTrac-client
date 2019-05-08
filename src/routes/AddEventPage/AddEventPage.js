import React,{Component} from 'react'
import AddEventForm from '../../components/AddEventForm/AddEventForm'
import ParticleComponent from "../../ParticleComponent";
import './AddEventPage.css'

class AddEventPage extends Component{



  render(){
    console.log(this.props,'test this.props')
    return(
      <div className='add_event_page'>
      <div className='add_event_title'>Add a stress event</div>
      <div className='add_event_form'>
      <AddEventForm props={this.props}/>
      </div>
      <ParticleComponent />
      </div>
    )
  }
}

export default AddEventPage