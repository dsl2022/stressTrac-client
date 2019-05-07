import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './EventListItem.css'
import {EventDate} from '../Util/Util'
export default class EventListItem extends Component{
  render(){
    const{event} = this.props
    let eventLevel
    if(event.stress_score===1)
        eventLevel='Mild'
    if(event.stress_score===2)
        eventLevel='Severe'
    if(event.stress_score===3)        
        eventLevel='acute'
    return(
      
      <Link to={`/events/${event.id}`} >
      <div className='EventListItem'>
          <div className='EventListItem__heading'>
          <h2 >
            {event.stress_event}
          </h2>
          </div>
          <div className='event_level'>
            {eventLevel}
          </div>
          <div className='event_date'>
            <EventDate event={event}/>
          </div>
          </div>
      </Link>
      
    )
  }
}
