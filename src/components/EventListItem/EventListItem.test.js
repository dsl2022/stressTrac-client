import React from 'react'
import ReactDOM from 'react-dom'
import EventListItem from '../EventListItem/EventListItem'
import {BrowserRouter} from 'react-router-dom'
it('render without crashing',()=>{
  const div = document.createElement('div')



  const event = {      
    coping: "listen to music",
    date_recorded: "2019-04-30T18:51:34.646Z",
    id:2,
    mood:4,
    stress_cause:"work related",
    stress_event:"crazy event",
    stress_score:4,
    symptoms: "headache",
    user_id:1,
    work_efficiency:5,
}
  const key=event.id
  
  ReactDOM.render(
  <BrowserRouter>
    <EventListItem key={key} event={event}/>
  </BrowserRouter>
  ,div)
  ReactDOM.unmountComponentAtNode(div)
})