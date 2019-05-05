import React,{Component} from 'react'
import AddEventForm from '../../components/AddEventForm/AddEventForm'


class AddEventPage extends Component{



  render(){
    console.log(this.props,'test this.props')
    return(
      <div>
      <h1>Add a stress event</h1>
      <AddEventForm props={this.props}/>
      </div>
    )
  }
}

export default AddEventPage