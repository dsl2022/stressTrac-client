import React,{Component} from 'react'
import EventListContext from '../../context/EventListContext'
import EventApiService from '../../services/event-api-service'

export default class DeleteEventRequest extends Component{

  static contextType = EventListContext
  deleteEventRequest=(eventId)=>{
    EventApiService.deleteEvent(eventId) 
    console.log(this.props.props,'test delete props') 
    //this.props.history.push('/')
  }

  render(){
    console.log(this.context.eventList,'test eventList')
    return(
      <button type='button' onClick={()=>this.deleteEventRequest(this.props.eventId)}>delete</button>
    )
    
  }
}