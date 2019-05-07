import React, { Component } from 'react'
import EventContext from '../../context/EventContext'
import EventApiService from '../../services/event-api-service'
import {Link} from 'react-router-dom'
import {NiceDate} from '../../components/Util/Util'
import ParticleComponent from "../../ParticleComponent";
import './EventPage.css'

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
    
    return <>
      <span id='stress_event'>{event.stress_event}</span>
      <div id='event_details'>User Name: {event.full_name}</div>
      <div id='event_details' >stress score: {event.stress_score}</div>
      <div id='event_details'>working efficiency: {event.work_efficiency}</div>
      <div id='event_details'>coping: {event.coping}</div>
      <div id='event_details'>date updated: <NiceDate date={event.date_recorded} /></div>
      <div id='event_details'>mood: {event.mood}</div>
      <div id='event_details'>trigger of stress: {event.stress_cause}</div>                
      <div id='event_details'>symptoms: {event.symptoms}</div>
      
      
    </>
  }

  render(){    
    let content = this.renderEvent()    
    const {eventId} = this.props.match.params
    
    return(
      <section className='EventPage'>
      <div className='event_page_content'>
      {content}
      <div className='event_update_button'>
      <button className='content_delete' type='button' onClick={()=>this.deleteEventRequest(eventId)}>delete</button>
      
      <Link          
        to={`/edit-event/${eventId}`}>
          edit
        </Link>
        </div>
        </div>
        <ParticleComponent />
      </section>
    )
  }

}