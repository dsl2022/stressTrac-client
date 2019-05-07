import React,{Component} from 'react'
import AddEventForm from '../../components/AddEventForm/AddEventForm'
import './AddEventPage.css'

class AddEventPage extends Component{



  render(){
    console.log(this.props,'test this.props')
    return(
      <div className='add_event_page'>
      <h1>Add a stress event</h1>
      <div className='add_event_form'>
      <AddEventForm props={this.props}/>
      </div>
      </div>
    )
  }
}

export default AddEventPage