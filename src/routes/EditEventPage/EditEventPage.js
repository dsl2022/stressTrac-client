import React,{Component} from 'react'
import EditEventForm from '../../components/EditEventForm/EditEventForm'
import EventApiService from '../../services/event-api-service'
import EventContext from '../../context/EventContext'
import './EditEventPage.css'

class EditEventPage extends Component{
  static contextType = EventContext
  static defaultProps = {
    match:{params:{}}
  }
  componentDidMount(){
    const {eventId} = this.props.match.params    
    this.context.clearError()
    EventApiService.getEvent(eventId)
      .then(this.context.setEvent)
      .catch(this.context.setError)
  }
  componentWillUnmount() {
    this.context.clearEvent()
  }


  render(){
    
    return(
      <div className='edit_event_page'>
      <div className='edit_event_title'>Edit a stress event</div>
      <div className='edit_event_form'>
      <EditEventForm props={this.props}/>
      </div>
      </div>
    )
  }
}

export default EditEventPage