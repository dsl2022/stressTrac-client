import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventListItem extends Component{
  render(){
    const{event} = this.props
    return(
      <Link to={`/events/${event.id}`} className='EventListItem'>
          <h2 className='ArticleListItem__heading'>
            {event.stress_event}
          </h2>
      </Link>
    )
  }
}