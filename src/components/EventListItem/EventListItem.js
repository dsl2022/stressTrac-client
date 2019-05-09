import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './EventListItem.css'
import {EventDate} from '../Util/Util'
export default class EventListItem extends Component{
  render(){
    const{event} = this.props
    let eventLevel
    if(event.stress_score===0)
        eventLevel='Mild'
    if(event.stress_score===1)
        eventLevel='Moderate'
    if(event.stress_score===2)        
        eventLevel='severe'
    if(event.stress_score===3)        
        eventLevel='acute'    
    if(event.stress_score===4)        
        eventLevel='super acute'
    return(
      
      <Link to={`/events/${event.id}`} >
      <div className='EventListItem'>
          <div className='EventListItem__heading'>
          <div className='event_title'>
            {event.stress_event}
          </div>
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
