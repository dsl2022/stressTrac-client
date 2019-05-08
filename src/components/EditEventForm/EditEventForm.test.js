import React from 'react'
import ReactDOM from 'react-dom'
import EditEventForm from '../EditEventForm/EditEventForm'

it('render without crashing',()=>{
  const div = document.createElement('div')
  ReactDOM.render(
  
  <EditEventForm/>
  ,div)
  ReactDOM.unmountComponentAtNode(div)
})