import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { format as formatDate } from 'date-fns'
export default class EventListItem extends Component{
  render(){
    const{event} = this.props
    return(
      <Link to={`/events/${event.id}`} className='EventListItem'>
          <h2 className='ArticleListItem__heading'>
            {event.stress_event}
          </h2>
          <EventDate event={event}/>
      </Link>
    )
  }
}

function NiceDate({ date, format='Do MMMM YYYY h:mm a' }) {
  return formatDate(date, format)
}

function EventDate({ event }) {
  return (
    <span className='EventListItem__date'>
      <NiceDate
        date={event.date_recorded}
      />
    </span>
  )
}