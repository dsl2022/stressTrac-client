import React,{Component} from 'react'
import AddEventForm from '../../components/AddEventForm/AddEventForm'


class AddEventPage extends Component{



  render(){
    return(
      <div>
      <h1>Add a stress event</h1>
      <AddEventForm/>
      </div>
    )
  }
}

export default AddEventPage