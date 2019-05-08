import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../Header/Header'
import {BrowserRouter} from 'react-router-dom'
import { EventListProvider } from '../../context/EventListContext'
import {EventProvider} from '../../context/EventContext'
import {LoginLogoutContextProvider} from '../../context/LoginLogoutContext'
it('render without crashing',()=>{
  const div = document.createElement('div')
  ReactDOM.render(
  
    <BrowserRouter>
    <EventListProvider>
      <EventProvider>
        <LoginLogoutContextProvider>
          <Header />
        </LoginLogoutContextProvider>
      </EventProvider>
    </EventListProvider>
  </BrowserRouter>
  ,div)
  ReactDOM.unmountComponentAtNode(div)
})