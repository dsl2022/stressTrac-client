import React,{Component} from 'react'
import EditEventForm from '../../components/EditEventForm/EditEventForm'
import EventApiService from '../../services/event-api-service'
import EventContext from '../../context/EventContext'
class EditEventPage extends Component{
  static contextType = EventContext
  static defaultProps = {
    match:{params:{}}
  }
  componentDidMount(){
    const {eventId} = this.props.match.params
    console.log(eventId,'test eventId')
    this.context.clearError()
    EventApiService.getEvent(eventId)
      .then(this.context.setEvent)
      .catch(this.context.setError)
  }
  componentWillUnmount() {
    this.context.clearEvent()
  }


  render(){
    console.log(this.comtext,'test context for event')
    return(
      <div>
      <h1>Edit a stress event</h1>
      <EditEventForm props={this.props}/>
      </div>
    )
  }
}

export default EditEventPage