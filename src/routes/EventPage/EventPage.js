import React, { Component } from 'react'
import EventContext from '../../context/EventContext'
import EventApiService from '../../services/event-api-service'
import {Link} from 'react-router-dom'
import {NiceDate} from '../../components/Util/Util'
import './EventPage.css'
//import DeleteEventRequest from '../../components/EventDelete/deleteEvent'
export default class EventPage extends Component{
  static defaultProps = {
    match:{params:{}}
  }

  static contextType = EventContext

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

  deleteEventRequest=(eventId)=>{
    EventApiService.deleteEvent(eventId) 
    .then(()=>this.props.history.push('/'))
    
  }



  renderEvent(){
    const{event} = this.context
    // console.log(event,'test render event')
    return <>
      <h2>{event.stress_event}</h2>
      <div>User Name: {event.full_name}</div>
      <div>stress score: {event.stress_score}</div>
      <div>working efficiency: {event.work_efficiency}</div>
      <div>coping: {event.coping}</div>
      <div>date updated: <NiceDate date={event.date_recorded} /></div>
      <div>mood: {event.mood}</div>
      <div>trigger of stress: {event.stress_cause}</div>                
      <div>symptoms: {event.symptoms}</div>
      
      
    </>
  }

  render(){
    console.log(this.context,'test event page context')
    let content = this.renderEvent()
    console.log(content,'test content inside render')
    const {eventId} = this.props.match.params
    console.log(eventId,'test id')
    return(
      <section className='EventPage'>
      {content}
      <button type='button' onClick={()=>this.deleteEventRequest(eventId)}>delete</button>
      <Link
          //onClick={this.handleLogoutClick}
        to={`/edit-event/${eventId}`}>
          edit
        </Link>
      </section>
    )
  }

}