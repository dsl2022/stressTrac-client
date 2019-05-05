import React from 'react'
import { format as formatDate } from 'date-fns'

export function NiceDate({ date, format='Do MMMM YYYY h:mm a' }) {
  return formatDate(date, format)
}

export function EventDate({ event }) {
  return (
    <span className='EventListItem__date'>
      <NiceDate
        date={event.date_recorded}
      />
    </span>
  )
}